import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ResourcePreloads } from "@/components/ResourcePreloads";
import { VeloriaNavigation } from "@/components/VeloriaNavigation";
import { VeloriaFooter } from "@/components/VeloriaFooter";
import {
  JsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo/jsonLd";
import {
  DEFAULT_OG_IMAGE,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/seo/site";
import "./globals.css";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#010120",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} - Software Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Software Solutions`,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Software Solutions`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ResourcePreloads />
      </head>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Script id="deferred-bootstrap" strategy="lazyOnload">
          {`(function(){function loadSheet(href){if(document.querySelector('link[href="'+href+'"]'))return;var link=document.createElement("link");link.rel="stylesheet";link.href=href;document.head.appendChild(link)}function loadDeferred(){loadSheet("/fonts-deferred.css");loadSheet("/styles-deferred.css")}"requestIdleCallback"in window?requestIdleCallback(loadDeferred,{timeout:2e3}):setTimeout(loadDeferred,1);var o=76;function s(id){var el=document.getElementById(id);if(!el)return;var t=el.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:Math.max(0,t),behavior:"smooth"})}function h(){if(location.pathname!=="/")return;var hash=location.hash.replace(/^#/,"");hash&&requestAnimationFrame(function(){s(hash)})}window.addEventListener("hashchange",h,{passive:!0});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();document.addEventListener("click",function(e){var d=document.getElementById("mobile-nav");d&&d.open&&e.target.closest&&e.target.closest("#mobile-nav a")&&d.removeAttribute("open")},{passive:!0})})();`}
        </Script>
        <div className="min-h-screen text-foreground scroll-smooth overflow-x-hidden w-full bg-background">
          <VeloriaNavigation />
          <main id="main-content">{children}</main>
          <VeloriaFooter />
        </div>
      </body>
    </html>
  );
}
