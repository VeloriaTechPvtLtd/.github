import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  featuredBlogPosts,
  getFeaturedBlogPostPath,
} from "@/lib/data/featuredBlogPosts";

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your requirements, users, and business goals." },
  { step: "02", title: "Planning", description: "Detailed roadmap, architecture, and sprint timeline." },
  { step: "03", title: "Development", description: "Building with regular demos and transparent progress." },
  { step: "04", title: "Testing", description: "Rigorous QA, performance tuning, and security review." },
  { step: "05", title: "Launch", description: "Deployment, app store submission, and ongoing support." },
];

const featuredPosts = featuredBlogPosts;

export function WhyChooseUsSection() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-background overflow-visible" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="t-section-title mb-4">Our development process</h2>
            <p className="t-section-desc">
              A proven workflow from discovery to launch — built for speed,
              quality, and transparency.
            </p>
          </div>

          <div className="process-steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 py-6 px-1 overflow-visible">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="together-card p-6 group hover:border-brand-purple/30"
              >
                <span className="t-mono text-body-xs font-medium text-brand-orange-accessible mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-body-sm font-medium text-foreground mb-2 tracking-snug">
                  {step.title}
                </h3>
                <p className="text-body-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <h2 className="t-section-title mb-4">Insights from our team</h2>
              <p className="t-section-desc">
                Engineering notes and best practices from building production
                software.
              </p>
            </div>
            <Link href="/blogs" className="t-link shrink-0">
              All articles
              <ArrowRight className="t-link-arrow h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredPosts.map((item) => (
              <Link
                key={item.id}
                href={getFeaturedBlogPostPath(item.slug)}
                className="together-card p-6 group cursor-pointer block no-underline"
              >
                <span className="together-tag mb-4 block">{item.category}</span>
                <h3 className="text-body-sm font-medium text-foreground leading-snug mb-4 group-hover:text-brand-orange transition-colors duration-300 tracking-snug">
                  {item.title}
                </h3>
                <p className="text-body-xs text-muted-foreground mb-5">{item.author}</p>
                <span className="t-link text-body-xs">
                  Read more
                  <ArrowRight className="t-link-arrow h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
