const colors = require('tailwindcss/colors')

 module.exports = {
  mode: 'jit',
  purge: [
    './layouts/**/*.html', 
    './content/**/*.md',
  ],
  theme: {
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    "code::before": {content: ''},
                    "code::after": {content: ''},

                }
            }
        }
    },
    colors: {
      'k1green': '#aeb79c',
       cyan: colors.cyan,
       gray: colors.gray,
       red: colors.red,
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'] 
    }
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}