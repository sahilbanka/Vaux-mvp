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
        'button-hover': '#C3DDFB',
        'background': '#EFF1FF',
        "white": '#FFFFFF',
        "black": '#000',
        "light-blue": '#C3DDFB'
      },
      borderRadius: {
        'xmd': '0.25rem'
      },
      fontSize: {
        '30': '30px'
      },
      lineHeight: {
        'normal': 'normal'
      },
      scale: {
        '80': '0.8'
      }
    },
  },
  plugins: [],
  important: true
}

