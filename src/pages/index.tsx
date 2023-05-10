import { useEffect, useReducer, useState } from "react";

import { Cell, Grid, TCell, TGrid, TLine } from "~/components/detrak";
import { Button } from "~/components/ui/button";
import { HIGHEST_SCORE_KEY } from "~/lib/keys";
import { useSettingsContext } from "~/lib/settings-context";

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

export default function Home() {
	const { settings } = useSettingsContext();

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
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	const [highestScore, setHighestScore] = useState<number | undefined>();

	useEffect(() => {
		const storedHighestScore = localStorage.getItem(HIGHEST_SCORE_KEY);

		if (storedHighestScore !== null) {
			setHighestScore(Number(storedHighestScore));
		}
	}, []);

	useEffect(() => {
		if (grid[0][0] !== null) {
			const score = grid[6][6];

			if (
				typeof score === "number" &&
				(typeof highestScore !== "number" || score > highestScore)
			) {
				localStorage.setItem(HIGHEST_SCORE_KEY, score.toString());
				setHighestScore(score);
			}
		}
	}, [grid, highestScore]);

	const canRollDice = move !== 0 && move !== 1 && grid[0][0] === null;

	const rollDice = () => {
		setDice([Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]);
		setMove(0);
		setMovesCoords([]);
	};

	useEffect(() => {
		if (settings.autoRollDice && canRollDice) {
			rollDice();
		}
	}, [settings.autoRollDice, canRollDice]);

	return (
		<>
			<div className="my-10 flex h-[200px] w-full flex-col items-center justify-center overflow-hidden">
				{grid[1][1] === null && (
					<>
						<span className="mb-10">Click a symbol to start</span>

						<div className="relative flex w-full min-w-[300px] max-w-[700px] ">
							<div className="flex-[0.5]" />
							{Array(6)
								.fill(0)
								.map((_, i) => (
									<Cell
										key={i}
										value={i}
										startOfGame
										onClick={() => updateGrid({ x: 1, y: 1, newValue: i })}
									/>
								))}
							<div className="flex-[0.5]" />
						</div>
					</>
				)}

				{grid[1][1] !== null && (
					<>
						<div className="mb-8 flex gap-4">
							{!settings.autoRollDice && (
								<Button onClick={rollDice} disabled={!canRollDice}>
									Roll the dice!
								</Button>
							)}

							<Button
								onClick={() => {
									updateGrid({
										...movesCoords[movesCoords.length - 1],
										newValue: null,
									});
									setMovesCoords(movesCoords.slice(0, -1));
									setMove(move - 1);
								}}
								disabled={move !== 1 && move !== 2}
							>
								Undo this move
							</Button>
						</div>

						{grid[0][0] === null ? (
							<div className="relative flex w-full min-w-[300px] max-w-[700px] ">
								<div className="flex-[2]" />
								<Cell value={dice[0]} />

								<div className="flex-1" />

								<Cell value={dice[1]} />

								<div className="flex-[2]" />
							</div>
						) : (
							<div className="flex flex-col gap-4">
								<span>
									Finished! Your score is <b>{grid[6][6]}</b>
								</span>

								<Button
									onClick={() => {
										updateGrid({ x: -1, y: -1, newValue: null });
										setDice([null, null]);
										setMove(-1);
										setMovesCoords([]);
									}}
									disabled={move !== 1 && move !== 2}
								>
									Start a new game
								</Button>
							</div>
						)}
					</>
				)}
			</div>

			<div className="m-auto flex w-full justify-center overflow-hidden p-2">
				<Grid
					grid={grid}
					firstMoveCoords={movesCoords[0]}
					onClick={
						move > -1 && move < 2
							? (x, y) => {
									updateGrid({ x, y, newValue: dice[move] });
									setMovesCoords([...movesCoords, { x, y }]);
									setMove(move + 1);
							  }
							: undefined
					}
				/>
			</div>

			{typeof highestScore === "number" && (
				<div className="mt-4">
					Your highest score is <b>{highestScore}</b>
				</div>
			)}

			<div className="flex-1" />
		</>
	);
}
