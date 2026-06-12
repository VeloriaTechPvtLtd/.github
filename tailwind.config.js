/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"The Future"', "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ['"The Future Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        snug: "-0.01em",
        label: "0.1em",
        wide: "0.12em",
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "400" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "400" }],
        "heading-lg": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "400" }],
        "heading-md": ["clamp(1.375rem, 2.5vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        "body-xs": ["0.75rem", { lineHeight: "1.4" }],
        "label": ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.1em", fontWeight: "500" }],
        "stat": ["clamp(3rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "400" }],
      },
      boxShadow: {
        nav: "0 4px 24px rgba(1, 1, 32, 0.08)",
        card: "0 1px 3px rgba(1, 1, 32, 0.06), 0 8px 24px rgba(1, 1, 32, 0.04)",
        "card-hover": "0 4px 12px rgba(1, 1, 32, 0.08), 0 16px 40px rgba(1, 1, 32, 0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      colors: {
        "brand-purple": "#caaef5",
        "brand-orange": "#fc4c02",
        "brand-magenta": "#ef2cc1",
        "brand-dark-blue": "#010120",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "nav-offset": "var(--nav-offset)",
      },
    },
  },
  plugins: [],
};
