import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect, useReducer } from "react";

import { SiteHeader } from "~/components/site-header";
import { SETTINGS_KEY } from "~/lib/keys";
import {
	Settings,
	SettingsContext,
	defaultSettings,
} from "~/lib/settings-context";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	const settingsReducer = (
		prevSettings: Settings,
		newSettings: Partial<Settings>,
	): Settings => {
		const settings = { ...prevSettings, ...newSettings };

		localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));

		return settings;
	};

	const [settings, updateSettings] = useReducer(
		settingsReducer,
		defaultSettings,
	);

	useEffect(() => {
		const storedSettings = localStorage.getItem(SETTINGS_KEY);

		if (storedSettings !== null) {
			try {
				updateSettings(JSON.parse(storedSettings));
			} catch {
				//
			}
		}
	}, []);

	return (
		<ThemeProvider attribute="class">
			<SettingsContext.Provider value={{ settings, updateSettings }}>
				<div
					className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
				>
					<SiteHeader />
					<Component {...pageProps} />
				</div>
			</SettingsContext.Provider>
		</ThemeProvider>
	);
}
