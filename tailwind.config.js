/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#028090',
        secondary: '#00A896',
        accent: '#02C39A',
        dark: '#014F5A',
        light: '#E8F4F5',
      },
    },
  },
  plugins: [],
}
