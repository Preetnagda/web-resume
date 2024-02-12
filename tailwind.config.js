/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'primary-text': '#000000',
        'secondary': '#6b7280',
        'secondary-text': '#374151',
        'accent': '#fff'
      }
    }
  },
  plugins: [],
}