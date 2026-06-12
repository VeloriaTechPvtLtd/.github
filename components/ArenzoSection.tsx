import { Car, Bike, Armchair, Palette, Box, HardHat, Laptop, ArrowRight } from "lucide-react";

export function ArenzoSection() {
  const categories = [
    { icon: Car, name: "Automobiles" },
    { icon: Bike, name: "2-Wheelers" },
    { icon: Armchair, name: "Furniture" },
    { icon: Palette, name: "Decoration" },
    { icon: Box, name: "Storage" },
    { icon: HardHat, name: "Construction" },
    { icon: Laptop, name: "Electronics" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-background border-y border-border home-scroll-section" id="arenzo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="together-tag mb-5 block">Featured product</span>
            <h2 className="t-section-title mb-4">Arenzo — rental reimagined</h2>
            <p className="t-section-desc mb-10 max-w-lg">
              A Veloria Tech brand. The versatile rental ecosystem connecting
              premium providers with global customers.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat.name}
                  className="inline-flex items-center gap-1.5 text-body-xs font-medium text-muted-foreground bg-secondary border border-border rounded-lg px-3 py-2 hover:border-brand-orange/30 hover:text-foreground transition-all duration-300"
                >
                  <cat.icon className="w-3.5 h-3.5 text-brand-orange" strokeWidth={1.75} />
                  {cat.name}
                </span>
              ))}
            </div>

            <a
              href="https://arentzo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="together-btn-primary inline-flex items-center px-7 py-3 text-body-sm"
            >
              Explore Arenzo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="relative overflow-visible">
            <div className="rounded-2xl border border-border overflow-hidden shadow-card aspect-[4/3] bg-secondary">
              <img
                src="/images/arenzo.png"
                alt="Arenzo marketplace"
                className="block w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border border-border rounded-xl px-5 py-3.5 shadow-card-hover">
              <p className="t-stat text-3xl t-mono">4.9/5</p>
              <p className="t-label mt-0.5 normal-case tracking-snug text-[0.65rem]">User rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
