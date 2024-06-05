/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          bug: "#91a119",
          dark: "#50413f",
          dragon: "#5061e1",
          electric: "#fac000",
          fairy: "#ef71ef",
          fighting: "#ff8000",
          fire: "#e62829",
          flying: "#81b9ef",
          ghost: "#704170",
          grass: "#3fa129",
          ground: "#915121",
          ice: "#3fd8ff",
          normal: "#9fa19f",
          poison: "#8f41cb",
          psychic: "#ef4179",
          rock: "#afa981",
          steel: "#60a1b8",
          water: "#2980ef",
        },
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  safelist: [{
    pattern: /(bg|text|border)-pokemon-(bug|dark|dragon|electric|fighting|fire|flying|ghost|grass|ground|ice|normal|poison|psychic|rock|steel|water)/
  }]
}

