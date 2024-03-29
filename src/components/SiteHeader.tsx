import { useTranslation } from "react-i18next";
import { HeaderMenu } from "~/components/HeaderMenu";
import { SettingsDialog } from "~/components/SettingsDialog";
import { ThemeSelector } from "~/components/ThemeSelector";
import { LanguageSelector } from "./LanguageSelector";

export const SiteHeader = () => {
	const { t } = useTranslation("siteHeader");

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm">
			<div className="container flex h-14 items-center justify-between gap-2 p-2">
				<div className="flex flex-1 items-center justify-start">
					<HeaderMenu />
				</div>

				<div className="flex flex-[10] justify-center">
					<span className="text-center font-bold">{t("detrak")}</span>
				</div>

				<div className="flex flex-1 items-center justify-end gap-1">
					<SettingsDialog />
					<ThemeSelector />
					<LanguageSelector />
				</div>
			</div>
		</header>
	);
};
