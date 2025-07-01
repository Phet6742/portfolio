/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './images/**/*.{jpg,png,svg}',
    './work/**/*.{jpg,png,svg}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}; 