/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        island: ['"Island Moments"', "cursive"],
        abhaya: ['"Abhaya Libre"', "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
