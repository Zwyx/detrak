import { LucideSettings } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Settings } from "~/lib/SettingsContext";
import { useSettingsContext } from "~/lib/SettingsContext.const";

interface SettingCheckboxProps extends PropsWithChildren {
	name: keyof Settings;
	disabled?: boolean;
	title: string;
}

const SettingCheckbox: FC<SettingCheckboxProps> = ({
	name,
	disabled,
	title,
	children,
}) => {
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

	const { numberOfGames } = useSettingsContext();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<LucideSettings />
					<span className="sr-only">{t("openSettingsDialog")}</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="max-h-full overflow-auto">
				<DialogHeader>
					<DialogTitle>{t("settings")}</DialogTitle>
					{/* <DialogDescription></DialogDescription> */}
				</DialogHeader>

				<SettingCheckbox
					name="alwaysShowScore"
					title={t("alwaysShowScore.title")}
				>
					{t("alwaysShowScore.description")}
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
						numberOfGames === 0
							? t("autoRollDice.notAvailableDuringTheFirstGame")
							: ""
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
			</DialogContent>
		</Dialog>
	);
};
