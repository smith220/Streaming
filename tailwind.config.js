/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {    'sm':'340px',
    'md':'768px',
    'l':'1024px',
    'xl':'1280px',},
    screens:{
      'sm':'640px',
      'md':'768px',
      'l':'1024px',
      'xl':'1280px',
    }
  },
  plugins: [],
}
