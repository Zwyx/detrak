import "@fontsource/caveat";
import "@fontsource/inter";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./i18n/i18n.ts";
import "./index.css";
import { SettingsContextProvider } from "./lib/SettingsContext.tsx";
import { ThemeContextProvider } from "./lib/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<SettingsContextProvider>
				<App />
			</SettingsContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
);
