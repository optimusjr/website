import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  blocklist: ["container"],
  theme: {
    extend: {
      borderWidth: {
        1: 1,
      },
      lineHeight: {
        0: 0,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["var(--font-league-spartan)"],
    },
    screens: {
      "4xs": "384px",
      // "3xs": "448px",
      // "2xs": "512px",
      // xs: "576px",
      ...defaultTheme.screens,
      // "3xl": "1792px",
      "4xl": "2048px",
    },
    colors: {
      transparent: "transparent",
      black: "#111", // A cor da tipografia do logo é #000, mas optamos por usar no site um preto mais suave
      white: "#fafafa",
      primary: {
        50: "#e0f1eb",
        100: "#b3dccd",
        200: "#83c5ae",
        300: "#56ae8f",
        400: "#389d7a",
        500: "#248c67",
        600: "#207f5c",
        700: "#1a704e",
        800: "#136041", // Verde OPTIMUS
        900: "#084529",
      },
      secondary: {
        50: "#e5f5ed",
        100: "#c1e5d3",
        200: "#99d4b8",
        300: "#6fc59d",
        400: "#4db889",
        500: "#23ac75",
        600: "#1d9d6a", // Background recomendado
        700: "#178b5d",
        800: "#147a51",
        900: "#115a3b",
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      red: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        a100: "#ff8a80",
        a200: "#ff5252",
        a400: "#ff1744",
        a700: "#d50000",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".animate-slide-top": {
          animation: "slide-top 0.4s 0.4s ease-in-out forwards",
          transform: "translateY(-100%)",
        },

        "@keyframes slide-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },

        ".animate-fade-in": {
          animation: "fade-in 0.4s ease-in-out forwards",
        },

        "@keyframes fade-in": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      });
    }),
  ],
};
