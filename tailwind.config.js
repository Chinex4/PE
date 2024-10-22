/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'Arial', 'sans-serif'], // Fallback to Arial if Helvetica isn't available
			},
			colors: {
				primary: '#F4A261',
				navGray: '#7A7A7A',
				smileyblue: '#023047',
			},
		},
	},
	plugins: [require('daisyui')],
	themes: ['light', 'dark', 'cupcake', 'black'],
};
