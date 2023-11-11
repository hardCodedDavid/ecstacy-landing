/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: '#828282',
        gray1: '#333333',
        gray4: '#BDBDBD',
        gray5: '#E0E0E0',
        gray6: '#F2F2F2',
        darkie: '#141414',
        darker: '#181818',
        darkest: '#343434',
        red: '#EF5858'
      },
      maxHeight: {
      },
      maxWidth: {
        desktop: '1440px',
        hero: '1060px'
      },
      fontSize: {
        heroheader: '80px',
        lgheroheader: '95px'
      }
    },
  },
  plugins: [],
}
