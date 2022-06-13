/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: ["btn", "container", "header"],
  theme: {
    extend: {},
  },
  plugins: [],
};
