/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")


module.exports = {
  content: [
    "./src/**/*.{html,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("slider-thumb", ["&::-webkit-slider-thumb", "&::slider-thumb"])
      addVariant("moz-slider-thumb", ["&::-moz-range-thumb", "&::slider-thumb"])
    }),
  ],
  darkMode: "",
};
