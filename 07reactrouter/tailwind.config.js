/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // no space allowed 
  ],
  theme: {
    extend: {
      fontSize: {
        'xlg': ['1.25rem', '3.75rem'], // Custom font size with line height
      }
    },
  },
  plugins: [],
}


