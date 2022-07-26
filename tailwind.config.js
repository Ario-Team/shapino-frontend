/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalameh: ["KalamehWeb", "sans-serif"],
        "iran-yekan": ["iranyekan", "sans-serif"],
      },
      screens: {
        "2xl": "1536px",
        xxl: "2061px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
