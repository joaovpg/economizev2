/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        black: {
          primary: "hsl(var(--black) / <alpha-value>)",
          secondary: "hsl(var(--black-secondary) / <alpha-value>)",
        },
        white: {
          primary: "hsl(var(--white) / <alpha-value>)",
          secondary: "hsl(var(--white-secondary) / <alpha-value>)",
        },
        gray: {
          primary: "hsl(var(--gray) / <alpha-value>)",
          secondary: "hsl(var(--gray-secondary) / <alpha-value>)",
        },
        primary: {
          50: "hsl(var(--primary-50) / <alpha-value>)",
          100: "hsl(var(--primary-100) / <alpha-value>)",
          200: "hsl(var(--primary-200) / <alpha-value>)",
          300: "hsl(var(--primary-300) / <alpha-value>)",
          400: "hsl(var(--primary-400) / <alpha-value>)",
          500: "hsl(var(--primary-500) / <alpha-value>)",
          600: "hsl(var(--primary-600) / <alpha-value>)",
          700: "hsl(var(--primary-700) / <alpha-value>)",
          800: "hsl(var(--primary-800) / <alpha-value>)",
        },
        secondary: {
          50: "hsl(var(--secondary-50) / <alpha-value>)",
          100: "hsl(var(--secondary-100) / <alpha-value>)",
          200: "hsl(var(--secondary-200) / <alpha-value>)",
          300: "hsl(var(--secondary-300) / <alpha-value>)",
          400: "hsl(var(--secondary-400) / <alpha-value>)",
          500: "hsl(var(--secondary-500) / <alpha-value>)",
          600: "hsl(var(--secondary-600) / <alpha-value>)",
          700: "hsl(var(--secondary-700) / <alpha-value>)",
          800: "hsl(var(--secondary-800) / <alpha-value>)",
        },
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
