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
      colors: {
        cyber: {
          space:      "#050C14",
          deep:       "#030811",
          card:       "#0A1628",
          "card-2":   "#0D1E34",
          border:     "#162030",
          "border-2": "#1E3050",
          cyan:       "#00D4FF",
          "cyan-dim": "#0099BB",
          green:      "#00FF88",
          "green-dim":"#00BB66",
          purple:     "#8B5CF6",
          red:        "#FF3B5C",
          amber:      "#FFB800",
          text:       "#C4DCF0",
          "text-dim": "#6B8EAD",
          "text-muted":"#2E4560",
        },
      },
      fontFamily: {
        pliant:   ["'Pliant'",        "system-ui", "sans-serif"],
        orbitron: ["'Orbitron'",      "system-ui", "sans-serif"],
        mono:     ["'JetBrains Mono'","'Fira Code'","monospace"],
        inter:    ["'Inter'",         "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":      "fade-up 0.55s ease-out forwards",
        "fade-in":      "fade-in 0.4s ease-out forwards",
        "glow-pulse":   "glow-pulse 2s ease-in-out infinite",
        "scan":         "scan 3s ease-in-out infinite",
        "glitch":       "glitch 0.6s steps(1) infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "float":        "float 4s ease-in-out infinite",
        "matrix-rain":  "matrix-rain 8s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0,212,255,0.3), 0 0 24px rgba(0,212,255,0.08)" },
          "50%":      { boxShadow: "0 0 16px rgba(0,212,255,0.6), 0 0 48px rgba(0,212,255,0.2)" },
        },
        "scan": {
          "0%":   { transform: "translateY(-100%)", opacity: "0.6" },
          "100%": { transform: "translateY(100%)",  opacity: "0"   },
        },
        "glitch": {
          "0%,100%": { clipPath: "inset(0 0 98% 0)" },
          "20%":     { clipPath: "inset(20% 0 60% 0)", transform: "translate(-2px)" },
          "40%":     { clipPath: "inset(50% 0 30% 0)", transform: "translate(2px)"  },
          "60%":     { clipPath: "inset(80% 0 5%  0)", transform: "translate(-1px)" },
          "80%":     { clipPath: "inset(10% 0 80% 0)", transform: "translate(1px)"  },
        },
        "cursor-blink": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0px)"   },
          "50%":     { transform: "translateY(-8px)"  },
        },
        "matrix-rain": {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "cyber":      "0 0 12px rgba(0,212,255,0.25), 0 0 40px rgba(0,212,255,0.08)",
        "cyber-lg":   "0 0 24px rgba(0,212,255,0.40), 0 0 64px rgba(0,212,255,0.15)",
        "green-glow": "0 0 12px rgba(0,255,136,0.25), 0 0 40px rgba(0,255,136,0.08)",
        "card":       "0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(22,32,48,0.8)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
