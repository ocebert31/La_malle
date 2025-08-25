module.exports = {
  content: ["./src/**/**/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary : "#5941FF",
        secondary : "#FF915D"
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

