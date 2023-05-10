import { Settings } from "lucide-react";
import { Button } from "~/components/ui/button";

export function SettingsDialog() {
	return (
		<Button variant="ghost" size="sm" className="w-9 px-0">
			<Settings />
			<span className="sr-only">Settings</span>
		</Button>
	);
}
