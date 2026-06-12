#!/usr/bin/env node
/**
 * Writes individual post TS files under src/data/blogs/posts/
 * Run: node scripts/generate-blog-files.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsDir = join(__dirname, "../src/data/blogs/posts");
mkdirSync(postsDir, { recursive: true });

// Import built posts via dynamic eval of compiled output is complex;
// instead write an index that re-exports from existingPosts + generated barrel.

const indexContent = `// Auto-generated barrel — posts are built from postsMeta via postFactory
export { existingPosts } from "./existingPosts";
`;

writeFileSync(join(postsDir, "index.ts"), indexContent);
console.log("Blog posts barrel updated.");
