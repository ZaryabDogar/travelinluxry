/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'navtext': '#F9F8FA',
      'mainbg':'#0A0B0D',
      'white':'#FFFFFF'
      

    },
    fontFamily: {
      Lora: ['Lora', 'sans-serif'],
      raleway: ['Raleway', 'serif'],
      inter: ['Inter', 'serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '850px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          width: '5px',
          
        },
        ".scrollbar-track::-webkit-scrollbar-thumb": {
          width: '5px',
          backgroundColor: '#CC405D',borderRadius: '32px',
        },
      };
      addUtilities(newUtilities);
    }
    
  ],
}