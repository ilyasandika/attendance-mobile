/** @type {import('tailwindcss').Config} */

import { platformSelect } from 'nativewind/theme';

module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],

    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                primary: '#273240',
            },
            fontFamily: {
                sans: ['Quicksand'], // ini default
                quick: ['Quicksand'], // alias
                'quick-light': ['Quicksand-Light'],
                'quick-medium': ['Quicksand-Medium'],
                'quick-semibold': ['Quicksand-SemiBold'],
                'quick-bold': ['Quicksand-Bold'],
            },
        },
    },
    plugins: [],
};
