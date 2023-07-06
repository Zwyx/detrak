import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

// This was extracted from the neighbouring file following the ESLint warning
// `react-refresh/only-export-components`

export const useSettingsContext = () => {
	const context = useContext(SettingsContext);

	if (context === undefined) {
		throw new Error("useSettingsContext must be within SettingsContext");
	}

	return context;
};
