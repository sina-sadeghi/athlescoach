/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
      "./src/**/*.{html,js,jsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
  ],
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: colors.current,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      emerald: colors.emerald,
      violet: colors.violet,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      yellow: colors.yellow,
      "background": "#E4F9F5",
      "border": "#30E3CA",
      "third_color": {
        "light": "#21a9aE",
        DEFAULT: "#11999E"
      },
      "text": {
        "light": "#50615E",
        DEFAULT: "#40514E"
      },
    }
  },
}