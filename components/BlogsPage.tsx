import { BlogsSection } from "./BlogsSection";

export function BlogsPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="page-top pb-4 sm:pb-8 border-b border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="t-label mb-3">Insights</p>
          <h1 className="t-display mb-4 tracking-snug">Blog</h1>
          <p className="t-section-desc max-w-2xl">
            Engineering notes, product thinking, and lessons from building software
            for startups and enterprises.
          </p>
        </div>
      </header>
      <BlogsSection hideHeader />
    </div>
  );
}
