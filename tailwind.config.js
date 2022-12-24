/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273B4A",
        danger: "#E90000",
        grey: "#E5E5E5",
        yellow: "#FFDC23",
        border: "#C4C4C4",
        lightgrey: "#545454"
      },
      screens: {
        'mini': '375px'
      },
      width: {
        'small': '375px'
      },
      height: {
        small: "812px"
      },
      fontFamily: {
        sans400: "productSans400",
        sans800: "productSans800"
      }
    },
  },
  plugins: [],
}
