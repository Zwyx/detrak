import {
	Dispatch,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import { NUMBER_OF_GAMES_KEY, SETTINGS_KEY } from "./keys";
import { isBrowser } from "./utils";

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
	animateDice:
		isBrowser() &&
		!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
	autoRollDice: false,
	showConfetti:
		isBrowser() &&
		!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
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

	const [numberOfGames, setNumberOfGames] = useState(0);

	const incrementNumberOfGames = useCallback(() => {
		setNumberOfGames((prevNumberOfGames) => {
			const newNumberOfGames = prevNumberOfGames + 1;

			localStorage.setItem(NUMBER_OF_GAMES_KEY, newNumberOfGames.toString());

			return newNumberOfGames;
		});
	}, []);

	useEffect(() => {
		const storedSettings = localStorage.getItem(SETTINGS_KEY);
		const storedNumberOfGames = localStorage.getItem(NUMBER_OF_GAMES_KEY);

		if (storedSettings !== null) {
			try {
				updateSettings(JSON.parse(storedSettings));
			} catch {
				//
			}
		}

		if (storedNumberOfGames !== null) {
			setNumberOfGames(Number(storedNumberOfGames));
		}
	}, []);

	return (
		<SettingsContext.Provider
			value={{
				settings,
				updateSettings,
				numberOfGames,
				incrementNumberOfGames,
			}}
		>
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
