import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Code = ({
	className,
	block,
	breakAll,
	numbersOnly,
	children,
}: {
	className?: string;
	block?: boolean;
	breakAll?: boolean;
	numbersOnly?: boolean;
} & PropsWithChildren) => (
	<code
		className={cn(
			"rounded border bg-secondary px-1 py-0.5",
			numbersOnly && "pt-1",
			block && "block px-2 py-1",
			block && numbersOnly && "px-3 pb-0 pt-0.5",
			breakAll && "break-all",
			className,
		)}
	>
		{children}
	</code>
);
