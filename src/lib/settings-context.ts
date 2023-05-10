import { Dispatch, createContext, useContext } from "react";

export interface Settings {
	alwaysShowScore: boolean;
}

export const defaultSettings = {
	alwaysShowScore: false,
};

export const SettingsContext = createContext<
	| {
			settings: Settings;
			updateSettings: Dispatch<Partial<Settings>>;
	  }
	| undefined
>(undefined);

export const useSettingsContext = () => {
	const context = useContext(SettingsContext);

	if (context === undefined) {
		throw new Error("useSettingsContext must be within SettingsContext");
	}

	return context;
};
