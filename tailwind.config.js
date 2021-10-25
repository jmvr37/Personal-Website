const colors = require('tailwindcss/colors')

module.exports = {
 
  purge: [
    '/public/*.html',
    './src/components/**/*.{jsx,js}',
],

  theme: {
    extend: {
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

 // './src/**/*.{js,jsx,ts,tsx}', 
  // './public/index.html'