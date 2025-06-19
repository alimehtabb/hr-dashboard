/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: "oklch(var(--card) / <alpha-value>)",
        "card-foreground": "oklch(var(--card-foreground) / <alpha-value>)",
        popover: "oklch(var(--popover) / <alpha-value>)",
        "popover-foreground": "oklch(var(--popover-foreground) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
        secondary: "oklch(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "oklch(var(--secondary-foreground) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        "muted-foreground": "oklch(var(--muted-foreground) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        "accent-foreground": "oklch(var(--accent-foreground) / <alpha-value>)",
        destructive: "oklch(var(--destructive) / <alpha-value>)",
        sidebar: "oklch(var(--sidebar) / <alpha-value>)",
        "sidebar-foreground": "oklch(var(--sidebar-foreground) / <alpha-value>)",
        "sidebar-primary": "oklch(var(--sidebar-primary) / <alpha-value>)",
        "sidebar-primary-foreground": "oklch(var(--sidebar-primary-foreground) / <alpha-value>)",
        "sidebar-accent": "oklch(var(--sidebar-accent) / <alpha-value>)",
        "sidebar-accent-foreground": "oklch(var(--sidebar-accent-foreground) / <alpha-value>)",
        "sidebar-border": "oklch(var(--sidebar-border) / <alpha-value>)",
        "sidebar-ring": "oklch(var(--sidebar-ring) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
