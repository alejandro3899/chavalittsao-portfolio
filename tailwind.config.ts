import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/slateToHtml.ts",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      colors: {
        "royal-purple": "#3D284F",
        "base-purple": "#765398",
        lavender: "#AAA1CE",
        lilac: "#D5D2F2",
        heather: "#7E6F9D",
        "deep-purple": "#534B6B",
        sand: "#F2F1ED",
        pebble: "#F2F1ED",
        grey: "#EAEBEA",
        neutral: "#E5E0CF",
        "dark-grey": "#444444",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        serif: ["var(--font-gt-alpina)"],
      },
      fontSize: {
        'xs': '0.8331rem', // 0.75rem + 1pt
        'sm': '0.9581rem', // 0.875rem + 1pt
        'base': '1.0831rem', // 1rem + 1pt
        'lg': '1.2081rem', // 1.125rem + 1pt
        'xl': '1.3331rem', // 1.25rem + 1pt
        '2xl': '1.5831rem', // 1.5rem + 1pt
        '3xl': '1.9581rem', // 1.875rem + 1pt
        '4xl': '2.3331rem', // 2.25rem + 1pt
        '5xl': '3.0831rem', // 3rem + 1pt
        '6xl': '4.0831rem', // 4rem + 1pt
      },
      backgroundImage: {},
      letterSpacing: {
        widest: "0.02625em", // 0.42px
        wider: "0.02em", // 0.32px
        wide: "0.0125em", // 0.2px
        tight: "-0.0125em", // 0.2px
        tighter: "-0.02em", // -0.2px
        tightest: "-0.02625em", // -0.42px
      },
      lineHeight: {
        snug: "1.4",
        tight: "1.2",
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
};
export default config;
