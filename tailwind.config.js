/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        banner: "url('/src/assets/images/banner-background.svg')",
      },
      colors: {
        green_1: "#234d20",
        green_2: "#367f2d",
        green_3: "#77ab59",
        green_4: "#c9df8a",
        green_5: "#f1f7db ",
        green_6: "#e4e4e4 ",
        green_7: "#548239 ",
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', "serif"],
        alata: ["Alata", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        nunitoSans: ['"Nunito Sans"', "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
        openSansHebrew: ['"Open Sans Hebrew"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        1: "0 -1rem 5rem rgba(0,0,0,.1)",
        custom: "0 -1rem 5rem rgba(0,0,0,.2)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
