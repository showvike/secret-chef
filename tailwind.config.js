/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-01": "#212529",
      },
      backgroundImage: {
        "join-us": "url('./src/assets/join-us.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
