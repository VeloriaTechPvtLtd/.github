import { ArrowRight } from "lucide-react";
import { finalProjectsData } from "@/lib/data/projectsData";

export function PlatformStatsSection() {
  const projectCount = finalProjectsData.length;

  const stats = [
    {
      title: "Faster delivery",
      value: "95%",
      description: "on-time project completion with agile methodology.",
      link: "#about",
      linkLabel: "Learn how",
    },
    {
      title: "Production quality",
      value: `${projectCount}+`,
      description: "apps shipped to App Store & Play Store.",
      link: "#projects",
      linkLabel: "See portfolio",
    },
    {
      title: "Client retention",
      value: "100%",
      description: "satisfaction across startups and enterprises.",
      link: "#testimonials",
      linkLabel: "Read stories",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-background border-y border-border" id="platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="t-section-title mb-4">The Veloria Tech Platform</h2>
          <p className="t-section-desc">
            Accelerate development, launch faster, and scale with a team built
            for production software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-card">
          {stats.map((stat) => (
            <div key={stat.title} className="together-stat-card group">
              <p className="t-body-sm font-medium text-muted-foreground mb-5 tracking-snug">
                {stat.title}
              </p>
              <p className="t-stat t-mono mb-5 group-hover:text-brand-orange transition-colors duration-500">
                {stat.value}
              </p>
              <p className="t-body-sm leading-relaxed mb-8 flex-1">
                {stat.description}
              </p>
              <a href={stat.link} className="t-link">
                {stat.linkLabel}
                <ArrowRight className="t-link-arrow h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
