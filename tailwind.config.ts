import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:"#12203D",
        offwhite:"#DBDAD5",
        gold:"#AF8344"
      },
      fontFamily:{
        GeneralSans:"General Sans",
        Montserrat:"Montserrat",
        InstrumentSerif:"Instrument Serif"
      }
    },
  },
  plugins: [],
};
export default config;
