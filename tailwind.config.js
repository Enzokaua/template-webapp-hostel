/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./loginPage.html", "./testing.html", "./home.html"],
  theme: {
    extend: {
      colors: {
        testCor: '#000000'
      }
    },
  },
  plugins: [],
}

