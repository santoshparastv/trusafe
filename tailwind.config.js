// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#8B1538',
          blue: '#1E3A8A',
        },
        secondary: {
          blue: '#3B82F6',
        },
        accent: {
          yellow: '#FFD700',
        },
        dark: '#1F2937',
        light: '#F3F4F6',
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          700: '#374151',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
