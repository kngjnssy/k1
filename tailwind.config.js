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
      'roboto': 'Roboto',
      // 'poppins': ['Poppins', 'sans-serif'] 
    }
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}