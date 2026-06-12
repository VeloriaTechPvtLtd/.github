import { TestimonialsSection } from "./TestimonialsSection";
import { PageHeaderBand } from "./PageHeaderBand";

export function TestimonialsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeaderBand>
        <p className="t-label mb-3">Client stories</p>
        <h1 className="t-display mb-4 tracking-snug">Testimonials</h1>
        <p className="t-section-desc max-w-2xl">
          How startups and enterprises partner with Veloria Tech to ship production
          software.
        </p>
      </PageHeaderBand>
      <TestimonialsSection />
    </div>
  );
}
