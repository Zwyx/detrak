import { useContext } from "react";
import { PwaContext } from "./PwaContext";

// Was extracted from the main context file because of the ESLint warning `react-refresh/only-export-components`

export const usePwaContext = () => {
	const context = useContext(PwaContext);

	if (context === undefined) {
		throw new Error("usePwaContext must be within PwaContext");
	}

	return context;
};
