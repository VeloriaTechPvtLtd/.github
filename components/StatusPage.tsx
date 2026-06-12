import Link from "next/link";
import { ArrowRight, Home, RefreshCw } from "lucide-react";

interface StatusAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface StatusPageProps {
  code: string;
  label: string;
  title: string;
  description: string;
  primaryAction: StatusAction;
  secondaryAction?: StatusAction;
}

export function StatusPage({
  code,
  label,
  title,
  description,
  primaryAction,
  secondaryAction,
}: StatusPageProps) {
  return (
    <div className="bg-background min-h-[calc(100vh-var(--nav-offset))] flex flex-col">
      <header className="page-top pb-4 sm:pb-8 border-b border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="t-label mb-3">{label}</p>
          <h1 className="t-display mb-4 tracking-snug">{title}</h1>
          <p className="t-section-desc max-w-2xl">{description}</p>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-lg w-full text-center">
          <p className="t-mono text-stat text-brand-orange mb-6 tabular-nums">{code}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {primaryAction.href ? (
              <Link
                href={primaryAction.href}
                className="together-btn-primary inline-flex items-center px-6 py-3 text-body-sm w-full sm:w-auto justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                {primaryAction.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={primaryAction.onClick}
                className="together-btn-primary inline-flex items-center px-6 py-3 text-body-sm w-full sm:w-auto justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                {primaryAction.label}
              </button>
            )}
            {secondaryAction &&
              (secondaryAction.href ? (
                <Link
                  href={secondaryAction.href}
                  className="together-btn-secondary inline-flex items-center px-6 py-3 text-body-sm w-full sm:w-auto justify-center"
                >
                  {secondaryAction.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  className="together-btn-secondary inline-flex items-center px-6 py-3 text-body-sm w-full sm:w-auto justify-center"
                >
                  {secondaryAction.label}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
