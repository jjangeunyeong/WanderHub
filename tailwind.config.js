/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c9976',
        kakao: '	#fddc3f',
      },
      width: {
        90: '90%',
      },
      margin: {
        large: '60px',
      },
    },
  },
  plugins: [],
};
