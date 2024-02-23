/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {},
            animation: {
                'zoom-in': 'zoom-in 0.5s',
                'zoom-out': 'zoom-in 0.5s',
            },
            keyframes: {
                'zoom-in': {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                },
                'zoom-out': {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
            },
        },
        fontFamily: {
            sans: ['Poppins'],
            montserrat: ['Montserrat'],
            inter: ['Inter'],
        },
    },
    plugins: [],
};
