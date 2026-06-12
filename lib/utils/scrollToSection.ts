/** Fixed nav: pt-4 (1rem) + h-[3.75rem] */
export const NAV_SCROLL_OFFSET = 76;

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
