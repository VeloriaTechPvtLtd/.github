import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { PageHeaderBand } from "@/components/PageHeaderBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile apps, web applications, AI solutions, analytics, cloud, cybersecurity, and custom software development by Veloria Tech.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeaderBand>
        <p className="t-label mb-3">What we build</p>
        <h1 className="t-display mb-4 tracking-snug">Services</h1>
        <p className="t-section-desc max-w-2xl">
          Mobile, web, AI, cloud, and custom software — end-to-end development
          from idea to production.
        </p>
      </PageHeaderBand>
      <ServicesSection />
    </div>
  );
}
