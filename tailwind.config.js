/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        default: ["Montserrat"],
      },
      colors: {
        default: "#970002",
        light: "#AF0406",
        dark: "#171F2C",
        buttonToggle: "#FFB416",
      },
    },
  },
  plugins: [],
};
