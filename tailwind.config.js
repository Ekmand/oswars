/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'slow-spin 60s linear infinite',
      },
    },
  },
  plugins: [],
};