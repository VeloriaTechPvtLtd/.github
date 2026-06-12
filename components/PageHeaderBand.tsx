type PageHeaderBandProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
  width?: "7xl" | "4xl";
  innerPadding?: "default" | "hero" | "none";
  className?: string;
  innerClassName?: string;
};

const INNER_PADDING = {
  default: "pt-4 pb-6 sm:pt-5 sm:pb-8",
  hero: "page-top pb-12 sm:pb-16",
  none: "",
} as const;

export function PageHeaderBand({
  children,
  variant = "light",
  width = "7xl",
  innerPadding = "default",
  className = "",
  innerClassName = "",
}: PageHeaderBandProps) {
  const bandClass = variant === "dark" ? "page-header-band-dark" : "page-header-band";
  const widthClass = width === "4xl" ? "max-w-4xl" : "max-w-7xl";
  const paddingClass = INNER_PADDING[innerPadding];

  return (
    <div className={`${bandClass} ${className}`.trim()}>
      <div
        className={`${widthClass} mx-auto px-4 sm:px-6 lg:px-8 ${paddingClass} ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}
