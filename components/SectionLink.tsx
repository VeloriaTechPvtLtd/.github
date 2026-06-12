"use client";

import { type ReactNode, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "@/lib/utils/scrollToSection";

interface SectionLinkProps {
  sectionId: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}

export function SectionLink({
  sectionId,
  children,
  className,
  onNavigate,
}: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();

    if (pathname === "/") {
      window.history.replaceState(null, "", `/#${sectionId}`);
      // replaceState does not fire hashchange; nav + lazy sections listen for it
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
