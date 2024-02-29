/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38AECC',
        white: '#FFFDFD',
        primary_bg: '#070707',
        grey_primary: '#706E72',
        grey_secondary: '#B8B7B9'
      }
    },
  },
  plugins: [],
}
