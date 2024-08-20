/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        VarelaRound: ["Varela Round", "system-ui"],
        Segoe: ["Segoe UI", "sans-serif"],
      },
    },
    colors: {
      lightGray: "#E7E7E8",
      primary: "#1D9BF0",
      Hoverprimary: "#bae0fd",
    },
  },
  plugins: [],
};
