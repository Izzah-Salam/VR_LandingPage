/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(246,147,17,1) 0%, rgba(214,98,10,1) 35%)",
      },
      colors: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(246,147,17,1) 0%, rgba(214,98,10,1) 35%)",
      },
      boxShadow: {
        "box-shadow": "-2px 2px 5px 0px rgba(54,49,49,0.75)",
      },
    },
  },
  plugins: [],
};
