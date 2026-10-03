import { createHmac, timingSafeEqual } from "node:crypto";

export type MetaSignedRequest = Record<string, unknown> & {
  algorithm?: string;
  user_id?: string | number;
};

function decodeBase64Url(value: string) {
  if (!/^[A-Za-z0-9_-]+$/.test(value)) return null;
  try {
    return Buffer.from(value.replace(/-/g, "+").replace(/_/g, "/"), "base64");
  } catch {
    return null;
  }
}

export function verifyMetaSignedRequest(value: unknown): MetaSignedRequest | null {
  const appSecret = process.env.META_APP_SECRET?.trim();
  if (!appSecret || typeof value !== "string") return null;

  const separator = value.indexOf(".");
  if (separator <= 0 || separator === value.length - 1 || value.indexOf(".", separator + 1) !== -1) return null;

  const signature = decodeBase64Url(value.slice(0, separator));
  const encodedPayload = value.slice(separator + 1);
  const payload = decodeBase64Url(encodedPayload);
  if (!signature || !payload) return null;

  const expected = createHmac("sha256", appSecret).update(encodedPayload).digest();
  if (signature.length !== expected.length || !timingSafeEqual(signature, expected)) return null;

  try {
    const parsed = JSON.parse(payload.toString("utf8")) as MetaSignedRequest;
    if (!parsed || typeof parsed !== "object" || parsed.algorithm?.toUpperCase() !== "HMAC-SHA256") return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function readSignedRequest(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  let signedRequest: unknown;

  if (contentType === "application/json") {
    const body = await request.json().catch(() => null) as { signed_request?: unknown } | null;
    signedRequest = body?.signed_request;
  } else {
    const body = await request.formData().catch(() => null);
    signedRequest = body?.get("signed_request");
  }

  return verifyMetaSignedRequest(signedRequest);
}
