/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#123A63',
          light: '#1A4D7A',
          dark: '#0C2A49',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D9BC74',
          dark: '#A8873A',
        },
        cream: {
          DEFAULT: '#FBF4E9',
          dark: '#EDE9E0',
        },
        charcoal: '#1B1D22',
        muted: '#6C727F',
        surface: '#F0F4FA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '16px',
        'full': '9999px',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
