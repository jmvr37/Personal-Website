const colors = require('tailwindcss/colors')

module.exports = {
 
  purge: [
  './src/**/*.{js,jsx,ts,tsx}', 
  './public/index.html'
],

  theme: {
    extend: {
      sky: colors.sky,
      cyan: colors.cyan,
      blue: {
        450: '0FA5E9',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
