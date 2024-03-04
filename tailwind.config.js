/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        div: "0 0 2rem 0 rgba(136, 152, 170, 0.75)",
      },
    },
  },
  plugins: [],
};
