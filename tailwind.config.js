/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.astro',
        './src/components/**/**/*.{js,ts,jsx,tsx,astro}',
        './src/constants/**/*.{js,ts,jsx,tsx,astro}',
    ],
    prefix: '',
    theme: {
        extend: {
            fontFamily: {
                sans: 'Montserrat',
            },
        },
    },
    plugins: [],
}
