/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'primary': '#ffffff',
        'primary-text': '#111111',
        'secondary': '#1a1a1a',
        'secondary-text': '#555555',
        'accent': '#333333',
        'accent-light': '#f0f0f0',
        'surface': '#f7f7f7',
      }
    }
  },
  plugins: [],
}
