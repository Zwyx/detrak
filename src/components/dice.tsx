import { FC, useRef } from "react";
import { cn } from "~/lib/utils";
import {
	SymbolBack,
	SymbolBottom,
	SymbolFront,
	SymbolLeft,
	SymbolRight,
	SymbolTop,
} from "./detrak";
import styles from "./dice.module.css";

const faces = ["front", "top", "right", "left", "bottom", "back"] as const;
type Face = (typeof faces)[number];

const animationOptions: KeyframeAnimationOptions = {
	duration: 2000,
	easing: "ease-out",
	fill: "forwards",
};

interface DiceProps {
	placeholder?: string;
}

export const Dice: FC<DiceProps> = () => {
	const containerZ = useRef<HTMLDivElement>(null);
	const containerY = useRef<HTMLDivElement>(null);
	const containerX = useRef<HTMLDivElement>(null);

	const face = useRef<Face>("front");

	const randomDice = () => {
		if (!containerZ.current || !containerY.current || !containerX.current) {
			return;
		}

		const newFace = faces[Math.floor(Math.random() * 6)];

		const previousY =
			face.current === "front" ||
			face.current === "top" ||
			face.current === "bottom"
				? { transform: `rotate3d(0, 0, 0, 0deg)` }
				: face.current === "right"
				? { transform: `rotate3d(0, 1, 0, -90deg)` }
				: face.current === "left"
				? { transform: `rotate3d(0, 1, 0, 90deg)` }
				: { transform: `rotate3d(0, 1, 0, 180deg)` };

		containerZ.current.animate(
			[{}, { transform: `rotate3d(0, 0, 1, ${Math.random() * 60 - 30}deg)` }],
			animationOptions,
		);

		switch (newFace) {
			case "front":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-1080deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[
						{},
						{ transform: `rotate3d(1, 0, 0, 15deg)` },
						{ transform: `rotate3d(0, 0, 0, 0deg)` },
					],
					animationOptions,
				);
				break;

			case "top":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-1080deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[{}, { transform: `rotate3d(1, 0, 0, -90deg)` }],
					animationOptions,
				);
				break;

			case "right":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-1170deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[
						{},
						{ transform: `rotate3d(1, 0, 0, 15deg)` },
						{ transform: `rotate3d(0, 0, 0, 0deg)` },
					],
					animationOptions,
				);
				break;

			case "left":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-990deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[
						{},
						{ transform: `rotate3d(1, 0, 0, 15deg)` },
						{ transform: `rotate3d(0, 0, 0, 0deg)` },
					],
					animationOptions,
				);
				break;

			case "bottom":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-1080deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[
						{},
						{ transform: `rotate3d(1, 0, 0, 15deg)` },
						{ transform: `rotate3d(1, 0, 0, 90deg)` },
					],
					animationOptions,
				);
				break;

			case "back":
				containerY.current.animate(
					[previousY, { transform: `rotateY(-1260deg)` }],
					animationOptions,
				);

				containerX.current.animate(
					[{}, { transform: `rotate3d(0, 0, 0, 0deg)` }],
					animationOptions,
				);
				break;
		}

		face.current = newFace;
	};

	return (
		<div ref={containerZ} className={styles.preserve3d} onClick={randomDice}>
			<div ref={containerY} className={styles.preserve3d}>
				<div
					ref={containerX}
					className={cn(styles.preserve3d, "h-[100px] w-[100px]")}
				>
					{faces.map((face_) => (
						<div
							key={face_}
							className={cn(
								"absolute flex h-[100px] w-[100px] items-center justify-center rounded-xl border-[5px] border-secondary bg-secondary",
								styles[face_],
							)}
						>
							{face_ === "front" ? (
								<SymbolFront />
							) : face_ === "top" ? (
								<SymbolTop />
							) : face_ === "right" ? (
								<SymbolRight />
							) : face_ === "left" ? (
								<SymbolLeft />
							) : face_ === "bottom" ? (
								<SymbolBottom />
							) : (
								face_ === "back" && <SymbolBack bgColor={"bg-secondary"} />
							)}
						</div>
					))}
					{/* <div
						className={cn(
							styles.face,
							"flex items-center justify-center",
							styles.front,
						)}
					>
						<Symbol0 />
					</div>
					<div className={cn(styles.face, "bg-background", styles.top)}>
						top
					</div>
					<div className={cn(styles.face, "bg-background", styles.right)}>
						right
					</div>
					<div className={cn(styles.face, "bg-background", styles.left)}>
						left
					</div>
					<div className={cn(styles.face, "bg-background", styles.bottom)}>
						bottom
					</div>
					<div className={cn(styles.face, "bg-background", styles.back)}>
						back
					</div> */}
				</div>
			</div>
		</div>
	);
};
