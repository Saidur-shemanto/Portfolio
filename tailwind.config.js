/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customCyan: "#5FF1D0",
        mildWhite: "#8892B0",
        almostWhite: "#CCD6F6",
      },
      cursor: {
        salute: "url(./src/assets/media/cursor/emoji.png), pointer",
      },
    },
    fontFamily: {
      Oxanium: ["Oxanium", "sans-serif"],
      SfMono: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
