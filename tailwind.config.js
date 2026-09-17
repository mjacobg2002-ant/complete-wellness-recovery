/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Calm, cinematic recovery palette — blue-forward, drawn from the brand mark
        forest: {
          // (token name kept; values now a deep, restful navy)
          DEFAULT: "#254a78", // brand blue, mid
          deep: "#173458", // deep navy
          950: "#0e2038", // near-black navy
        },
        olive: "#4d6a55", // muted green (secondary accent from the brand mark)
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
