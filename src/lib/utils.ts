import { ClassValue, clsx } from "clsx";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

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
