import { LOCALE_KEY } from "@/lib/local-storage-keys";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";

const i18nLocaleCodes = [
	// "ar", Arabic is disabled because adding `dir="rtl"` to `<html>` messes up with the game grid and the main menu (which still opens on the left); not using `dir="rtl"` leads to unreadable strings like "x game - best score: y" below the grid
	"bn",
	"cs",
	"da",
	"de",
	"el",
	"en",
	"es-ES",
	"es-419",
	"fr",
	"hi",
	"hr",
	"hu",
	"id",
	"it",
	"ja",
	"ko",
	"nb",
	"nl",
	"pl",
	"pt-PT",
	"pt-BR",
	"ro",
	"ru",
	"sk",
	"sv",
	"th",
	"tr",
	"uk",
	"vi",
	"zh-Hans",
	"zh-Hant",
] as const;

export type I18nLocaleCode = (typeof i18nLocaleCodes)[number];

const isLocaleCode = (value: unknown): value is I18nLocaleCode =>
	typeof value === "string" &&
	i18nLocaleCodes.includes(value as I18nLocaleCode);

const storedLocaleCode = localStorage.getItem(LOCALE_KEY);

i18n.on("languageChanged", (lng) => {
	document.documentElement.lang = lng;
});

// Exported for the `t` function to be type-safe, see `src/@types/i18next.d.ts`
export const resources = { en };

i18n.use(initReactI18next).init({
	// debug: true,
	lng: isLocaleCode(storedLocaleCode) ? storedLocaleCode : navigator.language,
	fallbackLng: "en",
	ns: Object.keys(resources.en),
	resources,
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
});

export const changeLanguage = async (
	localeCode: string,
): Promise<"ok" | "offline" | "error"> => {
	if (!i18n.hasResourceBundle(localeCode, Object.keys(resources.en)[0])) {
		if (!navigator.onLine) {
			return "offline";
		}

		try {
			const translation = (await import(`./locales/${localeCode}.ts`))[
				localeCode.replace("-", "")
			];

			for (const namespace of Object.keys(translation)) {
				i18n.addResourceBundle(localeCode, namespace, translation[namespace]);
			}
		} catch {
			return "error";
		}
	}

	i18n.changeLanguage(localeCode);
	localStorage.setItem(LOCALE_KEY, localeCode);

	return "ok";
};

if (isLocaleCode(storedLocaleCode) && storedLocaleCode !== "en") {
	changeLanguage(storedLocaleCode);
}

export default i18n;
