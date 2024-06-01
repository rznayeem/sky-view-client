/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        teko: '"Teko", sans-serif;',
        manrope: '"Manrope", sans-serif;',
      },
    },
  },
  plugins: [require('daisyui')],
};
