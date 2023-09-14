// https://github.com/shadcn/ui/blob/main/apps/www/components/site-header.tsx

import { useTranslation } from "react-i18next";
import { HeaderMenu } from "~/components/HeaderMenu";
import { SettingsDialog } from "~/components/SettingsDialog";
import { ThemeSelector } from "~/components/ThemeSelector";
import { LanguageSelector } from "./LanguageSelector";

export const SiteHeader = () => {
	const { t } = useTranslation(["siteHeader"]);

	return (
		<header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
			<div className="container flex h-14 items-center gap-4 p-6">
				<HeaderMenu />

				<span className="flex-[10] text-center font-bold">{t("detrak")}</span>

				<nav className="flex flex-[1] items-center justify-end gap-1">
					<SettingsDialog />
					<ThemeSelector />
					<LanguageSelector />
				</nav>
			</div>
		</header>
	);
};
