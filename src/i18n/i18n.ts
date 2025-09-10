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
	lng: "en",
	fallbackLng: "en",
	ns: Object.keys(resources.en),
	resources,
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
});

export const changeLanguage = async (
	localeCode: I18nLocaleCode,
	source: "auto" | "user",
): Promise<boolean> => {
	if (!i18n.hasResourceBundle(localeCode, Object.keys(resources.en)[0])) {
		try {
			const translation = (await import(`./locales/${localeCode}.ts`))[
				localeCode.replace("-", "")
			];

			for (const namespace of Object.keys(translation)) {
				i18n.addResourceBundle(localeCode, namespace, translation[namespace]);
			}
		} catch {
			return false;
		}
	}

	i18n.changeLanguage(localeCode);

	if (source === "user") {
		localStorage.setItem(LOCALE_KEY, localeCode);
	}

	return true;
};

const splitNavigatorLanguage = navigator.language.split("-")[0];

const startupLocale =
	isLocaleCode(storedLocaleCode) ? storedLocaleCode
	: isLocaleCode(navigator.language) ? navigator.language
	: isLocaleCode(splitNavigatorLanguage) ? splitNavigatorLanguage
	: splitNavigatorLanguage === "es" ? "es-419"
	: splitNavigatorLanguage === "pt" ? "pt-BR"
	: splitNavigatorLanguage === "zh" ? "zh-Hans"
	: undefined;

if (startupLocale) {
	// We lazy load locales, and top level await isn't possible (see commit 8b6f64c1ed),
	// so we can't set the startup locale above when initialising i18n
	changeLanguage(startupLocale, "auto");
}

export default i18n;
