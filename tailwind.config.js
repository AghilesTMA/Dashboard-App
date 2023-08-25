/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "Primary-dark-bg":"#151928",
        "Primary-dark-element":"#2f3f5c",
        "Primary-light-bg":"#fafafa",
        "Primary-light-element":"#e0dedf",
        "Neutral-green":"#44b98e",
        "Neutral-blue":"#9b98f2"
      },
      screens:{
        "tablet": "450px",
        "desktop":"1020px"
      }
    },
  },
  plugins: [],
  darkMode: 'class',  
};
