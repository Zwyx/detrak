import { Confetti } from "@/lib/confetti.min.js";
import { cn, formatDate, getSymbolNames, getUnicodeGrid } from "@/lib/utils";
import { LucideDices, LucideUndo2 } from "lucide-react";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Cell, Grid } from "./components/Detrak";
import { Dice } from "./components/Dice";
import { HelpStep, HelpTooltip } from "./components/HelpTooltip";
import { NavigationBlocker } from "./components/NavigationBlocker";
import { NewGameDialog } from "./components/NewGameDialog";
import { SiteHeader } from "./components/SiteHeader";
import { ButtonStatus } from "./components/common/ButtonStatus";
import { Button } from "./components/ui/button";
import { usePwaContext } from "./lib/PwaContext.const";
import { useSettingsContext } from "./lib/SettingsContext.const";
import { DetrakCell, DetrakGrid, DetrakLine } from "./lib/common";
import {
	HELP_SHOWN_KEY,
	HIGHEST_SCORE_KEY,
	NUMBER_OF_GAMES_KEY,
} from "./lib/local-storage-keys";
import { GAME_ID_REGEX, SeededPrng, getSeededPrng } from "./lib/prng";
import { useHistoryState } from "./lib/useHistoryState.const";

const getLineScore = (line: DetrakLine): number => {
	const symbols = line.slice(1, -1);

	let previousSymbol: DetrakCell;
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
	const pwa = usePwaContext();
	const { settings, updateSettings, numberOfGames, incrementNumberOfGames } =
		useSettingsContext();
	const { t } = useTranslation("app");

	const firstRender = useRef(true);
	const { gameId } = useParams();

	const {
		state,
		navigateTo,
		pushState,
		replaceState,
		pushStateOrNavigateBack,
	} = useHistoryState<{
		newGameDialogOpen: boolean;
	}>();

	const [pwaRefreshing, setPwaRefreshing] = useState(false);

	const symbolNames = getSymbolNames(t);

	const initialGrid = Array(7)
		.fill(0)
		.map(() => Array(7).fill(null));

	const gridReducer = (
		prevGrid: DetrakGrid,
		{ x, y, newValue }: { x: number; y: number; newValue: DetrakCell },
	): DetrakGrid => {
		if (x < 0 || y < 0) {
			return initialGrid;
		}

		const grid = prevGrid.map((row, r) =>
			row.map((value, c) => (r === y && c === x ? newValue : value)),
		);

		const computeRowScores = (grid2: DetrakGrid): DetrakCell[] =>
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

	const [seededPrng, setSeededPrng] = useState<SeededPrng>(() =>
		getSeededPrng(gameId || formatDate("today")),
	);

	const [dice, setDice] = useState<DetrakCell[]>([null, null]);
	const [diceTimestamp, setDiceTimestamp] = useState<number>(0);
	const [diceHidden, setDiceHidden] = useState(false);
	const [diceRolling, setDiceRolling] = useState(false);
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	const startOfGame = grid[1][1] === null;
	const [middleOfGame, setMiddleOfGame] = useState(false);
	const endOfGame = grid[0][0] !== null;
	const [undoVisible, setUndoVisible] = useState(false);
	const score = grid[6][6];
	const canRollDice = move !== 0 && move !== 1 && !startOfGame && !endOfGame;
	const diceRolled = useRef(false);
	const canUndoMove = move === 1 || move === 2;

	const [srText, setSrText] = useState<string>("");
	const [helpStep, setHelpStep] = useState<HelpStep>(null);
	const [highestScore, setHighestScore] = useState<number | undefined>();
	const [newHighestScore, setNewHighestScore] = useState<boolean>(false);

	const shareGameLink = `${location.host}/${gameId}`;
	const shareGameLinkHttps = `https://${shareGameLink}`;
	const [showShareSuccess, setShowShareSuccess] = useState<boolean>(false);

	useEffect(() => {
		const storedHighestScore = localStorage.getItem(HIGHEST_SCORE_KEY);

		if (storedHighestScore !== null) {
			setHighestScore(Number(storedHighestScore));
		}
	}, []);

	useEffect(() => {
		if (!gameId) {
			updateGrid({ x: -1, y: -1, newValue: null });
			setDice([null, null]);
			setMove(-1);
			setMovesCoords([]);
			setUndoVisible(false);
			setMiddleOfGame(false);
			diceRolled.current = false;
			setNewHighestScore(false);

			if (!localStorage.getItem(NUMBER_OF_GAMES_KEY)) {
				if (
					firstRender.current &&
					// `newGameDialogOpen` can be `true` if the user stops their very first game and reloads the page
					!history.state?.usr?.newGameDialogOpen
				) {
					navigateTo(`/${formatDate("today")}`, { replace: true });
				}
			} else {
				replaceState({ newGameDialogOpen: true });
			}

			return;
		}

		firstRender.current = false;

		if (!gameId.match(GAME_ID_REGEX)) {
			navigateTo("/", { state: { newGameDialogOpen: true }, replace: true });
			return;
		}

		setSeededPrng(getSeededPrng(gameId));

		if (!localStorage.getItem(HELP_SHOWN_KEY)) {
			setHelpStep("welcome");
		}
	}, [gameId, navigateTo, replaceState]);

	useEffect(() => {
		if (endOfGame) {
			setMiddleOfGame(false);
			incrementNumberOfGames();
		}
	}, [endOfGame, incrementNumberOfGames]);

	useEffect(() => {
		if (
			!(
				endOfGame &&
				typeof score === "number" &&
				(typeof highestScore !== "number" || score > highestScore)
			)
		) {
			return;
		}

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
						const boundingClientRect = confettiElement.getBoundingClientRect();

						confettiElement.dispatchEvent(
							new PointerEvent("click", {
								clientX: boundingClientRect.x + boundingClientRect.width / 2,
								clientY: boundingClientRect.y,
							}),
						);
					}
				}, 100);
			}, 100);
		}
	}, [endOfGame, score, highestScore, settings.showConfetti]);

	useEffect(() => {
		if (gameId && startOfGame) {
			setTimeout(() => setSrText(t("sr.selectSymbol")), 1000);
		} else if (endOfGame && typeof score === "number") {
			if (typeof highestScore === "number" && score > highestScore) {
				setSrText(`${t("sr.gameFinishedNewHighestScore")} ${score}`);
			} else {
				setSrText(`${t("sr.gameFinished")} ${score}`);
			}
		}
	}, [gameId, startOfGame, endOfGame, score, highestScore, t]);

	const rollDiceNow = useCallback(() => {
		const newDice = [
			Math.floor(seededPrng.getNext() * 6),
			Math.floor(seededPrng.getNext() * 6),
		];

		setDice(newDice);
		setDiceTimestamp(Date.now());
		setDiceHidden(false);
		setMove(0);
		setMovesCoords([]);

		const newDrawSrText = `${t("sr.newDraw")} ${symbolNames[newDice[0]]}, ${
			symbolNames[newDice[1]]
		}`;

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
				setSrText(newDrawSrText);

				setHelpStep((prevHelpStep) =>
					prevHelpStep === "diceRolling1"
						? "clickGrid1"
						: prevHelpStep === "diceRolling2"
						? "afterDiceRolling2"
						: null,
				);
			}, 2000);
		} else {
			setSrText(newDrawSrText);

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
	}, [seededPrng, t, symbolNames, settings.animateDice]);

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
		// `diceRolled.current` prevents the dice from being rolled twice in dev because of React's strict
		if (settings.autoRollDice && canRollDice && !diceRolled.current) {
			diceRolled.current = true;
			rollDice();
		}
	}, [settings.autoRollDice, canRollDice, rollDice]);

	const getShareText = () =>
		t("share.text", { count: Number(score) }) + "\n" + getUnicodeGrid(grid);

	return (
		<div className="flex flex-col items-center font-[inter]">
			<NavigationBlocker shouldBlock={middleOfGame} />

			<SiteHeader
				gameId={gameId}
				onGameIdClick={() => pushState({ newGameDialogOpen: true })}
			/>

			<NewGameDialog
				open={!!state.newGameDialogOpen}
				currentGameId={gameId}
				pwaRefreshing={pwaRefreshing}
				onNewGame={(newGameId) => {
					pushState({ newGameDialogOpen: false });
					setTimeout(
						() => navigateTo(`/${newGameId}`, { replace: true }),
						150, // Prevents a flash of the QR code when the dialog closes
					);
				}}
				onStopGame={() => {
					setSrText("");
					navigateTo("/", { state: { newGameDialogOpen: true } });
				}}
				onOpenChange={(open) =>
					pushStateOrNavigateBack(open, { newGameDialogOpen: true })
				}
			/>

			<div className="sr-only" role="status">
				{srText}
			</div>

			<div className="my-2 flex h-[120px] w-full flex-col items-center justify-center overflow-hidden xsm:h-[170px]">
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
											setMiddleOfGame(true);

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
								<div className="relative flex w-full min-w-[300px] max-w-[550px] items-center">
									<Button
										className={cn(
											"ml-2 h-14 sm:ml-0",
											(!undoVisible ||
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
											marked={
												settings.showDiceMarker && !diceRolling && move === 0
											}
											timestamp={diceTimestamp}
											hidden={diceHidden}
										/>
									)}

									<div className="flex-[2] xsm:flex-1" />

									{dice[1] !== null && (
										<Dice
											value={dice[1] || 0}
											marked={
												settings.showDiceMarker && !diceRolling && move === 1
											}
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

								<div className="flex gap-2">
									<div>
										<ButtonStatus
											success={showShareSuccess}
											onClick={() =>
												(navigator.share
													? navigator.share({
															title: t("share.title"),
															text: getShareText(),
															url: shareGameLinkHttps,
													  })
													: navigator.clipboard.writeText(
															`${getShareText()}\n${shareGameLinkHttps}`,
													  )
												).then(() => {
													if (!showShareSuccess) {
														setShowShareSuccess(true);
														setTimeout(() => setShowShareSuccess(false), 2000);
													}
												})
											}
										>
											{t("share.shareYourScore")}
										</ButtonStatus>

										<HelpTooltip open={numberOfGames === 1}>
											<strong>{t("share.sendScore")}</strong>
											<br />
											{t("share.inviteFriends")}
										</HelpTooltip>
									</div>

									<Button
										disabled={move !== 1 && move !== 2}
										onClick={() => {
											navigateTo("/", { state: { newGameDialogOpen: true } });

											if (pwa.refreshReady) {
												setPwaRefreshing(true);
												pwa.refresh?.();
											}
										}}
									>
										{t("startNewGame")}
									</Button>
								</div>
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
									setUndoVisible(true);
									diceRolled.current = false;

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
