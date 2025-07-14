/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      screens: {
        vsm: { raw: "(min-height: 640px)" },
        vmd: { raw: "(min-height: 768px)" },
        vlg: { raw: "(min-height: 1024px)" },
        vxl: { raw: "(min-height: 1280px)" },
        v2xl: { raw: "(min-height: 1536px)" },
        smv: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
