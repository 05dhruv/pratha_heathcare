/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c3e50", // Flatly navbar/primary color
        primary: "#2c3e50",
        deep: "#1a252f",
        marigold: "#f39c12", // Flatly warning/gold accent
        warning: "#f39c12",
        leaf: "#18bc9c",
        mist: "#f8f9fa",
        line: "#ecf0f1",
      },
      fontFamily: {
        display: ["Oswald", "var(--font-display)", "sans-serif"],
        body: ["Lato", "var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
