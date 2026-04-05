import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        muted: "#F1F5F9",
        border: "#E2E8F0",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.05)",
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
    },
  },

  plugins: [],
};

export default config;