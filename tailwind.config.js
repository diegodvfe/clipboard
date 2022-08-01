module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'320px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      color: {
        strongCyan : 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl( 210, 10%, 33%)',
        grayisBlue: 'hsl(201, 11%, 66%)',
      }
    },
  },
  plugins: [],
}
