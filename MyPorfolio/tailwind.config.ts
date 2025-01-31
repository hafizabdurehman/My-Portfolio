import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode via 'class'
  
  theme: {
    extend: {

      animation: {
        'bounce': 'bounce 1s infinite',
        'blink': 'blink 1s step-end infinite',
      },

      container: {
        center: true,
        padding: "15px"

    
      },
      colors: {
      "dark" : '#232A3C',
      "medium" : '#293245',
      },

      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

