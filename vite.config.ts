import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

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
				handle_links: "preferred",
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
				globIgnores: ["locales/*.js"],
				runtimeCaching: [
					{
						urlPattern: /\/locales\/.*\.js$/,
						handler: "CacheFirst",
					},
				],
			},
		}),
		sentryVitePlugin({
			org: "zwyx",
			project: "detrak",
		}),
		// visualizer(),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: "/src",
			},
		],
	},
	build: {
		outDir: "docs",
		rollupOptions: {
			output: {
				chunkFileNames: (chunkInfo) =>
					chunkInfo.facadeModuleId?.includes("/i18n/locales/") ?
						"locales/[name]-[hash].js"
					:	"assets/[name]-[hash].js",
			},
		},

		// Sourcemaps are sent to Sentry but not included in the bundle (see `.github/workflows/build-website.yml`)
		sourcemap: true,
	},
});
