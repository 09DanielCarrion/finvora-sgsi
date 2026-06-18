/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#0A1628", 800: "#0F2140", 700: "#1A2F4E" },
        blue: { electric: "#1E6FFF", cyan: "#00D4FF" },
        status: { implemented: "#00C48C", partial: "#FFB800", critical: "#FF4757", excluded: "#4A5568" }
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], mono: ["JetBrains Mono", "monospace"] }
    }
  },
  plugins: []
}
