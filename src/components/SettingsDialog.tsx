import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Settings, useSettingsContext } from "@/lib/SettingsContext.const";
import { useHistoryState } from "@/lib/useHistoryState.const";
import { LucideSettings } from "lucide-react";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export const SettingCheckbox = ({
	name,
	disabled,
	title,
	children,
}: {
	name: keyof Settings;
	disabled?: boolean;
	title: string;
} & PropsWithChildren) => {
	const { settings, updateSettings } = useSettingsContext();

	return (
		<div className="mt-2 flex gap-2">
			<Checkbox
				id={name}
				checked={settings[name]}
				disabled={disabled}
				onCheckedChange={(checked) => updateSettings({ [name]: !!checked })}
			/>

			<label
				htmlFor={name}
				className="grid cursor-pointer select-none gap-1.5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				<div className="text-sm font-medium leading-none">{title}</div>

				<div className="text-sm text-muted-foreground">{children}</div>
			</label>
		</div>
	);
};

export const SettingsDialog = () => {
	const { t } = useTranslation("settingsDialog");

	const { state, pushStateOrNavigateBack } = useHistoryState<{
		settingsDialogOpen: boolean;
	}>();

	const { numberOfGames } = useSettingsContext();

	return (
		<Dialog
			open={!!state.settingsDialogOpen}
			onOpenChange={(open) =>
				pushStateOrNavigateBack(open, { settingsDialogOpen: true })
			}
		>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon">
					<LucideSettings />
					<span className="sr-only">{t("openSettingsDialog")}</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="max-h-full overflow-auto" noDescription>
				<DialogHeader className="mb-1">
					<DialogTitle>{t("settings")}</DialogTitle>
				</DialogHeader>

				<SettingCheckbox
					name="alwaysShowScore"
					title={t("alwaysShowScore.title")}
				>
					{t("alwaysShowScore.description")}
				</SettingCheckbox>

				<SettingCheckbox
					name="showScoreWithContrast"
					title={t("showScoreWithContrast.title")}
				>
					{t("showScoreWithContrast.description")}
				</SettingCheckbox>

				<SettingCheckbox
					name="showScoreLegend"
					title={t("showScoreLegend.title")}
				>
					{t("showScoreLegend.description")}
				</SettingCheckbox>

				<SettingCheckbox name="animateDice" title={t("animateDice.title")}>
					{t("animateDice.description")}
				</SettingCheckbox>

				<SettingCheckbox
					name="autoRollDice"
					disabled={numberOfGames === 0}
					title={`${t("autoRollDice.title")} ${
						numberOfGames === 0 ?
							t("autoRollDice.notAvailableDuringTheFirstGame")
						:	""
					}`}
				>
					{t("autoRollDice.description")}
				</SettingCheckbox>

				<SettingCheckbox
					name="showDiceMarker"
					title={t("showDiceMarker.title")}
				>
					{t("showDiceMarker.description")}
				</SettingCheckbox>

				<SettingCheckbox name="showConfetti" title={t("showConfetti.title")}>
					{t("showConfetti.description")}
				</SettingCheckbox>

				<SettingCheckbox name="gridAtBottom" title={t("gridAtBottom.title")}>
					{t("gridAtBottom.description")}
				</SettingCheckbox>

				{navigator.wakeLock && (
					<SettingCheckbox
						name="enableWakeLock"
						title={t("enableWakeLock.title")}
					>
						{t("enableWakeLock.description")}
					</SettingCheckbox>
				)}

				<SettingCheckbox
					name="showNavigationAlert"
					title={t("showNavigationAlert.title")}
				>
					{t("showNavigationAlert.description")}
				</SettingCheckbox>

				<DialogFooter className="mt-1">
					<DialogClose asChild>
						<Button variant="secondary">{t("close", { ns: "common" })}</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
