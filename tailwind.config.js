/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#edfcfc',
          100: '#d2f5f7',
          200: '#abeaef',
          300: '#72d8e3',
          400: '#31bdce',
          500: '#169fb3',
          600: '#158097',
          700: '#17677b',
          800: '#1b5565',
          900: '#1b4756',
          950: '#0c2d3a',
        },
        navy: {
          800: '#0f1a2e',
          900: '#0a1120',
          950: '#060b14',
        },
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
