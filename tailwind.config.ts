import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        void: "#0b0a09",
        acid: {
          50: "#f9ffe0",
          100: "#f1ffb8",
          200: "#e6ff85",
          300: "#d9ff4d",
          400: "#c8f526",
          500: "#a8d40f",
          600: "#82a608",
          700: "#617c0b",
          800: "#4d610f",
          900: "#3f5012",
          950: "#212d04",
        },
        ember: {
          50: "#fff3ee",
          100: "#ffe3d6",
          200: "#ffc3ab",
          300: "#ff9b75",
          400: "#ff6a3d",
          500: "#fb4c1a",
          600: "#e2340f",
          700: "#bb2710",
          800: "#952315",
          900: "#792014",
          950: "#410c06",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        phthalo: {
          50: "#f0f9f4",
          100: "#dcf2e4",
          200: "#bce5cc",
          300: "#8dd1a8",
          400: "#56b67d",
          500: "#339b5e",
          600: "#26804a",
          700: "#20653c",
          800: "#1e5132",
          900: "#1a432a",
          950: "#123524",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(300%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // lub-dub: two beats, then rest
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.35)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.22)" },
          "70%": { transform: "scale(1)" },
        },
        "heartbeat-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(2.6)", opacity: "0" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scan: "scan 3.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        heartbeat: "heartbeat 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "heartbeat-ring": "heartbeat-ring 1.6s cubic-bezier(0.2, 0.6, 0.3, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config