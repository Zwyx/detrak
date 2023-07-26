import { LucideChevronUp } from "lucide-react";
import { FC, useEffect, useRef } from "react";
import { useSettingsContext } from "~/lib/SettingsContext.const";
import { cn, usePrevious } from "~/lib/utils";
import {
	SymbolBack,
	SymbolBottom,
	SymbolFront,
	SymbolLeft,
	SymbolRight,
	SymbolTop,
} from "./Detrak";
import styles from "./Dice.module.css";

const faces = ["front", "top", "right", "left", "bottom", "back"] as const;
type Face = (typeof faces)[number];

interface DiceProps {
	value: number;
	marked: boolean;
	timestamp: number;
	hidden?: boolean;
}

export const Dice: FC<DiceProps> = ({ value, marked, timestamp, hidden }) => {
	const { settings } = useSettingsContext();

	const containerZ = useRef<HTMLDivElement>(null);
	const containerY = useRef<HTMLDivElement>(null);
	const containerX = useRef<HTMLDivElement>(null);

	const previousTimestamp = usePrevious(timestamp);

	const previousFace: Face = faces[usePrevious(value) || 0];
	const newFace: Face = faces[value];

	useEffect(() => {
		if (
			timestamp === previousTimestamp ||
			!containerZ.current ||
			!containerY.current ||
			!containerX.current
		) {
			return;
		}

		const animationOptions: KeyframeAnimationOptions = {
			duration: settings.animateDice ? 1500 + Math.random() * 1000 : 0,
			easing: "ease-out",
			fill: "forwards",
		};

		const previousY =
			previousFace === "front" ||
			previousFace === "top" ||
			previousFace === "bottom"
				? { transform: `rotate3d(0, 0, 0, 0deg)` }
				: previousFace === "right"
				? { transform: `rotate3d(0, 1, 0, -90deg)` }
				: previousFace === "left"
				? { transform: `rotate3d(0, 1, 0, 90deg)` }
				: { transform: `rotate3d(0, 1, 0, 180deg)` };

		containerZ.current.animate(
			[
				{},
				{
					transform: `rotate3d(0, 0, 1, ${
						settings.animateDice ? Math.random() * 60 - 30 : 0
					}deg)`,
				},
			],
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
	}, [
		previousTimestamp,
		timestamp,
		previousFace,
		newFace,
		settings.animateDice,
	]);

	return (
		<div>
			<div
				ref={containerZ}
				className={cn(
					styles.preserve3d,
					"transition-opacity duration-200",
					hidden && "opacity-0",
				)}
			>
				<div ref={containerY} className={styles.preserve3d}>
					<div
						ref={containerX}
						className={cn(
							styles.preserve3d,
							"h-[60px] w-[60px] xsm:h-[86px] xsm:w-[86px]",
						)}
					>
						{faces.map((face) => (
							<div
								key={face}
								className={cn(
									styles.preserve3d,
									"absolute aspect-square w-full border-[6px] border-background bg-background xsm:border-[9px]",
									styles[face],
								)}
							>
								<div className="absolute flex h-full w-full items-center justify-center rounded-2xl bg-dice">
									{face === "front" ? (
										<SymbolFront />
									) : face === "top" ? (
										<SymbolTop />
									) : face === "right" ? (
										<SymbolRight />
									) : face === "left" ? (
										<SymbolLeft />
									) : face === "bottom" ? (
										<SymbolBottom />
									) : (
										face === "back" && <SymbolBack bgColor={"bg-dice"} />
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{marked && (
				<div className="absolute mt-1 flex h-[60px] w-[60px] justify-center xsm:h-[86px] xsm:w-[86px]">
					<LucideChevronUp />
				</div>
			)}
		</div>
	);
};
