import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0e16",
        bg: "#fafaf7",
        border: "#e6e4dc",
        accent: "#0a7c4a",
        accentSoft: "#dff5e8",
        warn: "#b25400",
        danger: "#c0392b",
        stone: {
          50: "#f3f1ea",
          400: "#a9a497",
          500: "#555148",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
