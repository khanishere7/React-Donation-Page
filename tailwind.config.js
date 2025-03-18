/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DD4C00',
          50: '#FFE9E0',
          100: '#FFD1BC',
          200: '#FFA880',
          300: '#FF8044',
          400: '#FF6011',
          500: '#DD4C00',
          600: '#B33D00',
          700: '#8A2F00',
          800: '#612100',
          900: '#381300',
        },
      },
    },
  },
  plugins: [],
};