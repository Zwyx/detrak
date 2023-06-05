import { Caveat } from "next/font/google";
import { FC } from "react";
import { useSettingsContext } from "~/lib/settings-context";
import { cn } from "~/lib/utils";

export type TCell = number | null;
export type TLine = TCell[];
export type TGrid = TLine[];

const caveat = Caveat({ subsets: ["latin"] });

// Front: /
export const SymbolFront: FC = () => (
	<div className="h-[6%] w-[55%] -rotate-45 rounded-full bg-foreground" />
);

// Top: X
export const SymbolTop: FC = () => (
	<>
		<div className="absolute h-[6%] w-[55%] rotate-45 rounded-full bg-foreground" />
		<div className="absolute h-[6%] w-[55%] -rotate-45 rounded-full bg-foreground" />
	</>
);

// Right: ///
export const SymbolRight: FC = () => (
	<>
		<div className="mr-[12%] h-[55%] w-[6%] rounded-full bg-foreground" />
		<div className="h-[55%] w-[6%] rounded-full bg-foreground" />
		<div className="ml-[12%] h-[55%] w-[6%] rounded-full bg-foreground" />
	</>
);

// Left: #
export const SymbolLeft: FC = () => (
	<>
		<div className="absolute mb-[18%] h-[6%] w-[55%] rounded-full bg-foreground" />
		<div className="absolute mt-[18%] h-[6%] w-[55%] rounded-full bg-foreground" />
		<div className="absolute mr-[18%] h-[55%] w-[6%] rounded-full bg-foreground" />
		<div className="absolute ml-[18%] h-[55%] w-[6%] rounded-full bg-foreground" />
	</>
);

// Bottom /\
export const SymbolBottom: FC = () => (
	<>
		<div className="absolute mt-[30%] h-[6%] w-[55%]  rounded-full bg-foreground" />
		<div className="absolute mb-[14%] mr-[26%] h-[6%] w-[55%] rotate-[120deg]  rounded-full bg-foreground" />
		<div className="absolute mb-[14%] ml-[26%] h-[6%] w-[55%] rotate-[240deg]  rounded-full bg-foreground" />
	</>
);

// Back: O
export const SymbolBack: FC<{ bgColor?: boolean | string }> = ({ bgColor }) => (
	<div className="flex aspect-square w-[55%] items-center justify-center rounded-full bg-foreground">
		<div
			className={cn(
				"aspect-square w-[77%] rounded-full",
				bgColor || "bg-background",
			)}
		/>
	</div>
);

interface CellProps {
	x?: number;
	y?: number;
	value: number | null;
	startOfGame?: boolean;
	endOfGame?: boolean;
	onClick?: () => void;
}

export const Cell: FC<CellProps> = ({
	x = 1,
	y = 1,
	value,
	startOfGame,
	endOfGame,
	onClick,
}) => {
	const { settings } = useSettingsContext();

	const symbol = x >= 1 && x <= 5 && y >= 1 && y <= 5;
	const canPlay = symbol && onClick && (value === null || startOfGame);
	const bgColor = x + y === 6 && "bg-accent";

	return (
		<button
			className={cn(
				"relative flex aspect-square flex-1 select-none items-center justify-center overflow-hidden outline-none",
				x >= 1 && y >= 1 && "shadow-grid",
				canPlay &&
					"cursor-pointer hover:shadow-grid-focus focus-visible:shadow-grid-focus",
				bgColor,
			)}
			disabled={!canPlay}
			onClick={onClick}
			onContextMenu={
				onClick &&
				((e) => {
					if (matchMedia("(hover: none) and (pointer: coarse)").matches) {
						e.preventDefault();
						onClick();
					}
				})
			}
		>
			{symbol &&
				(value === 0 ? (
					<SymbolFront />
				) : value === 1 ? (
					<SymbolTop />
				) : value === 2 ? (
					<SymbolRight />
				) : value === 3 ? (
					<SymbolLeft />
				) : value === 4 ? (
					<SymbolBottom />
				) : (
					value === 5 && <SymbolBack bgColor={bgColor} />
				))}

			{(x === 6 || y === 6) && (endOfGame || settings.alwaysShowScore) && (
				<span
					className={cn(
						caveat.className,
						"mr-3 text-6xl max-[700px]:text-[8vw]",
					)}
				>
					{value}
				</span>
			)}
		</button>
	);
};

interface GridProps {
	grid: TGrid;
	startOfGame: boolean;
	firstMoveCoords?: { x: number; y: number };
	onClick?: (x: number, y: number) => void;
}

export const Grid: FC<GridProps> = ({
	grid,
	startOfGame,
	firstMoveCoords,
	onClick,
}) => {
	return (
		<div
			className={cn(
				"relative flex w-full min-w-[300px] max-w-[700px] flex-col",
				startOfGame && "opacity-30 blur-sm",
			)}
		>
			{grid.map((row, y) => (
				// it's ok to use the index as key, as the size of the array will never and items will never be reordered
				<div key={y} className="flex flex-1">
					{row.map((value, x) => (
						<Cell
							key={x}
							x={x}
							y={y}
							value={value}
							endOfGame={grid[0][0] !== null}
							onClick={
								onClick &&
								(!firstMoveCoords ||
									(x === firstMoveCoords.x && y === firstMoveCoords.y - 1) ||
									(x === firstMoveCoords.x && y === firstMoveCoords.y + 1) ||
									(x === firstMoveCoords.x - 1 && y === firstMoveCoords.y) ||
									(x === firstMoveCoords.x + 1 && y === firstMoveCoords.y))
									? () => onClick(x, y)
									: undefined
							}
						/>
					))}
				</div>
			))}

			<div className="absolute left-[13.3%] top-[13.8%] h-[1%] w-[16.3%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute left-[28.1%] top-[13.3%] h-[16.3%] w-[1%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute left-[13.3%] top-[28.1%] h-[1%] w-[16.3%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute left-[13.8%] top-[13.3%] h-[16.3%] w-[1%] flex-1 rounded bg-accent-foreground" />

			<div className="absolute right-[-1%] top-[-0.5%] h-[1%] w-[16.3%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute right-[-0.5%] top-[-1%] h-[102%] w-[1%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute right-[13.8%] top-[-1%] h-[102%] w-[1%] flex-1 rounded bg-accent-foreground" />

			<div className="absolute bottom-[13.8%] left-[-1%] h-[1%] w-[102%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute bottom-[-0.5%] left-[-1%] h-[1%] w-[102%] flex-1 rounded bg-accent-foreground" />
			<div className="absolute bottom-[-1%] left-[-0.5%] h-[16.3%] w-[1%] flex-1 rounded bg-accent-foreground" />
		</div>
	);
};
