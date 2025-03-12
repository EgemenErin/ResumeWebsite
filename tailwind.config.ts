import type { Config } from "tailwindcss"

/**
 * Tailwind CSS configuration
 *
 * Configures:
 * - Theme colors
 * - Font families
 * - Screen breakpoints
 * - Content paths
 *
 * Edit this file to customize the Tailwind CSS configuration
 *
 * Class Explanations:
 * - darkMode: ["class"] - Enables dark mode based on class (not system preference)
 * - content: [...] - Specifies files to scan for class names
 * - prefix: "" - No prefix for Tailwind classes
 * - container.center: true - Centers containers horizontally
 * - container.padding: "2rem" - Adds padding to containers
 * - container.screens: { "2xl": "1400px" } - Sets max width for 2xl screens
 */

const config = {
  darkMode: ["class"], // Enables dark mode based on class (not system preference)
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ], // Specifies files to scan for class names
  prefix: "", // No prefix for Tailwind classes
  theme: {
    container: {
      center: true, // Centers containers horizontally
      padding: "2rem", // Adds padding to containers
      screens: {
        "2xl": "1400px", // Sets max width for 2xl screens
      },
    },
    extend: {
      colors: {
        // Extends Tailwind's default color palette with custom colors
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
      },
      fontFamily: {
        // Extends Tailwind's default font families with custom fonts
        sans: ["var(--font-sans)"], // Inter font
        serif: ["var(--font-serif)"], // Playfair Display font
      },
    },
  },
  plugins: [], // No plugins used
} satisfies Config

export default config

