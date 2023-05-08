const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: "jit",
    content: [
        './src/pages/**/*.astro',
        './src/components/**/**/*.{js,ts,jsx,tsx,astro}',
        './src/constants/**/*.{js,ts,jsx,tsx,astro}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Montserrat',
                ...defaultTheme.fontFamily.sans,
            },
        },
        // colors: {
        //   gray: { DEFAULT: "#b9b9b9" },
        //   slate: { DEFAULT: "#3e3e3e" },
        // },
        // extend: {},
    },
    plugins: [],
}
