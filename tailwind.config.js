/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // gridTemplateColumns: {
    //   hero: "34rem 1fr",
    //   footer: "1fr 1fr",
    // },
    colors: {
      "primary-blue-100": "#AAC0ED",
      "primary-blue-200": "#8CADF2",
      "primary-blue-400": "#004AE2",
      "primary-blue-800": "#00194B",
      "primary-blue-900": "#000F2D",
      "secondary-black": "#272727",
      "secondary-gray-200": "#E8EFFC",
      "secondary-white": "#fefefe",
    },
    fontFamily: {
      anonymous: ["Anonymous Pro", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
