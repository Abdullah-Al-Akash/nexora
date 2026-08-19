// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenBright: '#44b51e',
        greenLight: '#83de22',
        blueDeep: '#0453d8',
        greenNeon: '#05ee2a',
        cyan: '#35cbe0',
        greenSoft: '#b7e26c',
        blueMedium: '#168cdb',
        greenDark: '#146217',
        cream: '#deedc8',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0453d8, #35cbe0)',
        'gradient-secondary': 'linear-gradient(135deg, #44b51e, #83de22)',
        'gradient-accent': 'linear-gradient(135deg, #05ee2a, #35cbe0)',
        'gradient-hero': 'linear-gradient(135deg, #0453d8, #05ee2a, #35cbe0)',
        'gradient-cta': 'linear-gradient(135deg, #44b51e, #05ee2a)',
      },
      animation: {
        'gradient-slow': 'gradientShift 15s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
    },
  },
  plugins: [],
}