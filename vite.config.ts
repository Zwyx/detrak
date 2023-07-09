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
			// We'll probably need that for the fonts
			// workbox: {
			// 	globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
			// },
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
