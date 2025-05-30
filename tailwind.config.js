/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
        },
        colors: {
          legendary: {
          50: '#e3f9fb',
          100: '#c0f0f5',
          200: '#9ce6ee',
          300: '#79dce8',
          400: '#56d3e2',
          500: '#18AEBF', 
          600: '#149baa',
          700: '#107e8b',
          800: '#0c616c',
          900: '#08344b',
          DEFAULT: '#18AEBF',
        },
        "gray-bg": '#101010',
        "lightGray-bg": '#252525',
        "gray-text": '#838383',
        "white-text": '#B0B0B0',
        }
      },
    },
  plugins: [],
};
