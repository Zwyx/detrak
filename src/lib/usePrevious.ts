import { useEffect, useRef } from "react";

export function usePrevious<T>(newValue: T) {
	const previousRef = useRef<T>();

	useEffect(() => {
		previousRef.current = newValue;
	});

	return previousRef.current;
}

export function usePreviousDefined<T>(newValue: T) {
	const previousRef = useRef<T>();

	useEffect(() => {
		if (newValue !== undefined) {
			previousRef.current = newValue;
		}
	});

	return previousRef.current;
}
