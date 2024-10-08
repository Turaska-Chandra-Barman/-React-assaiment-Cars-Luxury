/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#0D0A19',
        secondary: '#9A9EA7',
        accenColor: '#7963F0',
        btn: '#F5F6F7',
      },
      boxShadow: {
        cardShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      backgroundImage: {
        'coustom-img': "url('../assets/Map.png')",
        'custom-gradient':
          'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(231,238,235,1) 0%, rgba(255,255,255,1) 13%, rgba(172,191,217,1) 39%, rgba(209,182,242,0.969625350140056) 100%)',
      },
    },
  },
  plugins: [],
};

