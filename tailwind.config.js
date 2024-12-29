/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body:"#fafafa",
        // secondary:"#E74C3C"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}