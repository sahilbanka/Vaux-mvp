/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xmd': '0.25rem'
      },
      borderColor:{
        "primary": '#394689',
      },
      colors: {
        'primary': '#394689',
        'secondary': '',
        'button-hover': '#C3DDFB',
        'background': '#EFF1FF',
        "white": '#FFFFFF',
        "black": '#000'
      },
    },
  },
  important: true,
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover","group-active"],
    },
},
}

