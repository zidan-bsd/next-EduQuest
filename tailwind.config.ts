import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-blur": "rgba(0, 0, 0, 0.4)",
      "Primary-clr": "#fcf4e7",
      "Secondary-clr": "#ffffff",
      "Dark-clr": "#161912",
      "Font-dark-clr": "#161912",
      "Font-accent-clr": "#4884d3",
      "Font-gray-clr": "#a3abb6",
      "Font-white-clr": "#ffffff",
      "Accent-clr": "#4884d3",
      "Accent-lght-clr": "#5996e3",
      "Accent-gray-clr": "#a3abb6",
      "Accent-gray-lght-clr": "#c4c8d0",
      "Accent-orange-clr": "#ecb440",
      "Accent-orange-lght-clr": "#f5c652",
      "Accent-red-clr": "#d24150",
      "Accent-red-lght-clr": "#e45260",
      "Accent-green-clr": "#87b84e",
      "Accent-green-lght-clr": "#9acc64",
    },
    extend: {
      screens: {
        "max-1200": { max: "1200px" },
        "max-886": { max: "886px" },
        "min-886": { min: "886px" },
        "max-697": { max: "697px" },
        "max-563": { max: "563px" },
      },
      boxShadow: {
        custom: "4px 4px 0px #161912",
        customHeader: "0px 4px 0px #161912",
        customFooter: "0px -4px 0px #161912",
      },
      borderWidth: {
        "3": "3px",
      },
      colors: {
        custom: {
          border: "#161912",
        },
      },
    },
  },
  plugins: [],
};
export default config;
