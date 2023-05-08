import { Inter } from "next/font/google";
import { useReducer, useState } from "react";
import { Cell, Grid } from "~/components/detrak";
import { Button } from "~/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const gridReducer = (
		state: number[][],
		{ x, y, newValue }: { x: number; y: number; newValue: number },
	) =>
		state.map((row, r) =>
			row.map((value, c) => (r === y && c === x ? newValue : value)),
		);

	const [grid, updateGrid] = useReducer(
		gridReducer,
		Array(7)
			.fill(0)
			.map(() => Array(7).fill(0)),
	);

	const [dices, setDices] = useState([0, 0]);
	const [move, setMove] = useState(-1);
	const [movesCoords, setMovesCoords] = useState<{ x: number; y: number }[]>(
		[],
	);

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
		>
			<div className="m-10 flex h-[200px] w-full flex-col items-center justify-center">
				{grid[1][1] === 0 && (
					<>
						<span className="mb-10">Click a symbol to start</span>

						<div className="relative flex w-full min-w-[300px] max-w-[700px] ">
							<div className="flex-[0.5]" />
							{Array(6)
								.fill(0)
								.map((_, i) => (
									<Cell
										key={i}
										value={i + 1}
										start
										onClick={() => updateGrid({ x: 1, y: 1, newValue: i + 1 })}
									/>
								))}
							<div className="flex-[0.5]" />
						</div>
					</>
				)}

				{grid[1][1] !== 0 && grid[6][6] === 0 && (
					<>
						<div className="mb-8 flex gap-4">
							<Button
								onClick={() => {
									setDices([
										Math.floor(Math.random() * 6 + 1),
										Math.floor(Math.random() * 6 + 1),
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
										newValue: 0,
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
				content={grid}
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
