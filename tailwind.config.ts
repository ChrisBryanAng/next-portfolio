import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "#5fb4a2",
        "primary-darkblue": "#203a4c",
        "primary-grayishdarkblue": "#33323d",
        "secondary-verylightgray": "#fafafa",
        "secondary-lightgray": "#eaeaeb",
        "secondary-brightred": "#f43030",
      },
      fontFamily: {
        Ibarra: ["Ibarra Real Nova", "serif"],
        "Public-sans": ["Public sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
