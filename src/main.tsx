// At https://fontsource.org/docs/getting-started/subsets it is said that
// it's not recommended to specify a subset when importing fonts, but I still
// want to do it because the service worker downloads all font files on
// everyone's machines; specifying the subsets saves transfering about 300kB
import "@fontsource/caveat/latin-400.css";
import "@fontsource/inter/latin-400.css";
import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import { PwaContextProvider } from "./lib/PwaContext.tsx";
import { SettingsContextProvider } from "./lib/SettingsContext.tsx";
import { ThemeContextProvider } from "./lib/ThemeContext.tsx";

const pwa = document.referrer.startsWith("android-app://")
	? "twa"
	: window.matchMedia("(display-mode: standalone)").matches
	? "standalone"
	: "browser";

if (import.meta.env.PROD) {
	Sentry.init({
		dsn: import.meta.env.VITE_SENTRY_DSN,
		environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
		integrations: [
			new Sentry.BrowserTracing({
				tracePropagationTargets: [`https://${import.meta.env.VITE_DOMAIN}`],
			}),
			Sentry.replayIntegration(),
		],
		tracesSampleRate: 0.1,
		replaysSessionSampleRate: 0.01,
		replaysOnErrorSampleRate: 1.0,
	});

	Sentry.setTag("pwa", pwa);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<PwaContextProvider>
			<ThemeContextProvider>
				<SettingsContextProvider>
					<App />
				</SettingsContextProvider>
			</ThemeContextProvider>
		</PwaContextProvider>
	</React.StrictMode>,
);
