import { useSettingsContext } from "@/lib/SettingsContext.const";
import { cn, getSymbolNames } from "@/lib/utils";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { HelpStep, HelpTooltip } from "./HelpTooltip";

export type TCell = number | null;
export type TLine = TCell[];
export type TGrid = TLine[];

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

// Right: |||
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
	left?: boolean;
	right?: boolean;
	helpStep?: HelpStep;
	onClick?: () => void;
}

export const Cell: FC<CellProps> = ({
	x = 1,
	y = 1,
	value,
	startOfGame,
	endOfGame,
	left,
	right,
	helpStep,
	onClick,
}) => {
	const { t } = useTranslation("detrak");

	const { settings } = useSettingsContext();

	const symbol = x >= 1 && x <= 5 && y >= 1 && y <= 5;
	const canPlay = symbol && onClick && (value === null || startOfGame);
	const bgColor = x + y === 6 && "bg-accent";

	const symbolNames = getSymbolNames(t);

	return (
		<button
			className={cn(
				"relative flex aspect-square flex-1 select-none items-center justify-center overflow-hidden outline-none",
				left && "rounded-l-xl",
				right && "rounded-r-xl",
				x >= 1 && y >= 1 && "shadow-grid",
				canPlay &&
					"cursor-pointer hover:shadow-grid-focus focus-visible:shadow-grid-focus",
				bgColor,
			)}
			aria-label={
				startOfGame && typeof value === "number"
					? symbolNames[value]
					: `${t("ariaLabel.row")} ${y} ${t("ariaLabel.column")} ${x} ${
							typeof value === "number"
								? symbolNames[value]
								: t("ariaLabel.empty")
					  }`
			}
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
				<span className="mr-3 font-[caveat] text-6xl max-[550px]:text-[8vw]">
					{value}
				</span>
			)}

			{y === 1 && x === 3 && (
				<div className="absolute h-full">
					<HelpTooltip open={helpStep === "clickGrid1"} side="top">
						{t("clickGrid1.part1")} <strong>{t("clickGrid1.part2")}</strong>
					</HelpTooltip>

					<HelpTooltip open={helpStep === "clickGrid2"} side="top">
						{t("clickGrid2.part1")} <strong>{t("clickGrid2.part2")}</strong>
					</HelpTooltip>
				</div>
			)}

			{y === 4 && x === 6 && (
				<div className="absolute flex w-[85%]">
					<HelpTooltip open={helpStep === "rollDice2"} side="left">
						{t("rollDice2.left")}
					</HelpTooltip>
				</div>
			)}

			{y === 6 && x === 0 && (
				<div className="absolute flex w-[35%] justify-end">
					<HelpTooltip open={helpStep === "rollDice2"} side="right">
						{t("rollDice2.right.part1")}
						<br />
						<strong>{t("rollDice2.right.part2")}</strong>
					</HelpTooltip>
				</div>
			)}
		</button>
	);
};

interface GridProps {
	grid: TGrid;
	startOfGame: boolean;
	firstMoveCoords?: { x: number; y: number };
	helpStep?: HelpStep;
	onClick?: (x: number, y: number) => void;
}

const ScoreHelp: FC<{ value: string; score: string }> = ({ value, score }) => (
	<div className="font-[caveat]">
		<span className="text-[14px] xsm:text-[16px]">{value}</span>
		<span className="text-[20px] xsm:text-[24px]">{score}</span>
	</div>
);

export const Grid: FC<GridProps> = ({
	grid,
	startOfGame,
	firstMoveCoords,
	helpStep,
	onClick,
}) => {
	const { t } = useTranslation("detrak");

	const { settings } = useSettingsContext();

	return (
		<div
			className={cn(
				"relative flex w-full min-w-[300px] max-w-[550px] flex-col",
				startOfGame && "opacity-10",
			)}
		>
			{grid.map((row, y) => (
				// it's ok to use the index as key, as the size of the array will never and items will never be reordered
				<div key={y} className="flex flex-1">
					{row.map((value, x) =>
						y === 0 &&
						x === 3 &&
						settings.showScoreLegend &&
						helpStep !== "welcome" &&
						helpStep !== "rollDice1" &&
						helpStep !== "diceRolling1" &&
						helpStep !== "clickGrid1" &&
						helpStep !== "clickGrid2" ? (
							<div key={x} className="flex flex-1 select-none justify-center">
								<div className="absolute flex gap-2 xsm:gap-6">
									<div className="text-right leading-[16px] xsm:leading-[24px]">
										<ScoreHelp value="□ □ " score="=2" />
										<ScoreHelp value="□ □ □ " score="=3" />
									</div>

									<div className="relative text-right leading-[16px] xsm:leading-[24px]">
										<ScoreHelp value="□ □ □ □ " score="=8  " />
										<ScoreHelp value="□ □ □ □ □ " score="=10" />

										<div className="absolute w-[35%]">
											<HelpTooltip open={helpStep === "rollDice2"}>
												{t("rollDice2.legend")}
											</HelpTooltip>
										</div>
									</div>

									<div className="leading-[16px] xsm:leading-[24px]">
										<ScoreHelp value=" " score="" />
										<ScoreHelp value="" score="0=-5" />
									</div>
								</div>
							</div>
						) : (
							<Cell
								key={x}
								x={x}
								y={y}
								value={value}
								endOfGame={grid[0][0] !== null}
								helpStep={helpStep}
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
						),
					)}
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
