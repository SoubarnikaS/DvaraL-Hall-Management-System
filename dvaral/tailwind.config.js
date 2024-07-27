// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         'dancing-script': ['"Dancing Script"', 'cursive'],
//         'acme': ['"Acme"', 'sans-serif'],
//         'poppins': ['"Poppins"', 'sans-serif'],
//         'merienda': ['"Merienda"', 'cursive'],
//       },
//     },
//   },
//   plugins: [],
// });

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
                'dancing-script': ['"Dancing Script"', 'cursive'],
                'acme': ['"Acme"', 'sans-serif'],
                'poppins': ['"Poppins"', 'sans-serif'],
                'merienda': ['"Merienda"', 'cursive'],
                'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
              },
    },
  },
  plugins: [],
}