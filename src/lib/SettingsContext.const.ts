// Was extracted from the main file for React Refresh (see ESLint `react-refresh/only-export-components`)

import { Dispatch, createContext, useContext } from "react";

export interface Settings {
	alwaysShowScore: boolean;
	showScoreWithContrast: boolean;
	showScoreLegend: boolean;
	animateDice: boolean;
	autoRollDice: boolean;
	showDiceMarker: boolean;
	showNavigationAlert: boolean;
	showConfetti: boolean;
}

export const defaultSettings: Settings = {
	alwaysShowScore: false,
	showScoreWithContrast: false,
	showScoreLegend: true,
	animateDice: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	autoRollDice: false,
	showDiceMarker: true,
	showConfetti: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	showNavigationAlert: true,
};

export const SettingsContext = createContext<
	| {
			settings: Settings;
			updateSettings: Dispatch<Partial<Settings>>;
			numberOfGames: number;
			incrementNumberOfGames: () => void;
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
