/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inder: ["Inder", "sans-serif"],
        fell: ["IM FELL Double Pica", "serif"], // Add Inder font
      },
    },
  },
  plugins: [],
};
