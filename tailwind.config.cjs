/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#10141E",
        "semi-dark-blue": "#161D2F",
        "accent-blue": "#00c0cb",
      },
    },
  },
  plugins: [],
};
