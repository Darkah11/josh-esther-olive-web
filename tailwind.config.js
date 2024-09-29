/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#000000",
        primary: "#D5A401",
        bgNude: "rgba(217, 217, 217, 0.3)",
        placeText: "rgba(12, 9, 2, 0.7)",
        bgGray: "rgba(231, 231, 231, 1)",
        border: "rgba(186, 185, 185, 1)",
      },
    },
  },
  plugins: [],
};
