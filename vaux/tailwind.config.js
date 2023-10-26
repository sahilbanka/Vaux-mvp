/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#394689',
      'secondary': '',
      'button-hover': '#C3DDFB',
      'background': '#EFF1FF',
      "white": '#FFFFFF',
      "black": '#000'
    },
    extend: {
      borderRadius: {
        'xmd': '0.25rem'
      }
    },
  },
  important: true,
  plugins: [],
}

