/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Calm, cinematic recovery palette
        forest: {
          DEFAULT: "#1f3a2e", // deep forest green
          deep: "#152a20",
          950: "#0e1c16",
        },
        olive: "#5c6b45", // muted olive (from the brand mark)
        brandblue: "#274a86", // restrained blue (from the brand mark)
        charcoal: "#20211d",
        ivory: "#f6f2e9", // warm off-white
        stone: "#e7e1d4", // soft stone
        clay: "#b06a3f", // restrained clay/amber accent
        amber: "#c98a4b",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
