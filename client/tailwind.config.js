/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "spin-slow": "spin 5s linear infinite",
      "spin-slow-reverse": "spin 5s linear infinite reverse",
    },
  },
  plugins: [],
};
