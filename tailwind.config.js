/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind which files to scan for class names
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Custom palette: "abyss" = deep sea blues (dominant), "mist" = soft pale blues for text/buttons
      colors: {
        abyss: {
          950: '#010a18',
          900: '#020f24', // main page background
          800: '#041a3a', // cards, photo plate
          700: '#07295a', // bars, image areas
          600: '#0b3a7a', // active nav pill, borders
          500: '#1457a8', // soft outlines
        },
        mist: {
          100: '#e6f0fb', // main text, primary button
          300: '#a9c4e4', // secondary text, accents
          500: '#6f92bd', // muted text
        },
      },
      // Custom font families that use the Google Fonts loaded in index.html
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      // Keyframes = the steps of an animation
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Turns keyframes into usable classes: animate-rise, animate-float, animate-orbit
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        float: 'float 7s ease-in-out infinite',
        orbit: 'spin 36s linear infinite',
      },
    },
  },
  plugins: [],
};
