import { BlogsSection } from "./BlogsSection";
import { PageHeaderBand } from "./PageHeaderBand";

export function BlogsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeaderBand>
        <p className="t-label mb-3">Insights</p>
        <h1 className="t-display mb-4 tracking-snug">Blog</h1>
        <p className="t-section-desc max-w-2xl">
          Engineering notes, product thinking, and lessons from building software
          for startups and enterprises.
        </p>
      </PageHeaderBand>
      <BlogsSection hideHeader />
    </div>
  );
}
