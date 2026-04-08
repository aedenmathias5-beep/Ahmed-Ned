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
          DEFAULT: '#1E1B2E',
          light: '#2D2856',
          dark: '#13111F',
        },
        gold: {
          DEFAULT: '#E5A849',
          light: '#F0C06E',
          dark: '#C48E2A',
        },
        coral: {
          DEFAULT: '#FF6B35',
          light: '#FF8F66',
          dark: '#E05520',
        },
        teal: {
          DEFAULT: '#0D9488',
          light: '#2DD4BF',
          dark: '#0A7A70',
        },
        cream: {
          DEFAULT: '#FFFAF5',
          dark: '#FFF0E6',
        },
        charcoal: '#2D2B3A',
        muted: '#7C7A8A',
        surface: '#F7F3EF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '28px',
        'full': '9999px',
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        'artistic': '0 8px 40px -12px rgba(30, 27, 46, 0.15)',
        'artistic-lg': '0 20px 60px -15px rgba(30, 27, 46, 0.2)',
        'glow-coral': '0 0 40px rgba(255, 107, 53, 0.15)',
        'glow-teal': '0 0 40px rgba(13, 148, 136, 0.15)',
        'glow-gold': '0 0 40px rgba(229, 168, 73, 0.2)',
      },
    },
  },
  plugins: [],
}
