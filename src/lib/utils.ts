import { ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { TFunction } from "i18next";
import { twMerge } from "tailwind-merge";
import { DetrakGrid } from "./common";

// https://stackoverflow.com/questions/60437172/typescript-deep-replace-multiple-types
type Replacement<M extends [unknown, unknown], T> =
	M extends unknown ?
		[T] extends [M[0]] ?
			M[1]
		:	never
	:	never;
export type DeepReplace<T, M extends [unknown, unknown]> = {
	[P in keyof T]: T[P] extends M[0] ? Replacement<M, T[P]>
	: T[P] extends object ? DeepReplace<T[P], M>
	: T[P];
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date | "today") {
	return format(date === "today" ? new Date() : date, "yyyy-MM-dd");
}

export function getSymbolNames(t: TFunction) {
	return [
		t("symbolNames.bar", { ns: "common" }),
		t("symbolNames.cross", { ns: "common" }),
		t("symbolNames.tripleBar", { ns: "common" }),
		t("symbolNames.sharp", { ns: "common" }),
		t("symbolNames.triangle", { ns: "common" }),
		t("symbolNames.circle", { ns: "common" }),
	];
}

export const getCellColor = (
	score: number,
	mode: "css" | "unicode",
	contrast: boolean = false,
) =>
	score < -4 ?
		mode === "css" ?
			contrast ?
				"bg-slate-500 text-slate-100 dark:bg-slate-400 dark:text-slate-900"
			:	"bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200"
		:	"\ud83d\udd34"
	: score < 4 ?
		mode === "css" ?
			contrast ?
				"bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-slate-300"
			:	"bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
		:	"\ud83d\udfe2"
	: score < 35 ?
		mode === "css" ?
			contrast ?
				"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
			:	"bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
		:	"\ud83d\udd35"
	: score < 50 ?
		mode === "css" ?
			contrast ?
				"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
			:	"bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200"
		:	"\ud83d\udfe3"
	: mode === "css" ?
		contrast ?
			"bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
		:	"bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200"
	:	"\ud83d\udfe1";

/**
 * Example grid:
 * ⚪⚪⚪⚪⚪⚪🔵
 * ⚪🔳🔳🔳🔳🔳🔵
 * ⚪🔳🔳🔳🔳🔳🟢
 * ⚪🔳🔳🔳🔳🔳🔵
 * ⚪🔳🔳🔳🔳🔳🟢
 * ⚪🔳🔳🔳🔳🔳🔵
 * 🔵🟢🔴🟢🔵🔵🟣
 *
 * -5- 🔴
 * -4+ 🟢
 *  4+ 🔵
 * 35+ 🟣
 * 50+ 🟡
 *
 * ⬛       \u2b1b - ⚫       \u26ab
 * ⬜       \u2b1c - ⚪       \u26aa
 * 🔳 \ud83d\udd33
 * 🟥 \ud83d\udfe5 - 🔴 \ud83d\udd34
 * 🟫 \ud83d\udfeb - 🟤 \ud83d\udfe4
 * 🟧 \ud83d\udfe7 - 🟠 \ud83d\udfe0
 * 🟨 \ud83d\udfe8 - 🟡 \ud83d\udfe1
 * 🟩 \ud83d\udfe9 - 🟢 \ud83d\udfe2
 * 🟦 \ud83d\udfe6 - 🔵 \ud83d\udd35
 * 🟪 \ud83d\udfea - 🟣 \ud83d\udfe3
 */
export const getUnicodeGrid = (grid: DetrakGrid) =>
	grid
		.map((row, y) =>
			row
				.map((value, x) =>
					(x === 0 && y < 6) || (x < 6 && y === 0) ? "\u26aa"
					: x < 6 && y < 6 ? "\ud83d\udd33"
					: getCellColor(Number(value), "unicode"),
				)
				.join(""),
		)
		.join("\n");
