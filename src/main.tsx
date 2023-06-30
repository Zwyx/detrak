import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { SettingsContextProvider } from "./lib/settings-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SettingsContextProvider>
			<App />
		</SettingsContextProvider>
	</React.StrictMode>,
);
