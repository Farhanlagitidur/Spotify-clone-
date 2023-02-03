/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spotifybold': ['Spotify1', 'sans-serif'],
        'spotifylight': ['Spotify2', 'sans-serif'],
        'spotifythin':['Spotify3', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
