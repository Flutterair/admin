/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshilight: ['SATOSHILIGHT', 'sans-serif'],
        satoshiregular: ['SATOSHIREGULAR', 'sans-serif'],
        satoshimedium: ['SATOSHIMEDIUM', 'sans-serif'],
        satoshibold: ['SATOSHIBOLD', 'sans-serif'],
        satoshiblack: ['SATOSHIBLACK', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

