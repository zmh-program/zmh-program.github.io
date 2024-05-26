import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "background-hover": "hsl(var(--background-hover))",
        "background-active": "hsl(var(--background-active))",
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
        "muted-hover": {
          DEFAULT: "hsl(var(--muted-hover))",
          foreground: "hsl(var(--muted-hover-foreground))",
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
        "scale-down": {
          from: { transform: "scale(1.1)" },
          to: { transform: "scale(1)" },
        },
        "ping-light": {
          "0%": { boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.1)" },
          "50%": { boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.15)" },
          "100%": { boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.1)" },
        },
        "saturated-pulse": {
          "0%": { filter: "saturate(100%)" },
          "50%": { filter: "saturate(150%)" },
          "100%": { filter: "saturate(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-down": "scale-down 1s ease-in-out",
        "ping-light": "ping-light 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "saturated-pulse": "saturated-pulse 5s ease-in-out infinite",

        // merge with saturated-pulse and scale-down
        "saturated-scale-down":
          "saturated-pulse 10s ease-in-out infinite, scale-down 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
