import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			devOptions: {
				enabled: true,
			},
			registerType: "prompt",
			manifestFilename: "manifest.json",
			manifest: {
				name: "Detrak",
				short_name: "Detrak",
				description: "The Detrak dice game",
				theme_color: "#020817",
				background_color: "#020817",
				icons: [
					{
						src: "manifest-icon-192.maskable.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "manifest-icon-192.maskable.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "manifest-icon-512.maskable.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "manifest-icon-512.maskable.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
			// Keep an eye on the progress of PWA support in Safari, and remove all the Apple non-sense when we can
			includeAssets: ["favicon-196.png", "apple-icon-180.png"],
			workbox: {
				globPatterns: ["**/*.{js,css,html,woff,woff2}"],
			},
		}),
	],
	resolve: {
		alias: [
			{
				find: "~",
				replacement: "/src",
			},
		],
	},
	build: {
		outDir: "docs",
	},
});
