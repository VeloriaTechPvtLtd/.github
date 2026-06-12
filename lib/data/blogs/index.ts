import { buildPost } from "./postFactory";
import { existingPosts } from "./posts/existingPosts";
import { postsMeta } from "./postsMeta";
import type { BlogPost } from "./types";

export type { BlogPost, BlogSection, BlogQuote } from "./types";

const generatedPosts = postsMeta.map(buildPost);

export const blogPosts: BlogPost[] = [
  ...existingPosts,
  ...generatedPosts,
].sort((a, b) => a.id - b.id);

const slugSet = new Set<string>();
for (const post of blogPosts) {
  if (slugSet.has(post.slug)) {
    throw new Error(`Duplicate blog slug: ${post.slug}`);
  }
  slugSet.add(post.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostPath(post: BlogPost): string {
  return `/blogs/${post.slug}`;
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = blogPosts.filter(
    (p) => p.id !== post.id && p.category === post.category
  );
  const others = blogPosts.filter(
    (p) => p.id !== post.id && p.category !== post.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getAdjacentPosts(post: BlogPost): {
  newer: BlogPost | null;
  older: BlogPost | null;
} {
  const index = blogPosts.findIndex((p) => p.id === post.id);
  if (index === -1) return { newer: null, older: null };
  return {
    newer: index > 0 ? blogPosts[index - 1] : null,
    older: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}
