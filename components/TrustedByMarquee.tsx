"use client";

import Marquee from "react-fast-marquee";

interface TrustedByMarqueeProps {
  items: string[];
  /** Scroll speed in pixels per second. */
  speed?: number;
}

export function TrustedByMarquee({ items, speed = 50 }: TrustedByMarqueeProps) {
  return (
    <div className="hp-hero_bottom-inner trusted-marquee">
      <Marquee
        speed={speed}
        gradient={false}
        pauseOnHover={false}
        className="trusted-marquee__scroller"
      >
        {items.map((name) => (
          <span key={name} className="trusted-marquee_item">
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
