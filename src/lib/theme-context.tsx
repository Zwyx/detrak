import {
	Dispatch,
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import { THEME_KEY } from "./keys";

const themes = ["light", "dark", "system"] as const;
type Theme = (typeof themes)[number];
const isTheme = (value: unknown): value is Theme =>
	typeof value === "string" && themes.includes(value as Theme);

const defaultTheme: Theme = "system";

export const ThemeContext = createContext<
	| {
			theme: Theme;
			updateTheme: Dispatch<Theme>;
	  }
	| undefined
>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		const storedTheme = localStorage.getItem(THEME_KEY);

		if (storedTheme !== null) {
			if (isTheme(storedTheme)) {
				setTheme(storedTheme);
			}
		}
	}, []);

	const updateTheme = useCallback((newTheme: Theme) => {
		localStorage.setItem(THEME_KEY, newTheme);

		setTheme(newTheme);

		if (newTheme !== "light") {
			document.documentElement.classList.remove("light");
		}

		if (newTheme !== "dark") {
			document.documentElement.classList.remove("dark");
		}

		if (newTheme === "light" || newTheme === "dark") {
			document.documentElement.classList.add(newTheme);
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, updateTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
