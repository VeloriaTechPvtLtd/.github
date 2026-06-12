"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  Linkedin,
  Quote,
  Share2,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  BlogPost,
  BlogSection,
  getAdjacentPosts,
  getBlogPostPath,
  getRelatedPosts,
} from "@/lib/data/blogsData";
import { SectionLink } from "./SectionLink";
import { CONTACT_FORM_SECTION_ID } from "@/lib/utils/scrollToSection";
import { PageHeaderBand } from "./PageHeaderBand";

interface BlogDetailProps {
  post: BlogPost;
}

function BlogSectionContent({ section }: { section: BlogSection }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      {section.heading && (
        <h2 className="t-section-title mb-5 sm:mb-6">{section.heading}</h2>
      )}
      {section.paragraphs?.map((paragraph, index) => (
        <p key={index} className="t-body mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-3 mt-5 mb-2">
          {section.bullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
              <span className="t-body text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.quote && (
        <blockquote className="together-card p-6 sm:p-8 mt-6 border-l-4 border-l-brand-orange">
          <Quote className="w-8 h-8 text-brand-orange/40 mb-4" />
          <p className="text-body-lg text-foreground leading-snug tracking-snug mb-4">
            &ldquo;{section.quote.text}&rdquo;
          </p>
          {section.quote.attribution && (
            <footer className="t-label normal-case text-[0.65rem]">
              — {section.quote.attribution}
            </footer>
          )}
        </blockquote>
      )}
    </section>
  );
}

export function BlogDetail({ post }: BlogDetailProps) {
  const relatedPosts = getRelatedPosts(post);
  const { newer, older } = getAdjacentPosts(post);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const tocItems = post.sections.filter((s) => s.heading);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <article className="blog-detail-page bg-background text-foreground min-h-screen">
      <PageHeaderBand innerPadding="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6 xl:col-span-5">
              <span className="together-tag mb-5 block">{post.category}</span>

              <h1 className="t-display mb-4 tracking-snug">{post.title}</h1>

              <p className="t-section-desc max-w-xl mb-8">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-orange" />
                  <span>
                    <span className="text-foreground font-medium">{post.author}</span>
                    <span className="hidden sm:inline text-muted-foreground">
                      {" "}
                      · {post.authorRole}
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-body-xs t-mono bg-secondary text-foreground px-3 py-1.5 rounded-lg border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-7">
              <div className="together-card overflow-hidden p-2 sm:p-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
      </PageHeaderBand>

      {/* Key takeaways */}
      <section className="py-12 sm:py-16 together-section-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="together-card p-7 sm:p-9 lg:p-10">
            <p className="t-label mb-5">Key takeaways</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="t-mono text-body-xs text-brand-orange font-medium mt-0.5 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body-sm text-foreground leading-relaxed tracking-snug">
                    {takeaway}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-12 sm:space-y-14 min-w-0">
              {post.sections.map((section) => (
                <BlogSectionContent key={section.id} section={section} />
              ))}

              {/* Author */}
              <div className="together-card p-7 sm:p-9 border-brand-purple/20">
                <p className="t-label mb-5">About the author</p>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-body font-medium text-foreground mb-0.5">
                      {post.author}
                    </p>
                    <p className="t-label normal-case text-[0.65rem] mb-3">
                      {post.authorRole}
                    </p>
                    <p className="t-body">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 lg:self-start min-w-0">
              {tocItems.length > 0 && (
                <div className="together-card p-6 sm:p-7">
                  <p className="t-label mb-5">In this article</p>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-3">
                      {tocItems.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="text-body-sm text-muted-foreground hover:text-brand-orange transition-colors duration-300 tracking-snug leading-snug block"
                          >
                            {section.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              <div className="together-card p-6 sm:p-7">
                <p className="t-label mb-5">Article details</p>
                <dl className="space-y-4">
                  <div>
                    <dt className="flex items-center gap-2 t-label normal-case mb-1 text-[0.65rem]">
                      <Calendar className="w-3.5 h-3.5" />
                      Published
                    </dt>
                    <dd className="text-body-sm text-foreground font-medium pl-5">
                      {post.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 t-label normal-case mb-1 text-[0.65rem]">
                      <Clock className="w-3.5 h-3.5" />
                      Read time
                    </dt>
                    <dd className="text-body-sm text-foreground font-medium pl-5">
                      {post.readTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 t-label normal-case mb-1 text-[0.65rem]">
                      <Tag className="w-3.5 h-3.5" />
                      Category
                    </dt>
                    <dd className="text-body-sm text-foreground font-medium pl-5">
                      {post.category}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="together-card p-6 sm:p-7">
                <p className="t-label mb-5">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-body-xs t-mono bg-secondary text-foreground px-3 py-1.5 rounded-lg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="together-card p-6 sm:p-7">
                <p className="t-label mb-5">
                  <Share2 className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  Share
                </p>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="t-link w-full justify-start text-body-xs"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Link copied!" : "Copy link"}
                  </button>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-link w-full justify-start text-body-xs"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Share on LinkedIn
                    <ArrowRight className="t-link-arrow h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-link w-full justify-start text-body-xs"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Share on X
                    <ArrowRight className="t-link-arrow h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(newer || older) && (
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newer ? (
                <Link
                  href={getBlogPostPath(newer)}
                  className="together-card p-6 sm:p-7 group no-underline flex flex-col"
                >
                  <span className="t-label normal-case text-[0.65rem] mb-2 flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Newer article
                  </span>
                  <span className="text-body-sm font-medium text-foreground group-hover:text-brand-orange transition-colors duration-300 tracking-snug leading-snug">
                    {newer.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {older ? (
                <Link
                  href={getBlogPostPath(older)}
                  className="together-card p-6 sm:p-7 group no-underline flex flex-col sm:items-end sm:text-right"
                >
                  <span className="t-label normal-case text-[0.65rem] mb-2 flex items-center gap-1 sm:flex-row-reverse">
                    Older article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-body-sm font-medium text-foreground group-hover:text-brand-orange transition-colors duration-300 tracking-snug leading-snug">
                    {older.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 together-section-alt border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <p className="t-label mb-3">Keep reading</p>
                <h2 className="t-section-title">Related articles</h2>
              </div>
              <Link href="/blogs" className="t-link shrink-0">
                All articles
                <ArrowRight className="t-link-arrow h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={getBlogPostPath(related)}
                  className="together-card overflow-hidden group flex flex-col no-underline"
                >
                  <div className="relative h-40 overflow-hidden bg-secondary">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-smooth"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-label uppercase text-brand-orange tracking-wide bg-white/95 px-2.5 py-1 rounded-md backdrop-blur-sm text-[0.6rem]">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-body-xs text-muted-foreground mb-3">
                      <span>{related.date}</span>
                      <span>·</span>
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="text-body-sm font-medium text-foreground leading-snug tracking-snug group-hover:text-brand-orange transition-colors duration-300">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative z-10 py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="together-card together-pastel-bg p-10 sm:p-14 lg:p-16 text-center overflow-visible">
            <p className="t-label mb-4">Work with us</p>
            <h2 className="t-section-title mb-4 max-w-2xl mx-auto">
              Want to discuss this topic or build something similar?
            </h2>
            <p className="t-section-desc max-w-xl mx-auto mb-8">
              Veloria Tech ships production-grade mobile, web, and AI products — from
              architecture through launch and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <SectionLink
                sectionId={CONTACT_FORM_SECTION_ID}
                className="together-btn-primary inline-flex items-center px-6 py-3 text-body-sm"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </SectionLink>
              <Link
                href="/blogs"
                className="together-btn-secondary inline-flex items-center px-6 py-3 text-body-sm"
              >
                Browse all articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
