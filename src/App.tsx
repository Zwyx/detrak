import { LucideDices, LucideUndo2 } from "lucide-react";
import { useCallback, useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { Confetti } from "~/lib/confetti.min.js";
import { Cell, Grid, TCell, TGrid, TLine } from "./components/Detrak";
import { Dice } from "./components/Dice";
import { HelpStep, HelpTooltip } from "./components/HelpTooltip";
import { SiteHeader } from "./components/SiteHeader";
import { Button } from "./components/ui/button";
import { usePwaContext } from "./lib/PwaContext.const";
import { useSettingsContext } from "./lib/SettingsContext.const";
import { HELP_SHOWN_KEY, HIGHEST_SCORE_KEY } from "./lib/keys";
import { cn } from "./lib/utils";

const getLineScore = (line: TLine): number => {
	const symbols = line.slice(1, -1);

	let previousSymbol: TCell;
	let numberOfPreviousSymbols: number;
	let score = 0;

	symbols.forEach((symbol, index) => {
		if (symbol !== null && symbol === previousSymbol) {
			numberOfPreviousSymbols++;
		}

		if (symbol !== previousSymbol || index === symbols.length - 1) {
			score +=
				numberOfPreviousSymbols === 2
					? 2
					: numberOfPreviousSymbols === 3
					? 3
					: numberOfPreviousSymbols === 4
					? 8
					: numberOfPreviousSymbols === 5
					? 10
					: 0;

			previousSymbol = symbol;
			numberOfPreviousSymbols = 1;
		}
	});

	if (score === 0) {
		score = -5;
	}

	return score;
};

export const App = () => {
	const { pwaNeedsRefresh, pwaRefresh } = usePwaContext();
	const { settings, updateSettings, numberOfGames, incrementNumberOfGames } =
		useSettingsContext();

	const { t } = useTranslation(["app"]);

	const initialGrid = Array(7)
		.fill(0)
		.map(() => Array(7).fill(null));

	const gridReducer = (
		prevGrid: TGrid,
		{ x, y, newValue }: { x: number; y: number; newValue: TCell },
	): TGrid => {
		if (x < 0 || y < 0) {
			return initialGrid;
		}

		const grid = prevGrid.map((row, r) =>
			row.map((value, c) => (r === y && c === x ? newValue : value)),
		);

		const computeRowScores = (grid2: TGrid): TCell[] =>
			grid2.map((row, r) => (r >= 1 && r <= 5 ? getLineScore(row) : null));

		const rowScores = computeRowScores(grid);

		const transposedGrid = grid[0].map((_, index) =>
			grid.map((row) => row[index]),
		);

		const columnScores = computeRowScores(transposedGrid);

		const diagonal = grid[0].map(
			(_, index) => grid[grid.length - 1 - index][index],
		);

		const diagonalScore = getLineScore(diagonal);

		const totalScore =
			rowScores.reduce<number>((a, b) => (a || 0) + (b || 0), 0) +
			columnScores.reduce<number>((a, b) => (a || 0) + (b || 0), 0) +
			diagonalScore * 2;

		const emptyCells = grid
			.flatMap((row, r) =>
				row.map((cell, c) =>
					r >= 1 && r <= 5 && c >= 1 && c <= 5 && cell === null ? [r, c] : null,
				),
			)
			.filter(Array.isArray);

		const consecutiveEmptyCellsRemaining = emptyCells
			.map(
				([r, c]) =>
					(r > 1 && grid[r - 1][c] === null) ||
					(r < 5 && grid[r + 1][c] === null) ||
					(c > 1 && grid[r][c - 1] === null) ||
					(c < 5 && grid[r][c + 1] === null),
			)
			.includes(true);

		const endOfGame =
			emptyCells.length === 0 ||
			(emptyCells.length % 2 === 0 && !consecutiveEmptyCellsRemaining);

		return grid.map((row, index) =>
			index === 0
				? [endOfGame ? 1 : null, ...row.slice(1, -1), diagonalScore]
				: index >= 1 && index <= 5
				? [...row.slice(0, -1), rowScores[index]]
				: [diagonalScore, ...columnScores.slice(1, -1), totalScore],
		);
	};

	const [grid, updateGrid] = useReducer(gridReducer, initialGrid);

	const [dice, setDice] = useState<TCell[]>([null, null]);
	const [diceTimestamp, setDiceTimestamp] = useState<number>(0);
	const [diceHidden, setDiceHidden] = useState(false);
	const [diceRolling, setDiceRolling] = useState(false);
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	const [helpStep, setHelpStep] = useState<HelpStep>(null);
	const [highestScore, setHighestScore] = useState<number | undefined>();
	const [newHighestScore, setNewHighestScore] = useState<boolean>(false);

	const startOfGame = grid[1][1] === null;
	const [middleOfGame, setMiddleOfGame] = useState(false);
	const endOfGame = grid[0][0] !== null;
	const score = grid[6][6];
	const canRollDice = move !== 0 && move !== 1 && !startOfGame && !endOfGame;
	const canUndoMove = move === 1 || move === 2;

	useEffect(() => {
		const helpShown = localStorage.getItem(HELP_SHOWN_KEY);
		const storedHighestScore = localStorage.getItem(HIGHEST_SCORE_KEY);

		if (!helpShown) {
			setHelpStep("welcome");
		}

		if (storedHighestScore !== null) {
			setHighestScore(Number(storedHighestScore));
		}
	}, []);

	useEffect(() => {
		if (endOfGame) {
			incrementNumberOfGames();
		}
	}, [endOfGame, incrementNumberOfGames]);

	useEffect(() => {
		if (endOfGame) {
			if (
				typeof score === "number" &&
				(typeof highestScore !== "number" || score > highestScore)
			) {
				if (typeof highestScore === "number") {
					setNewHighestScore(true);
				}

				localStorage.setItem(HIGHEST_SCORE_KEY, score.toString());

				setHighestScore(score);

				if (settings.showConfetti) {
					setTimeout(() => {
						const confetti = new Confetti("confetti");

						confetti.setCount(75);
						confetti.setSize(1);
						confetti.setPower(25);
						confetti.setFade(false);
						confetti.destroyTarget(false);

						setTimeout(() => {
							const confettiElement = document.getElementById("confetti");

							if (confettiElement) {
								const boundingClientRect =
									confettiElement.getBoundingClientRect();

								confettiElement.dispatchEvent(
									new PointerEvent("click", {
										clientX:
											boundingClientRect.x + boundingClientRect.width / 2,
										clientY: boundingClientRect.y,
									}),
								);
							}
						}, 100);
					}, 100);
				}
			}
		}
	}, [endOfGame, score, highestScore, settings.showConfetti]);

	const rollDiceNow = useCallback(() => {
		setDice([Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]);
		setDiceTimestamp(Date.now());
		setDiceHidden(false);
		setMove(0);
		setMovesCoords([]);

		if (settings.animateDice) {
			setDiceRolling(true);

			setHelpStep((prevHelpStep) =>
				prevHelpStep === "rollDice1"
					? "diceRolling1"
					: prevHelpStep === "rollDice2"
					? "diceRolling2"
					: null,
			);

			setTimeout(() => {
				setDiceRolling(false);

				setHelpStep((prevHelpStep) =>
					prevHelpStep === "diceRolling1"
						? "clickGrid1"
						: prevHelpStep === "diceRolling2"
						? "afterDiceRolling2"
						: null,
				);
			}, 2000);
		} else {
			setHelpStep((prevHelpStep) =>
				prevHelpStep === "rollDice1"
					? "clickGrid1"
					: prevHelpStep === "rollDice2"
					? "afterDiceRolling2"
					: prevHelpStep === "autoRollDice"
					? "autoRollDice"
					: null,
			);
		}
	}, [settings.animateDice]);

	const rollDice = useCallback(() => {
		if (
			settings.animateDice ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			rollDiceNow();
		} else {
			setDiceHidden(true);
			setTimeout(rollDiceNow, 100);
		}
	}, [rollDiceNow, settings.animateDice]);

	useEffect(() => {
		if (settings.autoRollDice && canRollDice) {
			rollDice();
		}
	}, [settings.autoRollDice, canRollDice, rollDice]);

	return (
		<div className="flex flex-col items-center justify-between font-[inter]">
			<SiteHeader />

			<div className="my-2 flex h-[170px] w-full flex-col items-center justify-center overflow-hidden">
				{startOfGame && (
					<>
						<div className="relative flex w-full min-w-[300px] max-w-[550px]">
							<div className="flex-[0.5]" />
							{Array(6)
								.fill(0)
								.map((_, i, a) => (
									<Cell
										key={i}
										value={i}
										startOfGame
										left={i === 0}
										right={i === a.length - 1}
										onClick={() => {
											updateGrid({ x: 1, y: 1, newValue: i });

											if (helpStep === "welcome") {
												setHelpStep("rollDice1");
											}

											if (numberOfGames === 1) {
												updateSettings({
													animateDice: false,
													autoRollDice: true,
												});

												setHelpStep("autoRollDice");
											}
										}}
									/>
								))}
							<div className="flex-[0.5]" />
						</div>

						<HelpTooltip open={helpStep === "welcome"}>
							<strong>{t("welcome.title")}</strong>
							<br />
							{t("welcome.text")}
						</HelpTooltip>
					</>
				)}

				{!startOfGame && (
					<>
						{!endOfGame ? (
							<>
								<div className="relative flex w-full min-w-[300px] max-w-[550px] items-center ">
									<Button
										className={cn(
											"ml-2 h-14 sm:ml-0",
											(!middleOfGame ||
												helpStep === "clickGrid2" ||
												helpStep === "rollDice2" ||
												helpStep === "diceRolling2" ||
												helpStep === "afterDiceRolling2") &&
												"invisible",
										)}
										aria-label="Undo this move"
										disabled={!canUndoMove}
										onClick={() => {
											updateGrid({
												...movesCoords[movesCoords.length - 1],
												newValue: null,
											});
											setMovesCoords(movesCoords.slice(0, -1));
											setMove(move - 1);
										}}
									>
										<LucideUndo2 />
									</Button>

									<div className="flex-[2]" />

									{dice[0] !== null && (
										<Dice
											value={dice[0] || 0}
											timestamp={diceTimestamp}
											hidden={diceHidden}
										/>
									)}

									<div className="flex-[2] xsm:flex-1" />

									{dice[1] !== null && (
										<Dice
											value={dice[1] || 0}
											timestamp={diceTimestamp}
											hidden={diceHidden}
										/>
									)}

									<div className="flex-[2]" />

									<HelpTooltip open={helpStep === "rollDice1"} side="left">
										{t("rollDice1.part1")}{" "}
										<strong>{t("rollDice1.part2")}</strong>
									</HelpTooltip>

									<Button
										className={cn(
											"mr-2 h-14 sm:mr-0",
											settings.autoRollDice && "invisible",
										)}
										aria-label={t("rollDice")}
										disabled={!canRollDice}
										onClick={rollDice}
									>
										<LucideDices />
									</Button>
								</div>

								<HelpTooltip open={helpStep === "autoRollDice"}>
									{t("autoRollDice")}
								</HelpTooltip>
							</>
						) : (
							<div className="flex flex-col items-center gap-4">
								<div className="mt-1 text-center font-[caveat] text-3xl">
									{newHighestScore
										? t("endOnGameWithNewScore")
										: t("endOnGame")}{" "}
									{score}
								</div>

								<Button
									disabled={move !== 1 && move !== 2}
									onClick={() => {
										if (pwaNeedsRefresh && pwaRefresh) {
											pwaRefresh();
											return;
										}

										updateGrid({ x: -1, y: -1, newValue: null });
										setDice([null, null]);
										setMove(-1);
										setMovesCoords([]);
										setMiddleOfGame(false);
										setNewHighestScore(false);
									}}
								>
									{t("startNewGame")}
								</Button>
							</div>
						)}
					</>
				)}
			</div>

			<div id="confetti" className="pointer-events-none m-auto" />

			<div className="m-auto flex w-full justify-center overflow-hidden p-2">
				<Grid
					grid={grid}
					startOfGame={startOfGame}
					firstMoveCoords={movesCoords[0]}
					helpStep={helpStep}
					onClick={
						move > -1 && move < 2 && !diceRolling
							? (x, y) => {
									updateGrid({ x, y, newValue: dice[move] });
									setMovesCoords([...movesCoords, { x, y }]);
									setMove(move + 1);
									setMiddleOfGame(true);

									if (helpStep === "clickGrid1") {
										setHelpStep("clickGrid2");
									} else if (helpStep === "clickGrid2") {
										setHelpStep("rollDice2");
									} else if (
										helpStep === "afterDiceRolling2" ||
										helpStep === "autoRollDice"
									) {
										setHelpStep(null);
										localStorage.setItem(HELP_SHOWN_KEY, "true");
									}
							  }
							: undefined
					}
				/>
			</div>

			{typeof highestScore === "number" && (
				<div className="mt-1 text-center font-[caveat] text-3xl">
					{t("numberOfGames", { count: numberOfGames })} – {t("bestScore")}{" "}
					{highestScore}
				</div>
			)}

			<div className="flex-1" />
		</div>
	);
};
