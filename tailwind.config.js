/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'secondary': '#6b7280',
        'accent': '#fff'
      }
    }
  },
  plugins: [],
}