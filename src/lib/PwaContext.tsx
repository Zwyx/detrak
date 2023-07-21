import { ReactNode, createContext, useEffect, useState } from "react";
import { registerSW } from "virtual:pwa-register";

export const PwaContext = createContext<
	| {
			pwaNeedsRefresh: boolean;
			pwaRefresh: (() => void) | undefined;
	  }
	| undefined
>(undefined);

export const PwaContextProvider = ({ children }: { children: ReactNode }) => {
	const [needsRefresh, setNeedsRefresh] = useState<boolean>(false);
	const [refresh, setRefresh] = useState<() => void>();

	useEffect(() => {
		setRefresh(() =>
			registerSW({
				onNeedRefresh: () => setNeedsRefresh(true),
			}),
		);
	}, []);

	return (
		<PwaContext.Provider
			value={{ pwaNeedsRefresh: needsRefresh, pwaRefresh: refresh }}
		>
			{children}
		</PwaContext.Provider>
	);
};
