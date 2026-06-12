export const featuredBlogPosts = [
  {
    id: 1,
    slug: "flutter-go-to",
    category: "Mobile",
    title: "Why Flutter is our go-to for cross-platform mobile apps",
    author: "Veloria Tech",
  },
  {
    id: 4,
    slug: "design-systems",
    category: "Design",
    title: "Design systems that speed up product delivery",
    author: "Veloria Tech",
  },
  {
    id: 2,
    slug: "rag-pipelines",
    category: "AI",
    title: "Building production-ready RAG pipelines for enterprise AI",
    author: "Veloria Tech",
  },
] as const;

export function getFeaturedBlogPostPath(slug: string): string {
  return `/blogs/${slug}`;
}
