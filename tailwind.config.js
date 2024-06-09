const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ImgBg: "url('/ImgBg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        "primary-content": "var(--primary-content)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",

        secondary: "var(--secondary)",
        "secondary-content": "var(--secondary-content)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-light": "var(--secondary-light)",

        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",

        copy: "var(--copy)",
        "copy-light": "var(--copy-light)",
        "copy-lighter": "var(--copy-lighter)",

        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",

        "success-content": "var(--success-content)",
        "warning-content": "var(--warning-content)",
        "error-content": "var(--error-content)",
      },
    },
  },
  plugins: [],
});
