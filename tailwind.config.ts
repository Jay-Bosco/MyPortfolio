import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#04080f",
          50: "#070d1a",
          100: "#0b1525",
          200: "#0f1e35",
          300: "#162540",
        },
        blue: {
          DEFAULT: "#2563eb",
          mid: "#3b82f6",
          light: "#60a5fa",
          pale: "#93c5fd",
          glow: "rgba(37,99,235,0.18)",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "60px 60px" },
      animation: {
        "fade-up":    "fadeUp 0.8s ease forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "pulse-ring": "pulseRing 2s infinite",
        float:        "float 3s ease-in-out infinite",
        sparkle:      "sparkle 1.5s infinite",
        shimmer:      "shimmer 4s linear infinite",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        pulseRing: { "0%": { transform: "scale(1)", opacity: "0.8" }, "100%": { transform: "scale(1.6)", opacity: "0" } },
        float:     { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        sparkle:   { "0%,100%": { opacity: "0", transform: "scale(0)" }, "50%": { opacity: "1", transform: "scale(1)" } },
        shimmer:   { "0%": { backgroundPosition: "-200% center" }, "100%": { backgroundPosition: "200% center" } },
      },
      boxShadow: {
        blue:     "0 0 30px rgba(37,99,235,0.25)",
        "blue-lg":"0 0 60px rgba(37,99,235,0.35)",
        glass:    "0 8px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
