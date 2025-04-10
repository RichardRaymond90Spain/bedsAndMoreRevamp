import type { Config } from "tailwindcss"

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: {
        primary: '#B19B9B',
        secondary: '#1a1a1a',
      },
  	},
  },
  plugins: [],
};
export default config;
