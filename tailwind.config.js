/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#F1ECE6',
        customBlue: '#76B7CD'
      },
    },
  },
  plugins: [],
}
