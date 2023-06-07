/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c9976',
      },
      width: {
        90: '90%',
      },
    },
  },
  plugins: [],
};
