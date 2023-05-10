// https://github.com/shadcn/ui/blob/main/apps/www/components/main-nav.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

export function MainNav() {
	const pathname = usePathname();

	return (
		<nav className="hidden flex-1 items-center gap-6 text-sm font-medium md:flex">
			<Link
				href="/"
				className={cn(
					"transition-colors hover:text-foreground/80",
					pathname === "/" ? "text-foreground" : "text-foreground/60",
				)}
			>
				Play the game
			</Link>

			<Link
				href="/rules"
				className={cn(
					"transition-colors hover:text-foreground/80",
					pathname === "/rules" ? "text-foreground" : "text-foreground/60",
				)}
			>
				Read the rules
			</Link>
		</nav>
	);
}
