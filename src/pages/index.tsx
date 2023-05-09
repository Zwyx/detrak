import { Inter } from "next/font/google";
import { useReducer, useState } from "react";
import { Cell, Grid, TCell, TGrid, TLine } from "~/components/detrak";
import { Button } from "~/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

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
				? [endOfGame ? 0 : null, ...row.slice(1, -1), diagonalScore]
				: index >= 1 && index <= 5
				? [...row.slice(0, -1), rowScores[index]]
				: [diagonalScore, ...columnScores.slice(1, -1), totalScore],
		);
	};

	const [grid, updateGrid] = useReducer(gridReducer, initialGrid);

	const [dices, setDices] = useState<TCell[]>([null, null]);
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	return (
		// is `min-h-screen` necessary to have the header bar? it create an unnecessary scroll on mobile
		<main
			className={`min-h-screen_DEACTIVATED flex flex-col items-center justify-between p-4 ${inter.className}`}
		>
			<div className="m-10 flex h-[200px] w-full flex-col items-center justify-center">
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
										start
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
							<Button
								onClick={() => {
									setDices([
										Math.floor(Math.random() * 6),
										Math.floor(Math.random() * 6),
									]);
									setMove(0);
									setMovesCoords([]);
								}}
								disabled={move === 0 || move === 1 || grid[0][0] !== null}
							>
								Roll the dices!
							</Button>

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
								<Cell value={dices[0]} />

								<div className="flex-1" />

								<Cell value={dices[1]} />

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
										setDices([null, null]);
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

			<Grid
				grid={grid}
				firstMoveCoords={movesCoords[0]}
				onClick={
					move > -1 && move < 2
						? (x, y) => {
								updateGrid({ x, y, newValue: dices[move] });
								setMovesCoords([...movesCoords, { x, y }]);
								setMove(move + 1);
						  }
						: undefined
				}
			/>

			<div className="flex-1" />
		</main>
	);
}
