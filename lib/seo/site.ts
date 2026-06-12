export const SITE_NAME = "Veloria Tech";
export const SITE_DESCRIPTION =
  "Veloria Tech — software development company specializing in mobile apps, web applications, AI solutions, and digital transformation.";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "https://veloriatech.com";
}

export const DEFAULT_OG_IMAGE = "/assets/hero-platform-visual.png";
