/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
