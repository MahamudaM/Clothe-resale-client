/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        usedClothe:{
          primary: "#f64c72",    
     secondary: "#19D3AE",
     success: "#36D399",
    accent: "#3A4256",
              
     neutral: "#3D4451",
              
     "base-100" : "#FFFFFF",
        }
      }
    ]
      },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
