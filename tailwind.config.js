/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'wave-reverse': 'wave-reverse 4s ease-in-out infinite',
        'gradient': 'gradient 3s ease-in-out infinite',
        'shine': 'shine 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-10px)' },
        },
        'wave-reverse': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '49': '49',
      },
    },
  },
  plugins: [],
};
