 module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    "code::before": {content: ''},
                    "code::after": {content: ''}

                }
            }
        }
    },
    // fontWeight: {
    //   normal: 100,
    // },
    fontFamily: {
      'roboto': 'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    }
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}