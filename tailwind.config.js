/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pluralsight brand palette
        ps: {
          'inky-blue': '#130F25',
          pink: '#FF1675',
          'pink-dark': '#cc0f5f',
          purple: '#2a2753',
          'purple-gray': '#a5aacf',
          surface: '#F7F5F4',
          'lime-green': '#CFFF6E',
          'limited-green': '#40FFBF',
          blue: '#2AECFA',
          'ada-green': '#29826F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        pill: '999px',
      },
      boxShadow: {
        card: '0px 4px 8px rgba(0,0,0,0.08)',
        'card-hover': '0px 8px 24px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
};
