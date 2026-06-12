import type { BlogPost } from "../types";

const image = (id: number, slug: string) =>
  `/assets/blogs/${String(id).padStart(3, "0")}-${slug}.webp`;

export const existingPosts: BlogPost[] = [
  {
    id: 1,
    slug: "flutter-go-to",
    title: "Why Flutter is our go-to for cross-platform mobile apps",
    excerpt:
      "A practical look at how Flutter helps us ship polished iOS and Android apps from a single codebase — without compromising performance.",
    category: "Mobile",
    author: "Veloria Engineering",
    authorRole: "Mobile Engineering Team",
    authorBio:
      "Our mobile squad ships production Flutter apps for healthcare, e-commerce, and social products — from architecture through App Store release.",
    date: "May 28, 2026",
    readTime: "6 min read",
    image: image(1, "flutter-go-to"),
    tags: ["Flutter", "Dart", "Cross-platform", "Mobile", "iOS", "Android"],
    keyTakeaways: [
      "One Dart codebase compiles to native ARM on iOS and Android, cutting delivery time roughly in half.",
      "Widget-based UI gives pixel control while hot reload keeps design iteration fast.",
      "Platform channels bridge to Swift or Kotlin when you need native APIs Flutter doesn't cover.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "When clients need both iOS and Android, we often recommend Flutter. A single Dart codebase compiles to native ARM code on both platforms, which means faster delivery without maintaining two separate apps.",
          "This isn't theoretical — we've used Flutter on healthcare portals, marketplaces, and social products where polish and performance both matter. Here's what we've learned shipping them to production.",
        ],
      },
      {
        id: "why-flutter",
        heading: "Why we choose Flutter",
        paragraphs: [
          "Flutter's widget system gives us pixel-level control over UI while still feeling native. Hot reload keeps iteration fast during design reviews, and the ecosystem has matured with strong packages for auth, maps, payments, and offline storage.",
        ],
        bullets: [
          "Single codebase for iOS, Android, and web when needed",
          "Consistent UI across devices — fewer platform-specific regressions",
          "Mature package ecosystem for auth, maps, payments, and storage",
          "Hot reload for rapid design and engineering collaboration",
        ],
      },
      {
        id: "performance",
        heading: "Performance in production",
        paragraphs: [
          "Performance is production-ready for most business apps. We've shipped healthcare, e-commerce, and social products where smooth scrolling and animations matter. For edge cases that need platform-specific APIs, Flutter's platform channels let us drop into Swift or Kotlin when needed.",
        ],
        quote: {
          text: "Flutter let us ship iOS and Android in one sprint cycle instead of two — without our users noticing a difference in quality.",
          attribution: "Product lead, healthcare client",
        },
      },
      {
        id: "conclusion",
        heading: "The bottom line",
        paragraphs: [
          "The result: one team, one codebase, two app stores — with consistent branding and fewer regressions across platforms. For most business and consumer apps, that's the right trade-off.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "rag-pipelines",
    title: "Building production-ready RAG pipelines for enterprise AI",
    excerpt:
      "From document ingestion to retrieval and fine-tuned responses — lessons from deploying AI systems that teams actually trust.",
    category: "AI",
    author: "Veloria AI Team",
    authorRole: "AI & Machine Learning",
    authorBio:
      "We design and deploy RAG systems, fine-tuned models, and AI agents for enterprises that need answers grounded in their own data — with audit trails and guardrails built in.",
    date: "May 15, 2026",
    readTime: "8 min read",
    image: image(2, "rag-pipelines"),
    tags: ["RAG", "LLM", "Enterprise AI", "Vector DB", "Pinecone"],
    keyTakeaways: [
      "RAG grounds LLM answers in your documents without retraining the full model on every update.",
      "Ingestion quality — chunking, metadata, deduplication — determines retrieval accuracy.",
      "Evaluation with golden question sets matters as much as architecture for enterprise trust.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "Retrieval-augmented generation (RAG) is how we ground LLM responses in a client's real data — policies, product docs, support tickets — without retraining the entire model for every update.",
          "Enterprise teams don't need clever demos. They need systems that cite sources, fail gracefully, and stay accurate as documents change. That's what a production RAG pipeline delivers.",
        ],
      },
      {
        id: "pipeline",
        heading: "Pipeline architecture",
        paragraphs: [
          "A reliable pipeline starts with clean ingestion: chunking strategies, metadata tagging, and deduplication. We vectorize content into a store like Pinecone or pgvector, then retrieve the most relevant passages at query time.",
        ],
        bullets: [
          "Document ingestion with smart chunking and metadata tagging",
          "Vector storage in Pinecone, pgvector, or similar",
          "Retrieval tuned for precision vs. recall per use case",
          "Generation layer with citations and confidence thresholds",
        ],
      },
      {
        id: "guardrails",
        heading: "Guardrails and trust",
        paragraphs: [
          "The generation layer adds guardrails: citation of sources, confidence thresholds, and fallbacks when retrieval confidence is low. Enterprise teams need auditability, not just clever answers.",
        ],
        quote: {
          text: "Our support team stopped guessing — every AI answer links back to the policy paragraph it came from.",
          attribution: "Operations director, fintech client",
        },
      },
      {
        id: "evaluation",
        heading: "Evaluation after launch",
        paragraphs: [
          "We've learned that evaluation matters as much as architecture. Golden question sets, human review loops, and latency budgets keep RAG systems trustworthy after launch.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "saas-aws",
    title: "Scaling SaaS backends on AWS: patterns that work",
    excerpt:
      "Architecture decisions, CI/CD workflows, and observability practices we use to keep platforms reliable as traffic grows.",
    category: "Cloud",
    author: "Veloria Infrastructure",
    authorRole: "Cloud & DevOps",
    authorBio:
      "Our infrastructure team designs AWS architectures, CI/CD pipelines, and observability stacks for SaaS products from MVP through millions of requests per day.",
    date: "Apr 30, 2026",
    readTime: "7 min read",
    image: image(3, "saas-aws"),
    tags: ["AWS", "SaaS", "DevOps", "CI/CD", "Observability"],
    keyTakeaways: [
      "Start with a simple monolith on ECS or Lambda — evolve complexity only when metrics justify it.",
      "Infrastructure-as-code and automated staging cut release risk and rollback time.",
      "Structured logs, tracing, and p95 dashboards are non-negotiable before you scale traffic.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "Most SaaS products we build start simple — a monolith on ECS or Lambda with RDS — and evolve as usage grows. The goal is to defer complexity until metrics justify it.",
          "Premature microservices are expensive. We've seen teams spend months splitting services before they had enough traffic to need it. Here's the path we recommend instead.",
        ],
      },
      {
        id: "deployments",
        heading: "Deployments that don't wake people up",
        paragraphs: [
          "We standardize on infrastructure-as-code, automated staging environments, and blue-green or rolling deploys. That reduces downtime during releases and makes rollbacks routine.",
        ],
        bullets: [
          "Terraform or CDK for reproducible environments",
          "Staging mirrors production topology and data shape",
          "Blue-green or rolling deploys with health checks",
          "One-command rollbacks tied to deployment artifacts",
        ],
      },
      {
        id: "observability",
        heading: "Observability from day one",
        paragraphs: [
          "Observability is non-negotiable: structured logs, distributed tracing, and dashboards for error rates and p95 latency. Alerts should page humans only for user-impacting issues.",
        ],
        quote: {
          text: "We knew exactly which deploy caused the spike because tracing was in place before launch week — not after the incident.",
          attribution: "CTO, B2B SaaS startup",
        },
      },
      {
        id: "security",
        heading: "Security that scales with the product",
        paragraphs: [
          "Security scales with the product: least-privilege IAM, secrets in Parameter Store or Secrets Manager, and regular dependency scanning in CI.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "design-systems",
    title: "Design systems that speed up product delivery",
    excerpt:
      "How shared components, tokens, and documentation help our teams move faster while keeping UI quality consistent.",
    category: "Design",
    author: "Veloria Design",
    authorRole: "Product Design",
    authorBio:
      "Our design team builds Figma libraries, token systems, and component specs that keep web and mobile products visually consistent from first prototype to production.",
    date: "Apr 12, 2026",
    readTime: "5 min read",
    image: image(4, "design-systems"),
    tags: ["Design System", "Figma", "Tokens", "React", "UI"],
    keyTakeaways: [
      "A design system is the contract between design and engineering — not just a Figma file.",
      "Component libraries with documented variants eliminate one-off CSS on every screen.",
      "Documentation next to code pays for itself within the first sprint.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "A design system is not just a Figma library — it's the contract between design and engineering. Tokens for color, spacing, and typography ensure the shipped product matches the spec.",
        ],
      },
      {
        id: "components",
        heading: "Components engineers actually use",
        paragraphs: [
          "We build component libraries in React (and Flutter where relevant) with documented variants: buttons, inputs, modals, tables. Engineers compose screens from tested pieces instead of one-off CSS.",
        ],
        bullets: [
          "Semantic tokens for color, spacing, typography, and radius",
          "Variant-driven components: size, state, and emphasis",
          "Accessibility notes baked into every component spec",
          "Parity between Figma components and code exports",
        ],
      },
      {
        id: "documentation",
        heading: "Documentation that sticks",
        paragraphs: [
          "Documentation lives next to the code: usage guidelines, accessibility notes, and do/don't examples. That onboarding cost pays off within the first sprint.",
        ],
        quote: {
          text: "New engineers shipped their first feature using the system on day three — no bespoke CSS review needed.",
          attribution: "Engineering manager, product team",
        },
      },
      {
        id: "outcome",
        heading: "What clients gain",
        paragraphs: [
          "Clients benefit from faster iterations and a cohesive brand across web and mobile — especially when multiple squads work in parallel.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "event-driven",
    title: "Automating workflows with event-driven integrations",
    excerpt:
      "Webhooks, queues, and API orchestration — a guide to connecting the tools your business already runs on.",
    category: "Automation",
    author: "Veloria Engineering",
    authorRole: "Integration Engineering",
    authorBio:
      "We connect CRMs, billing systems, support tools, and internal apps with event-driven pipelines so data moves automatically when something happens in your business.",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    image: image(5, "event-driven"),
    tags: ["Automation", "Webhooks", "Queues", "n8n", "Integrations"],
    keyTakeaways: [
      "Event-driven automation removes manual copy-paste between CRM, billing, and support tools.",
      "Idempotent workers behind queues make retries safe and failures recoverable.",
      "Start with one painful manual process — ROI is immediate when ops teams stop switching tabs.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "Manual handoffs between CRM, billing, support, and internal tools slow teams down. Event-driven automation connects those systems so data flows when something happens — a new lead, a paid invoice, a support ticket.",
        ],
      },
      {
        id: "patterns",
        heading: "Patterns we rely on",
        paragraphs: [
          "We favor idempotent workers behind queues (SQS, RabbitMQ, or Bull) so retries are safe. Webhooks get signature verification and replay protection.",
        ],
        bullets: [
          "Queue-backed workers with idempotent handlers",
          "Webhook signature verification and replay protection",
          "Dead-letter queues for failed jobs with alerting",
          "Orchestration for multi-step flows with human approval gates",
        ],
      },
      {
        id: "visibility",
        heading: "Visibility over magic",
        paragraphs: [
          "Orchestration tools like n8n or custom Node services work well for multi-step workflows with human approval steps. The key is visibility: every run should be traceable.",
        ],
        quote: {
          text: "We went from three hours of daily data entry to zero — and every automated run has a log we can audit.",
          attribution: "Head of Operations, services company",
        },
      },
      {
        id: "getting-started",
        heading: "Where to start",
        paragraphs: [
          "Start with one painful manual process, automate it end-to-end, then expand. ROI is immediate when ops teams stop copying data between tabs.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "client-projects",
    title: "What we learned shipping 50+ client projects",
    excerpt:
      "Communication, scope, and delivery habits that separate smooth launches from painful ones — from our project leads.",
    category: "Company",
    author: "Veloria Tech",
    authorRole: "Delivery & Leadership",
    authorBio:
      "Across 50+ launches, our delivery leads have refined the habits — weekly demos, visible backlogs, planned post-launch support — that keep projects on track from kickoff to App Store.",
    date: "Mar 8, 2026",
    readTime: "9 min read",
    image: image(6, "client-projects"),
    tags: ["Delivery", "Project Management", "Client Success", "Agile"],
    keyTakeaways: [
      "Clear goals, a single decision-maker, and weekly demos beat surprise reveals at the deadline.",
      "Scope creep is managed with visible backlogs and explicit trade-offs in writing.",
      "Post-launch support — monitoring, SLAs, v2 roadmap — should be planned before launch day.",
    ],
    sections: [
      {
        id: "introduction",
        paragraphs: [
          "After dozens of launches, patterns emerge. The best projects share clear goals, a single decision-maker, and weekly demos — not surprise reveals at the deadline.",
        ],
      },
      {
        id: "communication",
        heading: "Communication habits that work",
        paragraphs: [
          "Scope creep is managed with a visible backlog and explicit trade-offs: 'If we add X, Y moves to phase two.' Written alignment beats verbal assumptions.",
        ],
        bullets: [
          "One accountable decision-maker on the client side",
          "Weekly demos on real builds, not slide decks",
          "Written scope trade-offs when priorities shift",
          "Shared backlog visible to both teams",
        ],
      },
      {
        id: "quality",
        heading: "Quality before the crunch",
        paragraphs: [
          "Quality comes from testing early on real devices and real data volumes, not a frantic week before launch. CI, staging, and UAT are part of the schedule, not extras.",
        ],
        quote: {
          text: "The launch felt boring — which is exactly what you want when months of work go live.",
          attribution: "Founder, consumer app client",
        },
      },
      {
        id: "after-launch",
        heading: "Planning beyond launch day",
        paragraphs: [
          "Post-launch support is planned upfront: monitoring, bug SLAs, and a roadmap for v2. Software is never truly 'done' — and clients who plan for iteration ship more confidently.",
        ],
      },
    ],
  },
];
