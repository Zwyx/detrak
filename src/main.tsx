// At https://fontsource.org/docs/getting-started/subsets it is said that
// it's not recommended to specify a subset when importing fonts, but I still
// do it because the service worker downloads all font files on
// everyone's machines; specifying the subsets saves transferring 276kB
import "@fontsource/caveat/latin-400.css";
import * as Sentry from "@sentry/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
	matchRoutes,
	useLocation,
	useNavigationType,
} from "react-router";
import { App } from "./App.tsx";
import { RouteErrorElement } from "./components/error/RouteErrorElement.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import { PwaContextProvider } from "./lib/PwaContext.tsx";
import { SettingsContextProvider } from "./lib/SettingsContext.tsx";
import { ThemeContextProvider } from "./lib/ThemeContext.tsx";
import { initPlausible } from "./lib/plausible.ts";

const pwa = document.referrer.startsWith("android-app://")
	? "twa"
	: window.matchMedia("(display-mode: standalone)").matches
	? "standalone"
	: "browser";

initPlausible(pwa);

if (import.meta.env.PROD) {
	Sentry.init({
		dsn: import.meta.env.VITE_SENTRY_DSN,
		environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
		integrations: [
			Sentry.reactRouterV7BrowserTracingIntegration({
				useEffect,
				useLocation,
				useNavigationType,
				createRoutesFromChildren,
				matchRoutes,
			}),
			Sentry.browserTracingIntegration(),
			Sentry.replayIntegration({
				// Detrak doesn't handle any personally identifiable or private data
				maskAllText: false,
				blockAllMedia: false,
			}),
		],
		tracesSampleRate: 0.1,
		replaysSessionSampleRate: 0.01,
		replaysOnErrorSampleRate: 1.0,
	});

	Sentry.setTag("pwa", pwa);
}

if (!Math.floor(Math.random() * 1000)) {
	Sentry.captureMessage("Sentry health check");
}

const sentryCreateBrowserRouter =
	Sentry.wrapCreateBrowserRouterV7(createBrowserRouter);

const router = sentryCreateBrowserRouter([
	{
		path: "/",
		element: <App />,

		// Note: this only catches rendering errors, other errors are reported to Sentry
		// but don't make the error element to show up
		errorElement: <RouteErrorElement />,

		children: [
			{
				path: "/:gameId",
				element: <div />,
			},
		],
	},
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PwaContextProvider>
			<ThemeContextProvider>
				<SettingsContextProvider>
					<RouterProvider router={router} />
				</SettingsContextProvider>
			</ThemeContextProvider>
		</PwaContextProvider>
	</StrictMode>,
);
