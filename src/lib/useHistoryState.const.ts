/* eslint-disable @typescript-eslint/no-explicit-any */
// Was extracted from the main file for React Refresh (see ESLint `react-refresh/only-export-components`)

import { useCallback } from "react";
import { Location, NavigateOptions, To, useLocation } from "react-router";
import { HistoryStateLink } from "./useHistoryState";

interface HistoryNavigateOptions<T> extends NavigateOptions {
	state?: T;
}

interface HistoryNavigateToFunction<T> {
	(to: To, options?: HistoryNavigateOptions<T>): void | Promise<void>;
}

export function useHistoryState<T>() {
	const { state }: Location<Partial<T>> = useLocation();
	// const originalNavigate = useNavigate();

	const pushState = useCallback(
		() => console.info("pushState"),
		[],
		// (newState: T) => {
		// 	console.info("pushState");
		// 	originalNavigate(location.pathname, {
		// 		state: { ...history.state.usr, ...newState },
		// 	});
		// };
		//  [originalNavigate],)
	);

	const replaceState = useCallback(
		() => console.info("replaceState"),
		[],
		// (newState: T) => {
		// 	console.info("replaceState");
		// 	originalNavigate(location.pathname, {
		// 		state: { ...history.state.usr, ...newState },
		// 		replace: true,
		// 	});
		// },
		// [originalNavigate],
	);

	const navigateTo: HistoryNavigateToFunction<T> = useCallback(
		() => console.info("navigateTo"),
		[],
		// (to, options) => {
		// 	console.info("navigateTo");
		// 	originalNavigate(to, {
		// 		...options,
		// 		...(options?.state
		// 			? { state: { ...history.state.usr, ...options.state } }
		// 			: { state: history.state.usr }),
		// 	});
		// },
		// [originalNavigate],
	);

	const navigateBack = useCallback(
		() => console.info("navigateBack"),
		[],
		// (delta: number = -1) => {
		// 	console.info("navigateBack");
		// 	originalNavigate(delta);
		// },
		// [originalNavigate],
	);

	const pushStateOrNavigateBack = useCallback(
		() => console.info("pushStateOrNavigateBack"),
		[],
		// (push: boolean, newState: T) => {
		// 	console.info("pushStateOrNavigateBack");
		// 	push ? pushState(newState) : navigateBack();
		// },
		// [pushState, navigateBack],
	);

	return {
		state: state || {},
		pushState: pushState as any,
		replaceState: replaceState as any,
		navigateTo: navigateTo as any,
		navigateBack: navigateBack as any,
		pushStateOrNavigateBack: pushStateOrNavigateBack as any,
		Link: HistoryStateLink<T>,
	};
}
