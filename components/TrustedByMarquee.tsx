interface TrustedByMarqueeProps {
  items: string[];
}

export function TrustedByMarquee({ items }: TrustedByMarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="hp-hero_bottom-inner trusted-marquee">
      <div className="trusted-marquee__viewport" aria-hidden="true">
        <div className="trusted-marquee__track">
          {loop.map((name, index) => (
            <span key={`${name}-${index}`} className="trusted-marquee_item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
