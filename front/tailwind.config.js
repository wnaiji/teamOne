/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          softBlue: '#DDE7F2',
          softCyan: '#DFF4F3',
          lightPurple: '#B9BBDF',
          darkPurple: '#878ECD',
        },
      },
    },
    plugins: [],
  }