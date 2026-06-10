import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira)", "monospace"],
      },
      colors: {
        // Deep navy-to-void background system
        void: "#07080D",
        navy: "#0D1117",
        surface: "#161B27",
        card: "#1C2333",
        border: "#2A3347",
        // Electric indigo accent — distinctive, not the usual green
        indigo: {
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
        },
        // Warm amber as secondary accent — creates tension with cool indigo
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
        },
        muted: "#64748B",
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          dim: "#64748B",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        shimmer: "shimmer 2s infinite",
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
