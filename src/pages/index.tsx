import { Inter } from "next/font/google";
import { Grid } from "~/components/detrak";
import { Button } from "~/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
		>
			Hello
			<Button asChild>
				<a>Button!</a>
			</Button>
			<Grid
				content={[
					[0, 0, 0, 0, 0, 0, 0],
					[0, 0, 1, 2, 3, 4, 1],
					[0, 0, 1, 2, 3, 4, 2],
					[0, 1, 2, 3, 4, 5, 3],
					[0, 0, 1, 2, 3, 4, 4],
					[0, 0, 1, 2, 3, 4, 5],
					[0, 0, -5, 9, 8, 7, 65],
				]}
			/>
			<div className="flex-1" />
		</main>
	);
}
