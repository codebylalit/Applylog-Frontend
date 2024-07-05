/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#2b2b2b",
          200: "rgba(43, 43, 43, 0.4)",
          300: "rgba(255, 255, 255, 0.2)",
          400: "rgba(255, 255, 255, 0)",
          500: "rgba(255, 255, 255, 0.4)",
        },
        plum: "#bfaff2",
        cornflowerblue: "#8c7dbf",
        darkslategray: "#333",
        white: "#fff",
        yellow: "#f8d57e",
        darkkhaki: "#debd63",
        cornsilk: "#fdf5df",
        ghostwhite: "#f2effc",
        "primary-colour-dark-grey": "#3b3b3b",
      },
      spacing: {},
      fontFamily: {
        "body-18": "Poppins",
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        mini: "15px",
        "81xl": "100px",
        xl: "20px",
        "2xs-5": "10.5px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
