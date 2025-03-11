// Was extracted from the main file for React Refresh (see ESLint `react-refresh/only-export-components`)

import { useCallback } from "react";
import {
	Location,
	NavigateOptions,
	To,
	useLocation,
	useNavigate,
} from "react-router";
import { HistoryStateLink } from "./useHistoryState";

interface HistoryNavigateOptions<T> extends NavigateOptions {
	state?: T;
}

// Couldn't find a way to extend React Router's NavigateFunction, replacing the type of `options`
interface HistoryNavigateFunction<T> {
	(to: To, options?: HistoryNavigateOptions<T>): void;
	(delta: number): void;
}

export interface HistoryStateUserAction {
	userAction: boolean;
}

export function useHistoryState<T>() {
	const { state }: Location<Partial<T>> = useLocation();
	const originalNavigate = useNavigate();

	const pushState = useCallback(
		(newState: T) => originalNavigate(location.pathname, { state: newState }),
		[originalNavigate],
	);

	const replaceState = useCallback(
		(newState: T) =>
			originalNavigate(location.pathname, { state: newState, replace: true }),
		[originalNavigate],
	);

	const navigate: HistoryNavigateFunction<T> = originalNavigate;

	const pushStateOrNavigateBack = (push: boolean, newState: T) =>
		push ? pushState(newState) : navigate(-1);

	return {
		state: state || {},
		pushState,
		replaceState,
		navigate,
		pushStateOrNavigateBack,
		Link: HistoryStateLink<T>,
	};
}
