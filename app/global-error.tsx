"use client";

import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center px-4">
        <p className="t-mono text-stat text-brand-orange mb-4">500</p>
        <h1 className="t-section-title mb-3 text-center">Something went wrong</h1>
        <p className="t-section-desc text-center max-w-md mb-8">
          A critical error occurred. Please try reloading the page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="together-btn-primary inline-flex items-center px-6 py-3 text-body-sm"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
