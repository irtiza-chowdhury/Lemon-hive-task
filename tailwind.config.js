const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        "light-green": "#9BCC50",
        "purple" : "#B97FC9",
        "black" : "#000000",
        "orange" : "#FC7C23",
        "light-blue" : "#4592C4",
        "blue" : "#257BC4",
        "sky-blue" : "#3DC7EF",
        "deep-blue" : "#2B73B9",
        "white" : "#ffffff",
        "gray" : "#BDBDBD",
        "pink" : "#F366B9",
        "yellow" : "#FFCB05",
        
      },
      fontSize:{
        sm: ["14px", "16px"],
        base: ["16px", "18px"],
        lg: ["20px", "23px"],
        xl: ["48px", "55px"],
        large:["24px", "28px"]
      },
      screens :{
        'mobile' : '591px',
        'tab' : '813px',
        'laptop' : '1260px',
        'extra'  : '1390px',
      }
    },
  },
  plugins: [],
}
