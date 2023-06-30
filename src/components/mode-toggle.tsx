// https://github.com/shadcn/ui/blob/main/apps/www/components/mode-toggle.tsx

import { LucideLaptop, LucideMoon, LucideSunMedium } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useThemeContext } from "~/lib/theme-context.const";

export function ModeToggle() {
	const { updateTheme } = useThemeContext();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<LucideSunMedium className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

					<LucideMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => {
						updateTheme("light");
					}}
				>
					<LucideSunMedium className="mr-2 h-4 w-4" />
					<span>Light</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						updateTheme("dark");
					}}
				>
					<LucideMoon className="mr-2 h-4 w-4" />
					<span>Dark</span>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={() => {
						updateTheme("system");
					}}
				>
					<LucideLaptop className="mr-2 h-4 w-4" />
					<span>Same as device</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
