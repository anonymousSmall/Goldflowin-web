import { plugin } from 'postcss'
import { fadeIn } from 'src'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "450px"
      },
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      }

      // colors: {
      //   primary: "#f42c37",
      //   secondary: "#f42c37",
      //   brandYellow: "#fdc62e",
      //   brandGreen: "#2dcc6f",
      //   brandBlue: "#1376f4",
      //   brandWhite: "#eeeeee",
      //   cordesblue: '#1e40af',
      //   cordesdark: '#1e293b',
      //   cordeslight: '#f8fafc',
      //   cordesaccent: '#3b82f6'
      // },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: "1rem",
      //     sm: "3rem"
      //   },
      // },
    },
    animation: {
      fadeIn: "fadeIn 0.6s ease-out forwards",
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
  plugins: [],
}

