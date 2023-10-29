/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#394689',
        'secondary': '',
        'button-hover': '#C3DDFB80',
        'background': '#EFF1FF',
        "white": '#FFFFFF',
        "black": '#000',
        "light-blue": '#C3DDFB',
        'indigo': '#A59B9B',
        'grey-white': '#F6F7F9'
      },
      borderRadius: {
        'xmd': '0.25rem'
      },
      fontSize: {
        '20': '20px',
        '30': '30px'
      },
      lineHeight: {
        'normal': 'normal'
      },
      scale: {
        '80': '0.8',
        '85': '0.85'
      },
      borderColor:{
        "primary": '#394689',
      },
      fontFamily: {
        'ink-free': `'Shadows Into Light', cursive`
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover","group-active"],
    },
},
}

