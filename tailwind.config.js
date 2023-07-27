/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      epilogue: ['Epilogue', 'sans-serif'],
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'divider': '#EBEFF2',
        'blue800': '#00113D',
        'blue600': '#213770',
        'blue200': '#747D94',
        'blueButton': '#081B4E',
        'orange500': '#F21A05',
        'orange400': '#F43724',
        'grayBackground': '#F5F6F8',
        'gray100': '#EAECF0',
        'gray150': '#FBFBFB',
        'gray500': '#777777',
      },
      letterSpacing: {
        tightest: '-6.5%',
      }
    },
  },
  plugins: [],
}
