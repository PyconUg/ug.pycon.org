/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "pyconug-yellow": "#F1DB2F",
        "pyconug-lightBlue": "#177E89",
        "pyconug-darkblue": "#094C61",
        "pyconug-red": "#E32E26",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
