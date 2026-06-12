"use client";

import { useEffect } from "react";
import { StatusPage } from "@/components/StatusPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      label="Error"
      title="Something went wrong"
      description="We hit an unexpected error while loading this page. You can try again or return to the homepage."
      primaryAction={{ label: "Try again", onClick: reset }}
      secondaryAction={{ label: "Back to home", href: "/" }}
    />
  );
}
