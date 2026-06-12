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
}

export function LazyWhenVisible({
  component: Component,
  fallback,
  minHeight = 480,
  rootMargin = "300px",
}: LazyWhenVisibleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    <div ref={containerRef} style={visible ? undefined : { minHeight }}>
      {visible ? <Component /> : fallback}
    </div>
  );
}
