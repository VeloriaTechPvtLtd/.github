export function ResourcePreloads() {
  return (
    <>
      <link
        rel="preload"
        href="/assets/hero-platform-visual-mobile.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
        media="(max-width: 1023px)"
      />
      <link
        rel="preload"
        href="/assets/hero-platform-visual.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
        media="(min-width: 1024px)"
      />
      <link
        rel="preload"
        href="/fonts/the-future/the-future-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/the-future/the-future-medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}
