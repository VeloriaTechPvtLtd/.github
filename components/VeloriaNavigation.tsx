"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { SectionLink } from "./SectionLink";

export function VeloriaNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  // Re-sync when mobile menu opens (hash may have changed via replaceState)
  useEffect(() => {
    if (isMenuOpen) {
      setActiveHash(window.location.hash);
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isSectionActive = (sectionId: string) =>
    pathname === "/" && activeHash === `#${sectionId}`;
  const navWrapperClass = "fixed top-0 left-0 right-0 z-[100] pt-4 px-4 sm:px-6";
  const navShellClass =
    "max-w-7xl mx-auto bg-background rounded-lg shadow-[rgba(1,1,32,0.1)_-10px_0px_75px_0px]";

  const navLinks = [
    { label: "Arenzo", sectionId: "arenzo" },
    { label: "Services", sectionId: "services" },
    { label: "Projects", sectionId: "projects" },
    { label: "Testimonials", sectionId: "testimonials" },
    { label: "Contact", sectionId: "contact" },
  ];

  return (
    <>
    <nav className={navWrapperClass} style={{ transform: 'none', transition: 'none' }}>
      <div
        className={navShellClass}
        style={{ transform: 'none', transition: 'none' }}
      >
        <div className="flex items-center justify-between h-[3.75rem] px-4 sm:px-5" style={{ transform: 'none', transition: 'none' }}>
          <Link href="/" className="flex items-center gap-2.5 group" style={{ transform: 'none', transition: 'none' }}>
            <img src="/logo.png" alt="Veloria Tech" className="w-8 h-8" />
            <span className="text-[0.9375rem] font-medium text-foreground tracking-snug leading-none">
              Veloria Tech
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5" style={{ transform: 'none', transition: 'none' }}>
            {navLinks.map((item) => (
              <SectionLink
                key={item.label}
                sectionId={item.sectionId}
                className={`px-3 py-1.5 text-[0.875rem] font-medium tracking-snug transition-colors duration-200 ${
                  isSectionActive(item.sectionId)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </SectionLink>
            ))}
          </div>

          <div className="hidden md:block" style={{ transform: 'none', transition: 'none' }}>
            <SectionLink sectionId="contact">
              <Button className="together-btn-primary h-9 px-5 text-[0.875rem] rounded-lg border-0" style={{ transform: 'none', transition: 'none' }}>
                Get Started
              </Button>
            </SectionLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-muted-foreground p-2 rounded-lg hover:bg-secondary transition-colors"
            style={{ transform: 'none', transition: 'none' }}
          >
            {isMenuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border px-3 pb-3" style={{ transform: 'none', transition: 'none' }}>
            <div className="pt-2 space-y-0.5">
              {navLinks.map((item) => (
                <SectionLink
                  key={item.label}
                  sectionId={item.sectionId}
                  onNavigate={closeMenu}
                  className={`block px-3 py-2.5 text-[0.875rem] font-medium tracking-snug transition-colors duration-200 ${
                    isSectionActive(item.sectionId)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </SectionLink>
              ))}
              <div className="pt-2">
                <SectionLink sectionId="contact" onNavigate={closeMenu}>
                  <Button className="w-full together-btn-primary rounded-lg border-0" style={{ transform: 'none', transition: 'none' }}>
                    Get Started
                  </Button>
                </SectionLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    {/* Spacer — matches fixed nav height (pt-4 + h-[3.75rem]) so content isn't hidden underneath */}
    <div aria-hidden="true" className="h-nav-offset shrink-0" />
    </>
  );
}
