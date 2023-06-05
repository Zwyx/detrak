import { Settings } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { useSettingsContext } from "~/lib/settings-context";

export function SettingsDialog() {
	const { settings, updateSettings } = useSettingsContext();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<Settings />
					<span className="sr-only">Settings</span>
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					{/* <DialogDescription></DialogDescription> */}
				</DialogHeader>

				<div className="mt-2 flex gap-2">
					<Checkbox
						id="alwaysShowScore"
						checked={settings.alwaysShowScore}
						onCheckedChange={(checked) =>
							updateSettings({ alwaysShowScore: !!checked })
						}
					/>

					<label
						htmlFor="alwaysShowScore"
						className="grid cursor-pointer select-none gap-1.5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<div className="text-sm font-medium leading-none">
							Always show the score
						</div>

						<div className="text-sm text-muted-foreground">
							Checking this box will allow you to see your current score during
							the game, instead of only at the end.
						</div>
					</label>
				</div>

				<div className="flex gap-2">
					<Checkbox
						id="animateDice"
						checked={settings.animateDice}
						onCheckedChange={(checked) =>
							updateSettings({ animateDice: !!checked })
						}
					/>

					<label
						htmlFor="animateDice"
						className="grid cursor-pointer select-none gap-1.5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<div className="text-sm font-medium leading-none">
							Animate rolling dice
						</div>

						<div className="text-sm text-muted-foreground">
							Roll dice with a 3D animation.
						</div>
					</label>
				</div>

				<div className="flex gap-2">
					<Checkbox
						id="autoRollDice"
						checked={settings.autoRollDice}
						onCheckedChange={(checked) =>
							updateSettings({ autoRollDice: !!checked })
						}
					/>

					<label
						htmlFor="autoRollDice"
						className="grid cursor-pointer select-none gap-1.5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						<div className="text-sm font-medium leading-none">
							Automatically roll the dice
						</div>

						<div className="text-sm text-muted-foreground">
							Dice will be rolled automatically once a move is complete (when
							the two symbols are placed on the grid). This removes the ability
							to undo the second symbol placement.
						</div>
					</label>
				</div>
			</DialogContent>
		</Dialog>
	);
}
