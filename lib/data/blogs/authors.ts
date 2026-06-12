import type { AuthorKey } from "./types";

export const authors: Record<
  AuthorKey,
  { author: string; authorRole: string; authorBio: string }
> = {
  engineering: {
    author: "Veloria Engineering",
    authorRole: "Engineering Team",
    authorBio:
      "Our engineering squad ships production Flutter, React, and Node.js products — from architecture through App Store and cloud deployment.",
  },
  ai: {
    author: "Veloria AI Team",
    authorRole: "AI & Machine Learning",
    authorBio:
      "We design and deploy RAG systems, fine-tuned models, and AI agents for enterprises that need answers grounded in their own data.",
  },
  infrastructure: {
    author: "Veloria Infrastructure",
    authorRole: "Cloud & DevOps",
    authorBio:
      "Our infrastructure team designs AWS architectures, CI/CD pipelines, and observability stacks for SaaS products from MVP through scale.",
  },
  design: {
    author: "Veloria Design",
    authorRole: "Product Design",
    authorBio:
      "Our design team builds Figma libraries, token systems, and component specs that keep web and mobile products visually consistent.",
  },
  analytics: {
    author: "Veloria Analytics",
    authorRole: "Data & Product Analytics",
    authorBio:
      "We implement Firebase, PostHog, MoEngage, and GA4 instrumentation — turning product events into dashboards teams actually use.",
  },
  company: {
    author: "Veloria Tech",
    authorRole: "Delivery & Leadership",
    authorBio:
      "Across 50+ launches, our delivery leads refine the habits that keep projects on track from kickoff to App Store.",
  },
};
