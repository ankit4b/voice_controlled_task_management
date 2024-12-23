/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        island: ['"Island Moments"', "cursive"],
        abhaya: ['"Abhaya Libre"', "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
    },
  },
  plugins: [],
};
