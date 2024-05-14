/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e9f6e',
        secondary: '#e5e7eb',
        title: '#031200',
        text: '#4B5563'
      }
    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
      },
      pulse: {
        '0%': { opacity: '100%' },
        '50%': { opacity: '70%' },
        '100%': { opacity: '100%' },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}