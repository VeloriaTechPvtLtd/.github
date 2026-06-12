const CARD_ASPECT_CLASS = 'aspect-[16/9]';
const HERO_ASPECT_CLASS = 'aspect-[16/9]';
const SCREENSHOT_ASPECT_CLASS = 'aspect-[9/16]';

const CARD_IMAGE_CLASS = 'w-full h-full object-cover object-center';
const HERO_IMAGE_CLASS = `${HERO_ASPECT_CLASS} w-full object-cover object-center rounded-2xl`;
const SCREENSHOT_IMAGE_CLASS = `${SCREENSHOT_ASPECT_CLASS} w-full object-contain object-center bg-[#0d1117] block`;

export function getProjectImageSrc(image: string): string {
  return image;
}

export function getProjectCardAspectClass(): string {
  return CARD_ASPECT_CLASS;
}

export function getProjectCardImageClass(): string {
  return CARD_IMAGE_CLASS;
}

export function getProjectHeroImageClass(): string {
  return HERO_IMAGE_CLASS;
}

export function getScreenshotImageClass(): string {
  return SCREENSHOT_IMAGE_CLASS;
}
