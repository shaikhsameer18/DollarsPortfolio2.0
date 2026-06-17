import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Earthy Forest Hues ──────────────────────────────────────────────────
      colors: {
        // Cream / warm backgrounds
        cream: {
          50:  "#fdf9f4",
          100: "#f8f5f0",
          200: "#f0ede6",
          300: "#e8e4da",
          400: "#ddd9ce",
          500: "#dad7cd", // Dust Grey — key border/bg token
        },
        // Forest palette — Earthy Forest Hues
        forest: {
          sage:     "#a3b18a", // Dry Sage
          sage50:   "#f2f5ee", // very light sage background
          sage100:  "#dde6d0", // light sage border
          fern:     "#588157", // Fern — mid accent
          fern50:   "#eef3e8", // very light fern background
          fern100:  "#c5d9b5", // light fern border
          hunter:   "#3a5a40", // Hunter Green — primary actions
          hunter50: "#e8efe9", // very light hunter background
          pine:     "#344e41", // Pine Teal — deepest, hover states
        },
        // Stone neutrals for text
        stone: {
          50:  "#faf9f7",
          100: "#f5f3ef",
          200: "#e8e5de",
          300: "#d6d2c8",
          400: "#b0ab9e",
          500: "#8a8478",
          600: "#6b6558",
          700: "#514c40",
          800: "#3a352b",
          900: "#1a1f1b", // near-black with forest tint
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        space:    ["var(--font-space)", "system-ui", "sans-serif"],
        inter:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":  "fade-up 0.55s ease-out forwards",
        "fade-in":  "fade-in 0.4s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)"     },
        },
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
        "forest":     "0 4px 14px rgba(58,90,64,0.20)",
        "forest-sm":  "0 2px 8px rgba(58,90,64,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
