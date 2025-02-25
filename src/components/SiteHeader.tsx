import { HeaderMenu } from "@/components/HeaderMenu";
import { SettingsDialog } from "@/components/SettingsDialog";
import { ThemeSelector } from "@/components/ThemeSelector";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { Button } from "./ui/button";

export const SiteHeader = ({
	gameId,
	onGameIdClick,
}: {
	gameId: string | undefined;
	onGameIdClick: () => void;
}) => {
	const { t } = useTranslation("siteHeader");

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm">
			<div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-2 p-2">
				<div className="flex flex-1 items-center justify-start">
					<HeaderMenu />
				</div>

				<div className="flex flex-[10] items-center justify-center gap-4">
					<span
						className={cn(
							"text-center font-bold",
							gameId && "hidden xsm:inline",
						)}
					>
						{t("detrak")}
					</span>

					{gameId && (
						<Button
							className="gap-1"
							variant="outline"
							size="sm"
							onClick={onGameIdClick}
						>
							{t("game")}
							<code className="font-semibold">{gameId}</code>
						</Button>
					)}
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
