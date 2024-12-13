/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
       colors:{
        colors:{
          primary: "#720202",
          Red: "#F2F400",
          third: "#ccab01"
         },
       },
       fontFamily:{
        'Manrope': ["Manrope", "sans-serif"],
        'Vollkorn': ["Vollkorn", "serif"],
       },
       content:{
        link: "url(/dist/CGC/drop-down.png)"
       },
       height: {
        '75vh': '75vh',
        '90vh': '90vh',
      },
      width:{
        '100%': '100%'
      },
    },
  },
  plugins: [],
}

