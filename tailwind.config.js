module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class',
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif']
    },
    padding: "1rem",
    screens: {
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
