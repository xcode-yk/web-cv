/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAF8F5',
        'bg-secondary': '#E8DDD3',
        'bg-card': '#F5E6D3',
        'surface': '#FFFFFF',
        'text-primary': '#191716',
        'text-secondary': '#747069',
        'accent': '#993A14',
        'accent-hover': '#7D2F10',
        'accent-light': '#C44D2B',
        'sage': '#6B8F71',
        'amber': '#D4A853',
        'coral': '#C75B5B',
        'border': '#E5DDD3',
        'glass-border': 'rgba(255, 255, 255, 0.5)',
        'glass-bg': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        'xl': '16px',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'accent-glow': '0 0 12px 2px rgba(153, 58, 20, 0.3)',
      },
    },
  },
  plugins: [],
}
