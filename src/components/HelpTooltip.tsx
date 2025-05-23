import { HoverCardArrow } from "@radix-ui/react-hover-card";
import { PropsWithChildren, useState } from "react";
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
	| "settingsChange";

export const HelpTooltip = ({
	open,
	side,
	align,
	noArrow,
	children,
}: {
	open: boolean;
	side?: "top" | "right" | "bottom" | "left";
	align?: "start" | "center" | "end";
	noArrow?: boolean;
} & PropsWithChildren) => {
	const [acknowledged, setAcknowledged] = useState(false);

	return (
		<HoverCard open={open && !acknowledged}>
			{/* `asChild` and `div` are only to fix the SEO warning in Lighthouse */}
			<HoverCardTrigger asChild>
				<div />
			</HoverCardTrigger>

			<HoverCardContent
				className="cursor-pointer border-none bg-tooltip p-2 text-center text-sm"
				side={side}
				align={align}
				// Needs to be `onPointerDown` to override the default behaviour, which can prevent `onClick` from being triggered
				onPointerDown={() => setAcknowledged(true)}
			>
				{children}
				{!noArrow && (
					<HoverCardArrow width={16} height={12} className="fill-tooltip" />
				)}
			</HoverCardContent>
		</HoverCard>
	);
};
