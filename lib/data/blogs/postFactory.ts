import { authors } from "./authors";
import type { BlogPost, PostMeta } from "./types";

function formatDate(id: number): string {
  const start = new Date(2024, 0, 15);
  const end = new Date(2026, 5, 12);
  const total = 99;
  const index = 100 - id;
  const ms =
    start.getTime() +
    (index / total) * (end.getTime() - start.getTime());
  const d = new Date(ms);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function buildPost(meta: PostMeta): BlogPost {
  const author = authors[meta.authorKey];
  const image = `/assets/blogs/${String(meta.id).padStart(3, "0")}-${meta.slug}.webp`;

  const sections: BlogPost["sections"] = [
    {
      id: "introduction",
      paragraphs: [
        `${meta.topic} is one of the questions we hear most from product and engineering teams in 2026. The gap between a polished demo and a production system is where most projects stall.`,
        `We've shipped this across Flutter apps, SaaS backends, and analytics stacks for startups and enterprises. Here's what works, what breaks, and how we approach it on real client projects.`,
      ],
    },
    {
      id: "core",
      heading: "What matters in practice",
      paragraphs: [
        `For ${meta.title.toLowerCase()}, the details that look optional in a slide deck become blockers in week six of a build. We standardize patterns early so teams don't reinvent the wheel on every sprint.`,
      ],
      bullets: meta.bullets,
    },
    {
      id: "pitfalls",
      heading: "Common pitfalls we see",
      paragraphs: [
        `Teams often move fast on the happy path and skip instrumentation, error handling, or review gates. That works for a hackathon — not for an app with paying users and compliance requirements.`,
        `We bake in logging, fallbacks, and explicit ownership before launch. The extra day upfront saves a week of firefighting after release.`,
      ],
      ...(meta.quote ? { quote: meta.quote } : {}),
    },
    {
      id: "takeaway",
      heading: "The bottom line",
      paragraphs: [
        `Treat ${meta.topic} as part of your product architecture, not a side task. When it's designed in from discovery — with clear metrics and maintainable code — your team ships faster and sleeps better after launch.`,
      ],
    },
  ];

  return {
    id: meta.id,
    slug: meta.slug,
    title: meta.title,
    excerpt: meta.excerpt,
    category: meta.category,
    author: author.author,
    authorRole: author.authorRole,
    authorBio: author.authorBio,
    date: formatDate(meta.id),
    readTime: meta.readTime,
    image,
    tags: meta.tags,
    keyTakeaways: meta.takeaways,
    sections,
  };
}
