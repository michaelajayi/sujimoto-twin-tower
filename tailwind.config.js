/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        themeOrange: "#FF7A00",
      },
      fontFamily: {
        "koh-santepheap": ["Koh Santepheap", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "hero-bg": "url('assets/img/hero-bg.jpg')",
        "lion-head-bg": "url('assets/img/lion-head.svg')",
      }),
      brightness: {
        25: ".25",
        175: "1.75",
      },
    },
  },
  plugins: [],
};
