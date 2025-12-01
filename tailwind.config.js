/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8e9f1',
        secondary: '#ffffff',
        accent: 'gold',
        text: '#000000',
        'rose-gold': '#B76E79',
        'emerald-green': '#006400',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(255, 215, 0, 0.3)',
      }
    },
  },
  plugins: [],
}