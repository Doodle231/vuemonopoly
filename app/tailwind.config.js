module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 column grid
        '11': 'repeat(16, minmax(0, 1fr))',
      },
    },
    fontFamily: { 
      'sans': 'Monopoly', 
    },
    container: {
      center: true,
      padding: '2rem',
    },
    blueitem:{
      color: "#F7F4CA ", 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}