/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      grey: "#EAEAEA",
      purple: "#5E2E53",
      pink: "#E856EB",
      black: "#000000",
      white: "#FFFFFF"
    },
    fontSize: {
      big: "36px",
      medium: "24px",
      small: "18px"
    },
    fontFamily:{
      normalText: ["Ubuntu"],
      logoText: ["Roboto"],
      logoText2: ["Racing Sans One"]
    },
    
    extend: {},
  },
  plugins: [],
}