/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
    },
    screens: {
      mobile: "600px",
      tablet: "800px",
      desktop: "1024px",
    },
  },
  plugins: [],
};
