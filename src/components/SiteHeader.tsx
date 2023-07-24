// https://github.com/shadcn/ui/blob/main/apps/www/components/site-header.tsx

import { useTranslation } from "react-i18next";
import { HeaderMenu } from "~/components/HeaderMenu";
import { ModeToggle } from "~/components/ModeToggle";
import { SettingsDialog } from "~/components/SettingsDialog";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
	const { t } = useTranslation(["siteHeader"]);

	return (
		<header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
			<div className="container flex h-14 items-center gap-4 p-6">
				<HeaderMenu />

				<span className="flex-[10] text-center font-bold">
					{t("detrakFanMade")}
				</span>

				<nav className="flex flex-[1] items-center justify-end gap-1">
					<SettingsDialog />
					<ModeToggle />
					<LanguageToggle />
				</nav>
			</div>
		</header>
	);
}
