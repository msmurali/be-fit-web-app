/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        "primary-dark": "#0E0E0E",
        "primary-light-bg": "#282828",
        "primary-light-fg": "#808080",
        secondary: "#1677FF",
        "secondary-dark": "#002E6F",
      },
      backgroundImage: {
        "hero-section":
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent), url('/src/assets/images/hero-section-img.png')",
      },
      backgroundSize: {
        "100%": "100%",
        "150%": "150%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
