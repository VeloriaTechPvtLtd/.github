export interface BlogQuote {
  text: string;
  attribution?: string;
}

export interface BlogSection {
  id: string;
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: BlogQuote;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
}

export interface PostMeta {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorKey: AuthorKey;
  tags: string[];
  readTime: string;
  topic: string;
  bullets: [string, string, string, string];
  takeaways: [string, string, string];
  quote?: { text: string; attribution: string };
}

export type AuthorKey =
  | "engineering"
  | "ai"
  | "infrastructure"
  | "design"
  | "analytics"
  | "company";
