#!/usr/bin/env node
/**
 * Generates topic-specific SVG hero images for all blog posts (fallback).
 * For AI photographic heroes, use GenerateImage per post with the post title
 * and category, then convert to webp at public/assets/blogs/{id}-{slug}.webp.
 *
 * Export post list: node scripts/export-blog-posts.mjs
 * SVG fallback:      node scripts/generate-blog-images.mjs
 */
import { readFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public/assets/blogs");
const postsFile = join(__dirname, "blog-posts.json");

if (!existsSync(postsFile)) {
  execSync("node scripts/export-blog-posts.mjs", { cwd: root, stdio: "inherit" });
}

mkdirSync(outDir, { recursive: true });

const posts = JSON.parse(readFileSync(postsFile, "utf8"));

const BRAND = {
  bg: "#010120",
  bg2: "#191935",
  orange: "#fc4c02",
  purple: "#caaef5",
  magenta: "#ef2cc1",
  white: "#ffffff",
  muted: "#ffffff66",
};

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function hash(n) {
  return ((n * 2654435761) >>> 0) % 1000;
}

function detectTheme(post) {
  const t = `${post.title} ${post.slug} ${(post.tags || []).join(" ")}`.toLowerCase();
  if (/firebase|fcm|crashlytics|remote config/.test(t)) return "firebase";
  if (/posthog|session replay|feature flag/.test(t)) return "posthog";
  if (/moengage|push|in-app messag/.test(t)) return "moengage";
  if (/ga4|google analytics|attribution|cohort|funnel|analytics|mixpanel|dashboard|looker|metabase/.test(t))
    return "analytics";
  if (/vibe coding|cursor|ai-assisted|llm wrote|prompt-to|codegen|pair programming/.test(t))
    return "vibe-coding";
  if (/rag|llm|gpt|claude|agentic|vector|mcp|fine-tun|hallucin|multimodal|copilot/.test(t))
    return "ai";
  if (/flutter|app store|ios|android|bloc|riverpod|impeller|deep link|in-app purchase/.test(t))
    return "flutter";
  if (/react|vite|next\.js|typescript|tailwind|framer|seo|router/.test(t)) return "web";
  if (/aws|lambda|ecs|eks|terraform|cdk|rds|s3|cloudfront|supabase|mongodb|postgresql|serverless/.test(t))
    return "cloud";
  if (/n8n|zapier|webhook|automation|crm-to-billing|event-driven/.test(t)) return "automation";
  if (/design system|figma|tokens/.test(t)) return "design";
  if (/estimate|regulated|delivery|client project|shipping 50/.test(t)) return "company";
  return post.category.toLowerCase().replace(/\s+/g, "-");
}

function themeAccent(theme) {
  const map = {
    firebase: "#FFCA28",
    posthog: "#F9BD2B",
    moengage: "#E91E63",
    analytics: BRAND.orange,
    "vibe-coding": BRAND.purple,
    ai: BRAND.magenta,
    flutter: "#54C5F8",
    mobile: "#54C5F8",
    web: "#61DAFB",
    cloud: BRAND.orange,
    automation: BRAND.purple,
    design: BRAND.purple,
    company: BRAND.orange,
  };
  return map[theme] || BRAND.orange;
}

function drawScene(theme, id) {
  const h = hash(id);
  const accent = themeAccent(theme);
  const x = 80 + (h % 120);

  const scenes = {
    firebase: `
      <ellipse cx="950" cy="200" rx="90" ry="90" fill="${accent}" opacity="0.15"/>
      <path d="M920,240 L950,160 L980,240 L965,240 L960,220 L940,220 L935,240 Z" fill="${accent}" opacity="0.85"/>
      <rect x="700" y="120" width="280" height="180" rx="16" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2" opacity="0.9"/>
      <rect x="730" y="155" width="80" height="8" rx="4" fill="${accent}" opacity="0.7"/>
      <rect x="730" y="175" width="120" height="6" rx="3" fill="${BRAND.muted}"/>
      <rect x="730" y="195" width="100" height="6" rx="3" fill="${BRAND.muted}"/>
      <circle cx="780" cy="250" r="28" fill="none" stroke="${accent}" stroke-width="3" stroke-dasharray="8 6"/>
    `,
    posthog: `
      <rect x="720" y="100" width="320" height="200" rx="20" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <polyline points="760,260 800,200 840,230 880,170 920,210 960,150" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="800" cy="200" r="6" fill="${accent}"/>
      <circle cx="880" cy="170" r="6" fill="${BRAND.purple}"/>
      <rect x="760" y="130" width="100" height="12" rx="6" fill="${accent}" opacity="0.5"/>
    `,
    moengage: `
      <rect x="860" y="130" width="120" height="200" rx="24" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <rect x="878" y="155" width="84" height="120" rx="8" fill="#00000033"/>
      <circle cx="920" cy="300" r="14" fill="${accent}"/>
      <path d="M910,95 Q920,70 930,95 L920,110 Z" fill="${accent}" opacity="0.9"/>
      <circle cx="1000" cy="180" r="35" fill="${accent}" opacity="0.2"/>
    `,
    analytics: `
      <rect x="700" y="110" width="340" height="210" rx="16" fill="${BRAND.bg2}" stroke="${BRAND.purple}" stroke-width="1.5" opacity="0.95"/>
      <rect x="740" y="250" width="35" height="50" rx="4" fill="${BRAND.orange}" opacity="0.8"/>
      <rect x="790" y="220" width="35" height="80" rx="4" fill="${accent}" opacity="0.8"/>
      <rect x="840" y="190" width="35" height="110" rx="4" fill="${BRAND.purple}" opacity="0.8"/>
      <rect x="890" y="210" width="35" height="90" rx="4" fill="${BRAND.magenta}" opacity="0.7"/>
      <rect x="940" y="170" width="35" height="130" rx="4" fill="${BRAND.orange}" opacity="0.9"/>
      <polyline points="740,180 790,160 840,190 890,140 940,165 980,120" fill="none" stroke="${BRAND.white}" stroke-width="2" opacity="0.4"/>
    `,
    "vibe-coding": `
      <rect x="680" y="90" width="380" height="240" rx="12" fill="#0d0d1a" stroke="${BRAND.purple}" stroke-width="2"/>
      <rect x="680" y="90" width="380" height="36" rx="12" fill="${BRAND.bg2}"/>
      <circle cx="708" cy="108" r="6" fill="#ff5f57"/>
      <circle cx="728" cy="108" r="6" fill="#febc2e"/>
      <circle cx="748" cy="108" r="6" fill="#28c840"/>
      <text x="710" y="155" font-family="monospace" font-size="13" fill="${BRAND.purple}">// AI-assisted</text>
      <text x="710" y="178" font-family="monospace" font-size="13" fill="${BRAND.orange}">widget build()</text>
      <text x="710" y="201" font-family="monospace" font-size="13" fill="${BRAND.muted}">{ ... }</text>
      <path d="M980,280 L1020,240 L1060,280" fill="none" stroke="${accent}" stroke-width="3"/>
      <text x="990" y="300" font-family="sans-serif" font-size="11" fill="${accent}">vibe</text>
    `,
    ai: `
      <circle cx="900" cy="200" r="100" fill="none" stroke="${BRAND.purple}" stroke-width="1" opacity="0.3"/>
      <circle cx="900" cy="200" r="70" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.5"/>
      <circle cx="900" cy="200" r="20" fill="${accent}" opacity="0.9"/>
      <circle cx="780" cy="150" r="12" fill="${BRAND.purple}"/>
      <circle cx="1020" cy="150" r="12" fill="${BRAND.orange}"/>
      <circle cx="780" cy="260" r="12" fill="${BRAND.magenta}"/>
      <circle cx="1020" cy="260" r="12" fill="${BRAND.purple}"/>
      <line x1="792" y1="158" x2="880" y2="190" stroke="${BRAND.purple}" stroke-width="1.5" opacity="0.6"/>
      <line x1="1008" y1="158" x2="920" y2="190" stroke="${BRAND.orange}" stroke-width="1.5" opacity="0.6"/>
      <line x1="792" y1="252" x2="880" y2="210" stroke="${BRAND.magenta}" stroke-width="1.5" opacity="0.6"/>
      <line x1="1008" y1="252" x2="920" y2="210" stroke="${BRAND.purple}" stroke-width="1.5" opacity="0.6"/>
    `,
    flutter: `
      <rect x="870" y="110" width="130" height="230" rx="28" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2.5"/>
      <rect x="888" y="140" width="94" height="160" rx="8" fill="#00000044"/>
      <path d="M910,200 L940,170 L970,200 L955,200 L940,180 L925,200 Z" fill="${accent}" opacity="0.9"/>
      <circle cx="935" cy="330" r="10" fill="${BRAND.muted}"/>
    `,
    mobile: `
      <rect x="870" y="110" width="130" height="230" rx="28" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2.5"/>
      <rect x="888" y="140" width="94" height="160" rx="8" fill="#00000044"/>
      <rect x="905" y="170" width="60" height="8" rx="4" fill="${accent}"/>
      <rect x="905" y="190" width="45" height="6" rx="3" fill="${BRAND.muted}"/>
    `,
    web: `
      <rect x="700" y="100" width="360" height="230" rx="12" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <rect x="700" y="100" width="360" height="40" rx="12" fill="#0a0a18"/>
      <circle cx="725" cy="120" r="5" fill="#ff5f57"/>
      <circle cx="742" cy="120" r="5" fill="#febc2e"/>
      <circle cx="759" cy="120" r="5" fill="#28c840"/>
      <rect x="730" y="170" width="140" height="10" rx="5" fill="${accent}" opacity="0.7"/>
      <rect x="730" y="195" width="200" height="8" rx="4" fill="${BRAND.muted}"/>
      <rect x="730" y="215" width="180" height="8" rx="4" fill="${BRAND.muted}"/>
      <rect x="730" y="250" width="100" height="32" rx="8" fill="${BRAND.purple}" opacity="0.5"/>
    `,
    cloud: `
      <ellipse cx="850" cy="220" rx="120" ry="50" fill="${accent}" opacity="0.12"/>
      <ellipse cx="920" cy="200" rx="100" ry="45" fill="${BRAND.purple}" opacity="0.1"/>
      <rect x="760" y="180" width="50" height="80" rx="4" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="1.5"/>
      <rect x="825" y="160" width="50" height="100" rx="4" fill="${BRAND.bg2}" stroke="${BRAND.purple}" stroke-width="1.5"/>
      <rect x="890" y="175" width="50" height="85" rx="4" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="1.5"/>
      <rect x="955" y="190" width="50" height="70" rx="4" fill="${BRAND.bg2}" stroke="${BRAND.muted}" stroke-width="1.5"/>
      <circle cx="785" cy="200" r="4" fill="${accent}"/>
      <circle cx="850" cy="185" r="4" fill="${BRAND.purple}"/>
      <circle cx="915" cy="200" r="4" fill="${accent}"/>
    `,
    automation: `
      <circle cx="780" cy="200" r="30" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <circle cx="900" cy="150" r="30" fill="${BRAND.bg2}" stroke="${BRAND.purple}" stroke-width="2"/>
      <circle cx="1020" cy="200" r="30" fill="${BRAND.bg2}" stroke="${BRAND.orange}" stroke-width="2"/>
      <circle cx="900" cy="280" r="30" fill="${BRAND.bg2}" stroke="${BRAND.magenta}" stroke-width="2"/>
      <line x1="805" y1="185" x2="875" y2="165" stroke="${accent}" stroke-width="2" opacity="0.7"/>
      <line x1="925" y1="165" x2="995" y2="185" stroke="${BRAND.purple}" stroke-width="2" opacity="0.7"/>
      <line x1="805" y1="215" x2="875" y2="265" stroke="${BRAND.orange}" stroke-width="2" opacity="0.7"/>
      <line x1="925" y1="265" x2="995" y2="215" stroke="${BRAND.magenta}" stroke-width="2" opacity="0.7"/>
      <text x="893" y="155" font-size="14" fill="${BRAND.white}" text-anchor="middle">⚡</text>
    `,
    design: `
      <rect x="720" y="120" width="100" height="100" rx="8" fill="none" stroke="${BRAND.purple}" stroke-width="2" stroke-dasharray="6 4"/>
      <rect x="840" y="120" width="100" height="100" rx="8" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <rect x="960" y="120" width="100" height="100" rx="8" fill="none" stroke="${BRAND.muted}" stroke-width="1.5"/>
      <rect x="750" y="250" width="280" height="12" rx="6" fill="${BRAND.purple}" opacity="0.4"/>
      <rect x="750" y="275" width="200" height="8" rx="4" fill="${BRAND.muted}"/>
    `,
    company: `
      <circle cx="800" cy="220" r="35" fill="${BRAND.bg2}" stroke="${accent}" stroke-width="2"/>
      <circle cx="900" cy="200" r="35" fill="${BRAND.bg2}" stroke="${BRAND.purple}" stroke-width="2"/>
      <circle cx="1000" cy="220" r="35" fill="${BRAND.bg2}" stroke="${BRAND.orange}" stroke-width="2"/>
      <path d="M770,280 Q900,240 1030,280" fill="none" stroke="${BRAND.muted}" stroke-width="2"/>
      <rect x="720" y="300" width="360" height="8" rx="4" fill="${accent}" opacity="0.3"/>
    `,
  };

  return scenes[theme] || scenes.analytics;
}

function svgForPost(post) {
  const theme = detectTheme(post);
  const accent = themeAccent(theme);
  const h = hash(post.id);
  const categoryLabel = post.category.toUpperCase();
  const title =
    post.title.length > 72 ? post.title.slice(0, 69) + "..." : post.title;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg-${post.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND.bg}"/>
      <stop offset="100%" style="stop-color:${BRAND.bg2}"/>
    </linearGradient>
    <radialGradient id="glow-${post.id}" cx="30%" cy="70%" r="60%">
      <stop offset="0%" style="stop-color:${accent};stop-opacity:0.18"/>
      <stop offset="100%" style="stop-color:${accent};stop-opacity:0"/>
    </radialGradient>
    <filter id="blur-${post.id}"><feGaussianBlur stdDeviation="50"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg-${post.id})"/>
  <rect width="1200" height="630" fill="url(#glow-${post.id})"/>
  <circle cx="${200 + (h % 300)}" cy="${400 + (h % 100)}" r="180" fill="${BRAND.purple}" opacity="0.06" filter="url(#blur-${post.id})"/>
  ${drawScene(theme, post.id)}
  <rect x="0" y="0" width="1200" height="630" fill="url(#bg-${post.id})" opacity="0.35"/>
  <rect x="60" y="480" width="8" height="80" rx="4" fill="${accent}"/>
  <text x="82" y="510" font-family="system-ui, sans-serif" font-size="13" font-weight="600" letter-spacing="0.12em" fill="${accent}">${esc(categoryLabel)}</text>
  <text x="82" y="548" font-family="system-ui, sans-serif" font-size="28" font-weight="600" fill="${BRAND.white}">${esc(title)}</text>
  <text x="82" y="575" font-family="system-ui, sans-serif" font-size="14" fill="${BRAND.muted}">Veloria Tech Insights</text>
</svg>`;
}

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    execSync("npm install sharp --no-save", { cwd: root, stdio: "inherit" });
    sharp = (await import("sharp")).default;
  }

  for (const post of posts) {
    const filename = `${String(post.id).padStart(3, "0")}-${post.slug}.webp`;
    const outPath = join(outDir, filename);
    const svg = svgForPost(post);
    await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(outPath);
    if (post.id % 20 === 0) console.log(`Generated ${post.id}/100`);
  }

  console.log(`Done: ${posts.length} topic-specific images in public/assets/blogs/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
