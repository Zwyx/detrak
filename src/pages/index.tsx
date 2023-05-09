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
	// console.log(`-5: ${getLineScore([null, 1, 2, 3, 4, 5, null])}`);
	// console.log(`-5: ${getLineScore([1, 1, 2, 3, 4, 5, 5])}`);
	// console.log(`2: ${getLineScore([null, 1, 2, 3, 3, 5, null])}`);
	// console.log(`4: ${getLineScore([null, 1, 1, 3, 3, 5, null])}`);
	// console.log(`4: ${getLineScore([1, 1, 1, 5, 3, 3, 5])}`);
	// console.log(`3: ${getLineScore([1, 1, 1, 1, 4, 3, 5])}`);
	// console.log(`5: ${getLineScore([1, 1, 1, 1, 3, 3, 5])}`);
	// console.log(`8: ${getLineScore([1, 1, 1, 1, 1, 3, 5])}`);
	// console.log(`10: ${getLineScore([1, 1, 1, 1, 1, 1, 5])}`);
	// console.log(`3: ${getLineScore([1, 1, 1, 1, null, 1, 5])}`);

	const gridReducer = (
		prevGrid: TGrid,
		{ x, y, newValue }: { x: number; y: number; newValue: TCell },
	): TGrid => {
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

		return grid.map((row, index) =>
			index === 0
				? [...row.slice(0, -1), diagonalScore]
				: index >= 1 && index <= 5
				? [...row.slice(0, -1), rowScores[index]]
				: [diagonalScore, ...columnScores.slice(1, -1), totalScore],
		);
	};

	const [grid, updateGrid] = useReducer(
		gridReducer,
		Array(7)
			.fill(0)
			.map(() => Array(7).fill(null)),
	);

	const [dices, setDices] = useState<TCell[]>([null, null]);
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
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
								disabled={move === 0 || move === 1}
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

						<div className="relative flex w-full min-w-[300px] max-w-[700px] ">
							<div className="flex-[2]" />
							<Cell value={dices[0]} />

							<div className="flex-1" />

							<Cell value={dices[1]} />

							<div className="flex-[2]" />
						</div>
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
