/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Montserrat"],
      },
      colors: {
        dark: "#970002",
        light: "#AF0406",
      },
    },
  },
  plugins: [],
};
