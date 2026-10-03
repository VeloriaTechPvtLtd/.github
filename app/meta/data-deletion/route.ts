import { randomUUID } from "node:crypto";
import { readSignedRequest } from "@/lib/meta/signedRequest";

export const runtime = "nodejs";

const SITE_URL = "https://veloriatech.com";

export async function GET(request: Request) {
  const code = new URL(request.url).searchParams.get("confirmation_code");
  if (!code) {
    return Response.json({ error: "A confirmation_code is required." }, { status: 400 });
  }

  return Response.json({
    confirmation_code: code,
    status: "completed",
    message: "No Meta user data is stored by Veloria Tech's website.",
  }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!process.env.META_APP_SECRET?.trim()) {
    return Response.json({ error: "Meta data deletion is not configured." }, { status: 503 });
  }

  const payload = await readSignedRequest(request);
  if (!payload) return Response.json({ error: "Invalid Meta signed request." }, { status: 400 });

  // This marketing site has no Meta-linked data store, so deletion is immediate.
  const confirmationCode = randomUUID();
  const url = new URL("/meta/data-deletion", SITE_URL);
  url.searchParams.set("confirmation_code", confirmationCode);

  return Response.json({ url: url.toString(), confirmation_code: confirmationCode }, {
    headers: { "Cache-Control": "no-store" },
  });
}
