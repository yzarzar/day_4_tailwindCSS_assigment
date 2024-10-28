/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        orange: 'var(--orange)',
        gray: 'var(--gray)',
      },
      height: {
        custom: "calc(100vh - 55px)"
      }
    },
  },
  plugins: [],
};
