/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				naranja: "#f1bf98",
				verdeLima: "#e1f4cb",
				verdeCrema: "#F2F6D0",
				verdeSeco: "#bacba9",
				verdeGris: "#717568",
				verdeOscuro: "#344e41",
				oro: "#D4AF37",
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'], 
				poppins: ['Poppins', 'sans-serif'], 
			},
			fontSize: {
				'1xl': '1.25rem', // Define el tamaño personalizado de fuente
			  },
		},
	},
	plugins: [],
}
