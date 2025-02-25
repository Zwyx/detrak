import { Link, LinkProps } from "react-router";

interface HistoryStateLinkProps<T> extends LinkProps {
	state?: T;
}

export function HistoryStateLink<T>(props: HistoryStateLinkProps<T>) {
	return <Link {...props} />;
}
