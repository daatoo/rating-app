/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '575px',
        // => @media (min-width: 640px) { ... }

      },
    },
  },
  plugins: [],
}
