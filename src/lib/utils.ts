import { ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { TFunction } from "i18next";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

// https://stackoverflow.com/questions/60437172/typescript-deep-replace-multiple-types
type Replacement<M extends [unknown, unknown], T> = M extends unknown
	? [T] extends [M[0]]
		? M[1]
		: never
	: never;
export type DeepReplace<T, M extends [unknown, unknown]> = {
	[P in keyof T]: T[P] extends M[0]
		? Replacement<M, T[P]>
		: T[P] extends object
		? DeepReplace<T[P], M>
		: T[P];
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function usePrevious<T>(newValue: T) {
	const previousRef = useRef<T>();

	useEffect(() => {
		previousRef.current = newValue;
	});

	return previousRef.current;
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
