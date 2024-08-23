/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        primary: "#2BD17E",
        error: "#EB5757",
        card: "#092C39",
        cardhover: "#0829357a",
      },
    },
  },
  plugins: [],
};
