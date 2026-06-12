#!/usr/bin/env node
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "scripts/blog-posts.json");

const json = execSync(
  `npx tsx -e "import { blogPosts } from './src/data/blogs/index.ts'; console.log(JSON.stringify(blogPosts.map(p => ({ id: p.id, slug: p.slug, title: p.title, category: p.category, tags: p.tags, image: p.image }))))"`,
  { cwd: root, encoding: "utf8" }
);

writeFileSync(out, json);
console.log(`Exported ${JSON.parse(json).length} posts to scripts/blog-posts.json`);
