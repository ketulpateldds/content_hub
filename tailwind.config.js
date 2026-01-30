/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00A8AB",
        "deep-black": "#0B0D12",
        "soft-black": "#12141A",
        "slate-gray": "#1C1F26",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B8BDC7",
      },
      screens: {
        sm: "390px", // Mobile
        md: "744px", // Tablet
        lg: "1512px", // Desktop
      },
      maxWidth: {
        mobile: "358px", // Mobile content width
        tablet: "696px", // Tablet content width
        desktop: "1320px", // Desktop content width
      },
    },
  },
  plugins: [],
};
