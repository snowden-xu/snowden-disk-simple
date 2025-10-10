/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}', './src/renderer/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
