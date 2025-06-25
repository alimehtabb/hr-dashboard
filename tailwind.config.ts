import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        avocado: {
          500: "oklch(0.84 0.18 117.33)",
        },
      },
      fontFamily: {
        display: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
