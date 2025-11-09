/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // includes root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // includes all your components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", "sans-serif"],
        serif: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        confetti: "confettiRise 3s ease-out forwards",
        shine: "shine 2s infinite",
      },
      keyframes: {
        confettiFaill: {
          "0%": { top: "0%", opacity: 0 },
          "100%": { top: "100%", opacity: 1 },
        },
        confettiRise: {
          "0%": {
            bottom: "0%",
            left: "0%",
            opacity: 1,
            transform: "translateX(0) translateY(0) rotate(0deg)",
          },
          "100%": {
            bottom: "0%",
            opacity: 0,
            transform: "translateX(100px) translateY(-300px) rotate(720deg)",
          },
        },
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(200%) skewX(-15deg)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
