/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flareBackground: {
        'my-image': "url('./src/assests/purple-flare.png')",
      },
    },
  },
  plugins: [],
}