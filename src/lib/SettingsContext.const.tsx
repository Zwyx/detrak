import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

// Was extracted from the main context file because of the ESLint warning `react-refresh/only-export-components`

export const useSettingsContext = () => {
	const context = useContext(SettingsContext);

	if (context === undefined) {
		throw new Error("useSettingsContext must be within SettingsContext");
	}

	return context;
};
