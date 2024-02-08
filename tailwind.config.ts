import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'cssBreak': '900px',
    },
    extend: {
      colors: {
        'primary': '#d7a87d',
      },
    },
  },
  plugins: [],
};
export default config;
