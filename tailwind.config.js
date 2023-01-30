/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spotifybold': ['Spotify1', 'sans-serif'],
        'spotifythin': ['Spotify2', 'sans-serif'],
        'spotifylight':['Spotify3', 'sans-serif']
      }
    },
  },
  plugins: [],
}
