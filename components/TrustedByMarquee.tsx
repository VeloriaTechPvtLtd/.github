"use client";

import Marquee from "react-fast-marquee";

interface TrustedByMarqueeProps {
  items: string[];
}

export function TrustedByMarquee({ items }: TrustedByMarqueeProps) {
  return (
    <div className="hp-hero_bottom-inner trusted-marquee">
      <Marquee
        autoFill
        speed={40}
        gradient={false}
        pauseOnHover
        aria-hidden
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
