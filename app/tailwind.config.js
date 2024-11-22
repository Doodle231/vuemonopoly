module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        popup: 'popup 600ms ease-in',
      },
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