/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',"./src/**/*.{html,js}"],
  theme: {
    colors:{
      primary:'#e94560',

    },
    extend: {},
  },
  plugins: [require("daisyui"),('flowbite/plugin')],
  
}