/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./2023/**/*.{js,ts,jsx,tsx}",
    "./2024/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "pyconug-yellow": "#F1DB2F",
        "pyconug-lightBlue": "#177E89",
        "pyconug-darkBlue": "#094C61",
        "pyconug-red": "#E32E26",
        "muted-foreground": "#6E6E77",
        muted: "#F4F4F5",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
