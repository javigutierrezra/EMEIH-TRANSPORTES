/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          redHover: '#B91C1C',
          redDark: '#991B1B',
          black: '#09090B',
          blackLight: '#18181B',
          blackCard: '#27272A',
          gray: '#71717A',
          lightBg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
