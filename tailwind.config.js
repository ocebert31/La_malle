module.exports = {
  content: ["./src/**/**/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary : "#7a6bfc",
        secondary : "#a6d947"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        'xs': {'max': '350px'},
        's': {'max': '380px'},
        'med': {'max': '550px'},
        'max-md': {'max': '768px'},
      },
    },
  },
  plugins: [],
}

