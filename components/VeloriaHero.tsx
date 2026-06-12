import { type CSSProperties } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { TrustedByMarquee } from "./TrustedByMarquee";
import { scrollToSection } from "@/lib/utils/scrollToSection";

const trustedBy = [
  "HealthTech",
  "FinTech",
  "EduLearn",
  "RetailPro",
  "LogiFlow",
  "ConnectSpace",
  "NovaPay",
  "MedSync",
  "ShopWave",
  "DataPulse",
];

const heroLabels = [
  { text: "Mobile apps", top: "18%", left: "8%" },
  { text: "Web & AI", top: "42%", right: "6%" },
  { text: "Production ready", bottom: "22%", left: "28%" },
];

function HeroVisualLabel({
  text,
  style,
}: {
  text: string;
  style: CSSProperties;
}) {
  return (
    <div className="hero-visual_label" style={style}>
      <span className="hero-visual_label-line" aria-hidden="true" />
      <span className="hero-visual_label-text">
        <span className="hero-visual_label-dot" aria-hidden="true" />
        {text}
      </span>
    </div>
  );
}

export function VeloriaHero() {
  const scrollToContact = () => scrollToSection("contact");
  const scrollToProjects = () => scrollToSection("projects");

  return (
    <section className="hp-hero relative bg-background -mt-nav-offset">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[-10%] w-[520px] h-[520px] bg-brand-purple/15 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hp-hero_wrap together-fade-in">
          <div className="hp-hero_top">
            <div className="hp-hero_header">
              <h1 className="t-display mb-5">
                Build what&apos;s next
                <br />
                <span className="t-display-sub block mt-1">
                  with end-to-end software
                </span>
              </h1>

              <p className="t-body text-body-lg max-w-xl mb-10">
                Full-stack development platform — mobile, web, AI, and cloud —
                powered by production-ready engineering.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="together-btn-primary px-8 h-12 text-[0.9375rem]"
                  onClick={scrollToContact}
                >
                  Start building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="together-btn-secondary px-8 h-12 text-[0.9375rem] border"
                  onClick={scrollToProjects}
                >
                  View our work
                </Button>
              </div>
            </div>

            <div className="hp-hero_visual">
              <img
                src="/assets/hero-platform-visual.png"
                alt="Abstract visualization of Veloria's interconnected full-stack platform"
                className="hp-hero_visual-img"
                loading="eager"
              />
              {heroLabels.map((label) => (
                <HeroVisualLabel
                  key={label.text}
                  text={label.text}
                  style={{
                    top: label.top,
                    left: label.left,
                    right: label.right,
                    bottom: label.bottom,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="hp-hero_bottom">
            <div className="hp-hero_bottom-label">
              <span className="hp-hero_caption">Trusted by</span>
            </div>
            <TrustedByMarquee items={trustedBy} />
          </div>
        </div>
      </div>
    </section>
  );
}
