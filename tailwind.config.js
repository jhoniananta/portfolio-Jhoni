/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    '*.html',
    '*/**.{html, css, js}'
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9DC183',
          black: '#222831',
          gray: '#393E46',
          white: '#EEEEEE',
        }
      }
    },
  },
  plugins: [],
}

