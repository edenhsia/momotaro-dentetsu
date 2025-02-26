/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#e9207e',
        background: '#fff5e1',
        blue: '#0d70fa',
        yellow: '#ffb300',
        green: '#1abd38',
      },
    },
  },
  plugins: [],
}
