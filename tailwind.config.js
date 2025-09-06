/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Rubik": ["Rubik"],
        "Roboto": ["Roboto"],
        "Raleway": ["Raleway"],
        "Poppins": ["Poppins"],
      },
      colors: {
        "primary":"#222830",
        "text-white":"#eeeeee",
        "text-green": "#02adb5",
      }
    },
  },
  plugins: [],
}

