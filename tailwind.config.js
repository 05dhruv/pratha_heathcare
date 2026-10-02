/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#122336",
        primary: "#dc2626", // Logo crimson red
        deep: "#122336", // Medical deep navy
        marigold: "#dc2626", // Logo red accent replaces old amber
        warning: "#dc2626",
        crimson: "#dc2626",
        sage: {
          50: "#f0f8f4",
          100: "#e0f2ea",
          200: "#c2e6d6",
          300: "#9ecbb7", // Exact logo background tint
          500: "#3d8868",
          600: "#2d6a50",
          700: "#22533e",
        },
        royal: "#1e4b88", // Logo figure outline blue
        leaf: "#2d6a50",
        mist: "#f4f9f6",
        line: "#e2e8f0",
      },
      fontFamily: {
        display: ["Oswald", "var(--font-display)", "sans-serif"],
        body: ["Lato", "var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
