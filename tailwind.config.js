/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      gridRow: {
        'span-10': 'span 10 / span 10',
      }
    },
  },
  plugins: [],
}

