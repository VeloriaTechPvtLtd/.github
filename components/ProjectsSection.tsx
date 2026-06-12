import { ArrowRight } from "lucide-react";
import { finalProjectsData, Project } from "@/lib/data/projectsData";
import {
  getProjectCardAspectClass,
  getProjectCardImageClass,
  getProjectImageSrc,
} from "@/lib/utils/projectImage";

interface ProjectsSectionProps {
  onViewAllProjects: () => void;
  onProjectSelect: (project: Project) => void;
}

export function ProjectsSection({
  onViewAllProjects,
  onProjectSelect,
}: ProjectsSectionProps) {
  const featured = finalProjectsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-background home-scroll-section" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="t-section-title mb-4">
              Production apps we&apos;ve shipped
            </h2>
            <p className="t-section-desc">
              See how Veloria Tech powers clients building the next generation
              of mobile and web products.
            </p>
          </div>
          <button onClick={onViewAllProjects} className="t-link shrink-0">
            View all stories
            <ArrowRight className="t-link-arrow h-4 w-4" />
          </button>
        </div>

        <div className="space-y-5">
          {featured.map((project, index) => (
            <article
              key={project.id}
              onClick={() => onProjectSelect(project)}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 together-card cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div
                className={`lg:col-span-5 relative overflow-hidden bg-secondary ${getProjectCardAspectClass()} lg:aspect-auto lg:min-h-[260px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={getProjectImageSrc(project.image)}
                  alt={project.title}
                  className={`${getProjectCardImageClass()} group-hover:scale-[1.03] transition-transform duration-700 ease-smooth`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div
                className={`lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="together-tag">{project.category}</span>
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="text-body-xs text-muted-foreground t-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="t-card-title mb-2 group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-body-sm text-muted-foreground mb-3 tracking-snug">
                    {project.subtitle}
                  </p>
                )}
                <p className="t-body-sm line-clamp-2 mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-5 border-t border-border sm:flex sm:flex-wrap sm:items-end sm:gap-8">
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl font-medium t-mono text-foreground leading-tight">
                      {project.duration}
                    </p>
                    <p className="t-label mt-1 normal-case tracking-snug text-[0.65rem]">
                      Timeline
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl font-medium t-mono text-foreground leading-tight">
                      {project.tech.length}+
                    </p>
                    <p className="t-label mt-1 normal-case tracking-snug text-[0.65rem]">
                      Technologies
                    </p>
                  </div>
                  <span className="col-span-2 t-link text-body-sm sm:col-span-1 sm:ml-auto">
                    Read case study
                    <ArrowRight className="t-link-arrow h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
