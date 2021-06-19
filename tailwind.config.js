module.exports = {
  purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        sm: "0 2px 2px 0 #000000",
      },
      fontFamily: {
        display: ["Boutros"],
        body: ["Boutros"],
      },
      colors: {
        "silver-tree": {
          DEFAULT: "#77BFA3",
          50: "#C4C4C4",
          100: "#F9F9F9",
          200: "#DFF0E9",
          300: "#BCE0D2",
          400: "#9ACFBA",
          500: "#77BFA3",
          600: "#54AF8C",
          700: "#438D70",
          800: "#326B55",
          900: "#224839",
        },
        "beryl-green": {
          DEFAULT: "#DDE7C7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#D6EAD4",
          300: "#E3F1E2",
          400: "#F3F6EB",
          500: "#DDE7C7",
          600: "#C7D8A3",
          700: "#B2C880",
          800: "#9CB95C",
          900: "#829E44",
        },
        "tahuna-sands": {
          DEFAULT: "#EDEEC9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FAFAF0",
          500: "#EDEEC9",
          600: "#E0E2A2",
          700: "#D3D67B",
          800: "#C6C955",
          900: "#AFB338",
        },
        "pale-leaf": {
          DEFAULT: "#BFD8BD",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FDFEFD",
          400: "#DEEBDD",
          500: "#BFD8BD",
          600: "#A0C59D",
          700: "#81B27D",
          800: "#629E5E",
          900: "#4E7E4B",
        },
        "spring-rain": {
          DEFAULT: "#98C9A3",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FCFEFD",
          300: "#DBECDF",
          400: "#B9DBC1",
          500: "#98C9A3",
          600: "#77B785",
          700: "#56A568",
          800: "#458353",
          900: "#2F8161",
        },
        red: {
          DEFAULT: "#FF0000",
          50: "#FFE5E5",
          100: "#FFCCCC",
          200: "#FF9999",
          300: "#FF6666",
          400: "#FF3333",
          500: "#FF0000",
          600: "#CC0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
