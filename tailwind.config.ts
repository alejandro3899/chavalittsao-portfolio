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
        "3xl": ["1.75rem", "2.25rem"],
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
    },
  },
  plugins: [],
};
export default config;
