/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: "1512px",
      md: "834px",
      sm: "390px",
    },
  },
  plugins: [],
  darkMode: "class",
};
