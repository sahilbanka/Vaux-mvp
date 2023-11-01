/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#182a75',
        'secondary': '',
        'button-hover': '#C3DDFB80',
        'background': '#fff',
        "white": '#FFFFFF',
        "black": '#000',
        "light-blue": '#C3DDFB',
        'indigo': '#A59B9B',
        'light-white': '#F6F7F9',
        'black-second': '#3a4358',
        'light-grey': '#eeeff2'
      },
      borderRadius: {
        'xmd': '0.25rem',
        'circle': '50%'
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
      fontFamily: {
        'ink-free': `'Shadows Into Light', cursive`
      },
      padding: {
        3: '0.75rem',
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover", "group-active"],
    },
  }
}

