/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      // --- ANIMASI AURORA START ---
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora": "aurora 60s linear infinite", // Kita tambah ini
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Dan ini
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
        aurora: { // Keyframe Aurora
          "0%": { backgroundPosition: "50% 50%, 50% 50%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        mono: ['JetBrains Mono', 'monospace'],
      },
      // --- ANIMASI AURORA END ---
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")], // Shadcn pake plugin ini
}
