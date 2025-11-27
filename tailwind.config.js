/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        serif: [
          'Georgia',
          '"Times New Roman"',
          'Times',
          'serif'
        ],
        logo: [
          'Georgia',
          '"Times New Roman"',
          'Times',
          'serif'
        ],
      },
      colors: {
        primary: '#06152b',
        'primary-light': '#234068',
        'primary-dark': '#070e18',
        accent: '#c5554d',
        },
    },
  },
  plugins: [],
};
