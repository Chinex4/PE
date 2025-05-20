/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		animation: {
			marquee: 'marquee 12s linear infinite',
		},
		keyframes: {
			marquee: {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(-50%)' },
			},
		},
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
