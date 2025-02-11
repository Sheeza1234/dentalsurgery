import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ".assests",
  ],
  extend: {
    animation: {
      'moving-circle': 'move 3s infinite linear',
    },
    keyframes: {
      move: {
        '0%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(50px)' },
        '100%': { transform: 'translateX(0)' },
      },
      fontFamily: {
        abnes: ['Abnes', 'sans-serif'],
        OptimaModoki:['OptimaModoki','sans-serif'],
        Inter:['Inter','sans-serif'],
        Inters:['Inters','sans-serif'],
        OptimaModokiKhmer:['OptimaModokiKhmer','sans-serif']


      },
    },
  },
  
  plugins: [],
} satisfies Config;
