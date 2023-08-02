import "@fontsource/caveat";
import "@fontsource/inter";
import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import { PwaContextProvider } from "./lib/PwaContext.tsx";
import { SettingsContextProvider } from "./lib/SettingsContext.tsx";
import { ThemeContextProvider } from "./lib/ThemeContext.tsx";

Sentry.init({
	dsn: "https://3950b60e0cc71f3547461566a56e84c6@o4505630552227840.ingest.sentry.io/4505630556356608",
	integrations: [
		new Sentry.BrowserTracing({
			// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
			tracePropagationTargets: ["https://detrak.net"],
		}),
		new Sentry.Replay(),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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
