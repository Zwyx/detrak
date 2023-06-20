import { Settings as SettingIcon } from "lucide-react";
import { FC } from "react";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Settings, useSettingsContext } from "~/lib/settings-context";

const SettingCheckbox: FC<{
	name: keyof Settings;
	disabled?: boolean;
	title: string;
	description: string;
}> = ({ name, disabled, title, description }) => {
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

				<div className="text-sm text-muted-foreground">{description}</div>
			</label>
		</div>
	);
};

export function SettingsDialog() {
	const { numberOfGames } = useSettingsContext();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<SettingIcon />
					<span className="sr-only">Settings</span>
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					{/* <DialogDescription></DialogDescription> */}
				</DialogHeader>

				<SettingCheckbox
					name="alwaysShowScore"
					title="Always show the score"
					description="Checking this box will allow you to see your current score during the game, instead of only at the end."
				/>

				<SettingCheckbox
					name="showScoreLegend"
					title="Show the score legend"
					description="The legend placed above the grid."
				/>

				<SettingCheckbox
					name="animateDice"
					title="Animate rolling dice"
					description="Roll dice with a 3D animation."
				/>

				<SettingCheckbox
					name="autoRollDice"
					disabled={numberOfGames === 0}
					title={`Automatically roll the dice${
						numberOfGames === 0 ? " (not available during the first game)" : ""
					}`}
					description="Dice will be rolled automatically once a move is complete (when the two symbols are placed on the grid). This removes the ability to undo the second symbol placement."
				/>

				<SettingCheckbox
					name="showConfetti"
					title="Show confetti"
					description="Show a confetti explosion when you beat your highest score!"
				/>
			</DialogContent>
		</Dialog>
	);
}
