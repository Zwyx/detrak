import { LucideLanguages } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function LanguageToggle() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<LucideLanguages />
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => {}}>English</DropdownMenuItem>

				<DropdownMenuItem onClick={() => {}}>Français</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
