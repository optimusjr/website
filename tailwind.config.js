/** @type {import('tailwindcss').Config} */

export default {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
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
        50: "#f5f5f5",
        100: "#e9e9e9",
        200: "#d9d9d9",
        300: "#c4c4c4",
        400: "#9d9d9d",
        500: "#7b7b7b",
        600: "#555555",
        700: "#434343",
        800: "#262626",
        900: "#000000", // Cor da tipografia
      },
    },
  },
  plugins: [],
};
