/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": {
          50: "#e9fcff",
          100: "#cef7ff",
          200: "#a7f3ff",
          300: "#6bf1ff",
          400: "#26e2ff",
          500: "#00bfff",
          600: "#0095ff",
          700: "#007aff",
          800: "#006ae6",
          900: "#005db3",
          950: "#003a6c",
        },
      },
    },
  },
  plugins: [],
};
