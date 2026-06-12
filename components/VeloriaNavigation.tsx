"use client";

import Link from "next/link";
import { SectionLink } from "./SectionLink";
import { CONTACT_FORM_SECTION_ID } from "@/lib/utils/scrollToSection";

const navLinks = [
  { label: "Arenzo", sectionId: "arenzo" },
  { label: "Services", sectionId: "services" },
  { label: "Projects", sectionId: "projects" },
  { label: "Testimonials", sectionId: "testimonials" },
  { label: "Contact", sectionId: CONTACT_FORM_SECTION_ID },
] as const;

const navLinkClass =
  "px-3 py-1.5 text-[0.875rem] font-medium tracking-snug text-muted-foreground hover:text-foreground transition-colors duration-200";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function NavLinks({ block = false }: { block?: boolean }) {
  return navLinks.map((item) => (
    <SectionLink
      key={item.label}
      sectionId={item.sectionId}
      className={block ? `block py-2.5 ${navLinkClass}` : navLinkClass}
      onNavigate={
        block
          ? () => {
              document.getElementById("mobile-nav")?.removeAttribute("open");
            }
          : undefined
      }
    >
      {item.label}
    </SectionLink>
  ));
}

export function VeloriaNavigation() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] pt-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-background rounded-lg shadow-[rgba(1,1,32,0.1)_-10px_0px_75px_0px]">
          <div className="flex items-center justify-between h-[3.75rem] px-4 sm:px-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/logo.webp"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
                decoding="async"
              />
              <span className="text-[0.9375rem] font-medium text-foreground tracking-snug leading-none">
                Veloria Tech
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              <NavLinks />
            </div>

            <div className="hidden md:block">
              <SectionLink
                sectionId={CONTACT_FORM_SECTION_ID}
                className="together-btn-primary inline-flex items-center justify-center h-9 px-5 text-[0.875rem] rounded-lg border-0"
              >
                Get Started
              </SectionLink>
            </div>

            <details id="mobile-nav" className="mobile-nav md:hidden">
              <summary
                className="text-muted-foreground p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <span className="nav-icon-menu">
                  <MenuIcon />
                </span>
                <span className="nav-icon-close">
                  <CloseIcon />
                </span>
              </summary>
              <div className="border-t border-border px-3 pb-3">
                <div className="pt-2 space-y-0.5">
                  <NavLinks block />
                  <div className="pt-2">
                    <SectionLink
                      sectionId={CONTACT_FORM_SECTION_ID}
                      className="together-btn-primary inline-flex items-center justify-center w-full rounded-lg border-0 h-10"
                      onNavigate={() => {
                        document.getElementById("mobile-nav")?.removeAttribute("open");
                      }}
                    >
                      Get Started
                    </SectionLink>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>
      <div aria-hidden="true" className="h-nav-offset shrink-0" />
    </>
  );
}
