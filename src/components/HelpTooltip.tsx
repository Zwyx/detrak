import { HoverCardArrow } from "@radix-ui/react-hover-card";
import { FC, PropsWithChildren } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export type HelpStep =
	| null
	| "welcome"
	| "rollDice1"
	| "diceRolling1"
	| "clickGrid1"
	| "clickGrid2"
	| "rollDice2"
	| "diceRolling2"
	| "afterDiceRolling2"
	| "autoRollDice";

interface HelpTooltipProps extends PropsWithChildren {
	open: boolean;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	noArrow?: boolean;
}

export const HelpTooltip: FC<HelpTooltipProps> = ({
	open,
	side,
	align,
	noArrow,
	children,
}) => (
	<HoverCard open={open}>
		{/* `asChild` and `div` are only to fix the SEO warning in Lighthouse */}
		<HoverCardTrigger asChild>
			<div />
		</HoverCardTrigger>

		<HoverCardContent
			className="border-none bg-info p-2 text-center text-sm"
			side={side}
			align={align}
		>
			{children}
			{!noArrow && (
				<HoverCardArrow width={16} height={12} className="fill-info" />
			)}
		</HoverCardContent>
	</HoverCard>
);
