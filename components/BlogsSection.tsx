import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { SectionLink } from "./SectionLink";
import { CONTACT_FORM_SECTION_ID } from "@/lib/utils/scrollToSection";
import { blogPosts, getBlogPostPath } from "@/lib/data/blogsData";

interface BlogsSectionProps {
  hideHeader?: boolean;
}

export function BlogsSection({ hideHeader = false }: BlogsSectionProps) {
  return (
    <section
      className={`bg-background ${hideHeader ? "pb-12 sm:pb-16 pt-6 sm:pt-8" : "py-12 sm:py-16"}`}
      id="blogs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="t-section-title mb-4">Insights from Veloria Tech</h2>
            <p className="t-section-desc">
              Engineering notes, product thinking, and lessons from building software
              for startups and enterprises.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={getBlogPostPath(post)}
              className="together-card overflow-hidden group flex flex-col no-underline"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-smooth"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-body-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-body-lg font-medium text-foreground mb-2 tracking-snug leading-snug">
                  {post.title}
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed tracking-snug flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center text-body-sm font-medium text-foreground mt-5 group-hover:gap-2 gap-1 transition-all duration-300">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-body-sm text-muted-foreground mb-4">
            Want to discuss a topic or collaborate on a guest post?
          </p>
          <SectionLink
            sectionId={CONTACT_FORM_SECTION_ID}
            className="inline-flex items-center text-body-sm font-medium text-foreground hover:gap-2 gap-1 transition-all duration-300"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
