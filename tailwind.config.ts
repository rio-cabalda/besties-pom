/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-400' : '400px'
      },
      wiggleFrame: {
        "0%": {
          transform: 'rotate(-5deg)'
        },
        "50%": {
          transform:' rotate(5deg)'
        },
        "100%": {
          transform: 'rotate(-5deg)'
        },
      },
      animation: {
        wiggle: 'wiggleFrame 1s ease-in-out infinite',
        },
    },
    
  },
  plugins: [],
}

