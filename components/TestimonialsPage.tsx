"use client";

import { useRouter } from "next/navigation";
import { TestimonialsSection } from "./TestimonialsSection";

export function TestimonialsPage() {
  const router = useRouter();

  return (
    <TestimonialsSection onViewAllProjects={() => router.push("/projects")} />
  );
}
