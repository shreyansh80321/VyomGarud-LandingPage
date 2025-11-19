/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "page-light": "#f4f6fb",
        "text-light": "#1a1a1a",
        "card-light": "#ffffff",

        // Dark mode colors
        "page-dark": "#0c0f16",
        "text-dark": "#e6e6e6",
        "card-dark": "#1a1f2b",
      },
      backgroundImage: {
        "page-gradient-dark":
          "linear-gradient(160deg,#10121b 0%,#0c0f16 50%,#080a10 100%)",
        "page-gradient-light":
          "linear-gradient(160deg,#ffffff,#f7f7f7,#efefef)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
