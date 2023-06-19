import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useReducer,
} from "react";
import { SETTINGS_KEY } from "./keys";

export interface Settings {
	alwaysShowScore: boolean;
	showScoreLegend: boolean;
	animateDice: boolean;
	autoRollDice: boolean;
	showConfetti: boolean;
}

export const defaultSettings: Settings = {
	alwaysShowScore: false,
	showScoreLegend: true,
	animateDice: true,
	autoRollDice: false,
	showConfetti:
		typeof window !== "undefined" &&
		!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
};

export const SettingsContext = createContext<
	| {
			settings: Settings;
			updateSettings: Dispatch<Partial<Settings>>;
	  }
	| undefined
>(undefined);

export const SettingsContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
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
		<SettingsContext.Provider value={{ settings, updateSettings }}>
			{children}
		</SettingsContext.Provider>
	);
};

export const useSettingsContext = () => {
	const context = useContext(SettingsContext);

	if (context === undefined) {
		throw new Error("useSettingsContext must be within SettingsContext");
	}

	return context;
};
