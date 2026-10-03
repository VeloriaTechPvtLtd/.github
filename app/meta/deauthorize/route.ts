import { readSignedRequest } from "@/lib/meta/signedRequest";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!process.env.META_APP_SECRET?.trim()) {
    return Response.json({ error: "Meta deauthorization is not configured." }, { status: 503 });
  }

  const payload = await readSignedRequest(request);
  if (!payload) return Response.json({ error: "Invalid Meta signed request." }, { status: 400 });

  // This marketing site does not persist Meta user or WhatsApp account data.
  // If account storage is added, revoke and delete the matching record here.
  return new Response(null, { status: 200, headers: { "Cache-Control": "no-store" } });
}
