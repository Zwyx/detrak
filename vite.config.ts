import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			devOptions: {
				// enabled: true,
			},
			registerType: "prompt",
			manifestFilename: "manifest.json",
			manifest: {
				name: "Detrak",
				short_name: "Detrak",
				description: "The Detrak dice game",
				categories: ["game", "casual game", "dice game"],
				display: "standalone",
				theme_color: "#0f1c2e",
				background_color: "#0f1c2e",
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
				screenshots: [
					{
						src: "en-light-landscape.webp",
						sizes: "1920x1080",
						type: "image/webp",
						form_factor: "wide",
					},
					{
						src: "en-light-portrait.webp",
						sizes: "1081x2340",
						type: "image/webp",
						form_factor: "narrow",
					},
				],
			},
			includeAssets: ["favicon-196.png", "apple-icon-180.png"],
			workbox: {
				globPatterns: ["**/*.{js,css,html,woff,woff2}"],
			},
		}),
		sentryVitePlugin({
			org: "zwyx",
			project: "detrak",
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
		sourcemap: true, // Sourcemaps are sent to Sentry but not included in the bundle
	},
});
