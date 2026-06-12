"use client";

import {
  type ComponentType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface LazyWhenVisibleProps {
  component: ComponentType;
  fallback?: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  /** Stable DOM id for hash links before the lazy component mounts. */
  sectionId?: string;
  /** Additional hash ids that should eagerly load this section (e.g. contact-form). */
  relatedHashIds?: string[];
}

export function LazyWhenVisible({
  component: Component,
  fallback,
  minHeight = 480,
  rootMargin = "300px",
  sectionId,
  relatedHashIds = [],
}: LazyWhenVisibleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionId || visible) return;

    const hashTargets = new Set([sectionId, ...relatedHashIds]);

    const revealForHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hashTargets.has(hash)) setVisible(true);
    };

    revealForHash();
    window.addEventListener("hashchange", revealForHash);
    return () => window.removeEventListener("hashchange", revealForHash);
  }, [sectionId, relatedHashIds, visible]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || visible) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setVisible(true);
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={sectionId}
      className={sectionId ? "home-scroll-section" : undefined}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? <Component /> : fallback}
    </div>
  );
}
