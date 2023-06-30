import { useContext } from "react";
import { ThemeContext } from "./theme-context";

// This was extracted from the neighbouring file following the ESLint warning
// `react-refresh/only-export-components`

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("useThemeContext must be within ThemeContext");
	}

	return context;
};
