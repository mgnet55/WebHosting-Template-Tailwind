module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-lilac": "#8340D2",
        "custom-red": "#FA5959",
        "custom-blue": "#4C1E51",
        "custom-grey": "#9194A2",
        "custom-white": "#f7f7f7",
        "custom-bg": "#2D0A31",
      },
    },
    fontFamily: {
      'Poppins': ["Poppins","sans-serif"],
    },
    container : {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    }
  },
  plugins: [],
}
