import { ArrowRight } from "lucide-react";

interface TestimonialsSectionProps {
  onViewAllProjects: () => void;
}

const customerStories = [
  {
    id: 1,
    company: "HealthTech Solutions",
    title:
      "How HealthTech partnered with Veloria to deliver a production healthcare app at scale",
    tags: ["Mobile", "Healthcare", "Enterprise"],
    metric: "300%",
    metricLabel: "User engagement increase",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    quote:
      "Veloria Tech delivered our mobile healthcare app ahead of schedule. The quality of work and attention to detail was exceptional.",
    author: "Sarah Johnson, CEO",
  },
  {
    id: 2,
    company: "RetailPro",
    title:
      "How RetailPro engineered a high-converting e-commerce platform with Veloria Tech",
    tags: ["Web", "E-commerce", "Enterprise"],
    metric: "250%",
    metricLabel: "Sales growth post-launch",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    quote:
      "Our e-commerce platform has been a game-changer. The team understood our vision and delivered exactly what we needed.",
    author: "Emily Rodriguez, Founder",
  },
];

export function TestimonialsSection({ onViewAllProjects }: TestimonialsSectionProps) {
  return (
    <section className="py-20 sm:py-24 bg-secondary home-scroll-section" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="t-section-title mb-4">Clients build on Veloria Tech</h2>
          <p className="t-section-desc">
            See how Veloria Tech powers customers building the next generation
            of digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {customerStories.map((story) => (
            <article
              key={story.id}
              className="together-card overflow-hidden group"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden bg-secondary">
                <img
                  src={story.image}
                  alt={story.company}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-smooth"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="t-label normal-case tracking-wide bg-white/95 text-foreground px-2.5 py-1 rounded-md backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <p className="t-label mb-3 text-muted-foreground">{story.company}</p>
                <h3 className="text-heading-md text-foreground leading-snug mb-5 group-hover:text-brand-orange transition-colors duration-300">
                  {story.title}
                </h3>
                <blockquote className="text-body-sm text-muted-foreground italic border-l-2 border-brand-orange/60 pl-4 mb-7 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                  <footer className="text-body-xs not-italic mt-2.5 text-foreground font-medium tracking-snug">
                    — {story.author}
                  </footer>
                </blockquote>

                <div className="flex items-end justify-between pt-5 border-t border-border">
                  <div>
                    <p className="t-stat text-4xl t-mono group-hover:text-brand-orange transition-colors duration-500">
                      {story.metric}
                    </p>
                    <p className="t-body-sm mt-1">{story.metricLabel}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onViewAllProjects}
                    className="t-link text-body-sm"
                  >
                    Read story
                    <ArrowRight className="t-link-arrow h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button type="button" onClick={onViewAllProjects} className="t-link">
            View all stories
            <ArrowRight className="t-link-arrow h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
