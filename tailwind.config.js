const colors = require('tailwindcss/colors')

 module.exports = {
  mode: 'jit',
  content: [
    './layouts/**/*.html', 
    './content/**/*.md',
    './static/css/*.css'
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
    }
},
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss/plugin')(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('second', '&:nth-child(2)')
      addVariant('third', '&:nth-child(3)')
      addVariant('fourth', '&:nth-child(4)')
      addVariant('fifth', '&:nth-child(5)')
    })
  ],
}