/** Fixed nav: pt-4 (1rem) + h-[3.75rem] */
export const NAV_SCROLL_OFFSET = 76;

export const CONTACT_SECTION_ID = "contact";
export const CONTACT_FORM_SECTION_ID = "contact-form";

export function resolveScrollTarget(sectionId: string): string {
  return sectionId === CONTACT_SECTION_ID ? CONTACT_FORM_SECTION_ID : sectionId;
}

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const targetId = resolveScrollTarget(sectionId);

  const scroll = () => {
    const element = document.getElementById(targetId);
    if (!element) return false;

    const top =
      element.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior });
    return true;
  };

  if (scroll()) return;

  let attempts = 0;
  const retry = () => {
    if (scroll() || attempts >= 30) return;
    attempts += 1;
    requestAnimationFrame(retry);
  };
  requestAnimationFrame(retry);
}
