"use client";

import dynamic from "next/dynamic";
import { LazyWhenVisible } from "./LazyWhenVisible";

const ServicesSection = dynamic(
  () =>
    import("@/components/ServicesSection").then((mod) => mod.ServicesSection),
  { ssr: false },
);

export function ServicesSectionLazy() {
  return (
    <LazyWhenVisible
      component={ServicesSection}
      minHeight={640}
      rootMargin="400px"
    />
  );
}
