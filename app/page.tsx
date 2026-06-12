import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { VeloriaHero } from "@/components/VeloriaHero";
import { PlatformStatsSection } from "@/components/PlatformStatsSection";
import { ServicesSectionLazy } from "@/components/ServicesSectionLazy";
import { ContactSectionLazy } from "@/components/ContactSectionLazy";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo/site";

const ProjectsSection = dynamic(
  () =>
    import("@/components/ProjectsSection").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  { loading: () => <div className="section-stream-placeholder" aria-hidden /> },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/TestimonialsSection").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  { loading: () => <div className="section-stream-placeholder" aria-hidden /> },
);

const ArenzoSection = dynamic(
  () =>
    import("@/components/ArenzoSection").then((mod) => ({
      default: mod.ArenzoSection,
    })),
  { loading: () => <div className="section-stream-placeholder" aria-hidden /> },
);

const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/WhyChooseUsSection").then((mod) => ({
      default: mod.WhyChooseUsSection,
    })),
  { loading: () => <div className="section-stream-placeholder" aria-hidden /> },
);

export const metadata: Metadata = {
  title: `${SITE_NAME} - Software Solutions`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <VeloriaHero />
      <PlatformStatsSection />
      <ServicesSectionLazy />
      <div className="below-fold-section">
        <ProjectsSection />
      </div>
      <div className="below-fold-section">
        <TestimonialsSection />
      </div>
      <div className="below-fold-section">
        <ArenzoSection />
      </div>
      <div className="below-fold-section">
        <WhyChooseUsSection />
      </div>
      <ContactSectionLazy />
    </>
  );
}
