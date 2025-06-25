/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: {
              color: "var(--primary)",
              fontWeight: "500",
              textDecoration: "none",
            },
            h1: { fontWeight: "700" },
            h2: { fontWeight: "600" },
            h3: { fontWeight: "600" },
            code: { color: "var(--muted-foreground)" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};