const html = (title: string, message: string, status = 200) => new Response(
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | Veloria Tech</title></head><body><main><h1>${title}</h1><p>${message}</p></main></body></html>`,
  { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'" } },
);

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const error = params.get("error_description") || params.get("error_reason") || params.get("error");

  if (error) {
    return html("Meta authorization was not completed", "Return to the setup window and try again.", 400);
  }

  if (!params.get("code")) {
    // Meta's Redirect URI Validator checks this URL without an authorization code.
    return Response.json({ status: "ready", endpoint: "/meta/oauth/callback" }, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  // Do not discard or expose an OAuth code: this site currently has no connected
  // account store or signup client to complete the exchange and persist a token.
  return html("Meta callback is ready", "The website does not yet have a WhatsApp account connection service to finish this authorization.", 503);
}
