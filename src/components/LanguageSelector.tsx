import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { I18nLocaleCode, changeLanguage } from "@/i18n/i18n";
import { LucideLanguages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonStatus } from "./common/ButtonStatus";

export const LanguageSelector = () => {
	const { t, i18n } = useTranslation("languageSelector");

	const [translationLoading, setTranslationLoading] = useState<boolean>(false);

	// prettier-ignore
	const languages: { [languageCode in  I18nLocaleCode]: string } = {
		// "ar":      "العربية",                 // Arabic – disabled, see `i18n.ts`
		"bn":      "বাংলা",                    // Bengali
		"cs":      "Čeština",                 // Czech
		"da":      "Dansk",                   // Danish
		"de":      "Deutsch",                 // German
		"el":      "Ελληνικά",                // Greek
		"en":      "English",
		"es-ES":   "Español (España)",        // Spanish (Spain)
		"es-419":  "Español (Latinoamérica)", // Spanish (Latin America)
		"fr":      "Français",                // French
		"hi":      "हिन्दी",                     // Hindi
		"hr":      "Hrvatski",                // Croatian
		"hu":      "Magyar",                  // Hungarian
		"id":      "Bahasa Indonesia",        // Indonesian
		"it":      "Italiano",                // Italian
		"ja":      "日本語",                   // Japanese
		"ko":      "한국어",                   // Korean
		"nb":      "Bokmål",                  // Norwegian Bokmål
		"nl":      "Nederlands",              // Dutch
		"pl":      "Polski",                  // Polish
		"pt-PT":   "Português (Portugal)",    // Portuguese (Portugal)
		"pt-BR":   "Português (Brasil)",      // Portuguese (Brazil)
		"ro":      "Română",                  // Romanian
		"ru":      "Русский",                 // Russian
		"sk":      "Slovenčina",              // Slovak
		"sv":      "Svenska",                 // Swedish
		"th":      "ไทย",                     // Thai
		"tr":      "Türkçe",                  // Turkish
		"uk":      "Українська",              // Ukrainian
		"vi":      "Tiếng Việt",              // Vietnamese
		"zh-Hans": "中文（简体）",              // Chinese (Simplified)
		"zh-Hant": "中文（繁體）",              // Chinese (Traditional)
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<ButtonStatus variant="ghost" size="icon" loading={translationLoading}>
					<LucideLanguages />
					<span className="sr-only">{t("chooseLanguage")}</span>
				</ButtonStatus>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{t("language")}</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuRadioGroup value={i18n.resolvedLanguage}>
					{Object.entries(languages).map(([languageCode, languageName]) => (
						<DropdownMenuRadioItem
							key={languageCode}
							value={languageCode}
							onClick={async () => {
								setTranslationLoading(true);

								const result = await changeLanguage(languageCode);

								if (result === "offline") {
									alert(t("changeLanguageOffline"));
								} else if (result === "error") {
									alert(t("changeLanguageError"));
								}

								setTranslationLoading(false);
							}}
						>
							<span>{languageName}</span>
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
