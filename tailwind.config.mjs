/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['bg-purple'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#fff5e1',
          dark: '#e1ccb1',
          darker: '#d9b094',
        },
        primary: {
          DEFAULT: '#e9207e',
          dark: '#c31c6f',
        },
        blue: {
          DEFAULT: '#0062fa',
          dark: '#1c3296',
        },
        red: {
          DEFAULT: '#ec3945',
          dark: '#851632',
        },
        yellow: {
          DEFAULT: '#e8a83a',
          dark: '#8e5630',
        },
        green: {
          DEFAULT: '#6aa52d',
          dark: '#34551f',
        },
        purple: {
          DEFAULT: '#7851a9',
        },
        gray: {
          DEFAULT: '#57534e',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
