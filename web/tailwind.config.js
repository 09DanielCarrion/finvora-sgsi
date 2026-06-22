/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#06090F",
          surface: "#0C1220",
          elevated: "#111B2E",
          overlay: "#0A1525",
        },
        border: {
          subtle: "#1A2D4A",
          active: "#2563EB",
        },
        accent: {
          primary: "#3B82F6",
          secondary: "#06B6D4",
          violet: "#8B5CF6",
        },
        text: {
          primary: "#E2E8F0",
          secondary: "#64748B",
          tertiary: "#334155",
          mono: "#94A3B8",
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          critical: "#EF4444",
          pending: "#334155",
        },
        block: {
          b0: "#06B6D4",
          b1: "#3B82F6",
          b2: "#8B5CF6",
          b3: "#10B981",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: "11px",
        sm: "13px",
        base: "15px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        hero: "72px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "20px",
      },
    },
  },
  plugins: [],
};
