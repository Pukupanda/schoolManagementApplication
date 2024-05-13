const { green } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        sm:{
          green:'#5BCE60',
          green100:'#ccf0ce',
          darkblue:'#1B2835',
          blue:'#1d5478',
          lightblue:'#3498DB',
          lblue500:'#3498db',
          lblue600:'#2f8ac7',
          blue700:'#256c9b',
          lblue800:'#1d5478',
          lblue900:'#16405c',
          black8:'#595959',
          gray:'#d9d9d9',
          green200:'#5BCE60',
          lgreen:'#d3eed1',
          black4:'#f0f0f0'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
