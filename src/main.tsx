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
			tracePropagationTargets: ["https://detrak.net"],
		}),
		new Sentry.Replay(),
	],
	tracesSampleRate: 0.1,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
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
