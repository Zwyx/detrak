import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { registerSW } from "virtual:pwa-register";
import { PwaContext } from "./PwaContext.const";

const APP_VERSION = import.meta.env.VITE_APP_VERSION;

export const PwaContextProvider = ({ children }: PropsWithChildren) => {
	const [newMajorVersionAvailable, setNewMajorVersionAvailable] =
		useState(false);
	const [newMajorVersionAcknowledged, setNewMajorVersionAcknowledged] =
		useState(false);

	const [update, setUpdate] = useState<() => Promise<void>>();
	const [refreshPending, setRefreshPending] = useState(false);
	const [refresh, setRefresh] = useState<() => Promise<void>>();

	const checkForNewVersion = useCallback(
		() =>
			fetch(`https://${location.host}/.well-known/version`)
				.then((res) => res.text())
				.then((latestVersion) => {
					if (APP_VERSION !== latestVersion) {
						update?.();

						const majorAppVersion = APP_VERSION.split(".")[0];
						const majorLatestVersion = latestVersion.split(".")[0];

						if (majorAppVersion !== majorLatestVersion) {
							setNewMajorVersionAvailable(true);
						}
					}
				}),
		[update],
	);

	useEffect(() => {
		setRefresh(() =>
			registerSW({
				onRegisteredSW: (_, serviceWorkerRegistration) => {
					if (serviceWorkerRegistration) {
						setUpdate(() => serviceWorkerRegistration.update);
						setInterval(checkForNewVersion, 24 * 60 * 60 * 1000);
					}
				},
				onNeedRefresh: () => setRefreshPending(true),
			}),
		);
	}, [checkForNewVersion]);

	return (
		<PwaContext.Provider
			value={{
				version: APP_VERSION,
				refreshReady: refreshPending && !!refresh,
				newMajorVersionReady:
					newMajorVersionAvailable && refreshPending && !!refresh,
				newMajorVersionAcknowledged,
				setNewMajorVersionAcknowledged,
				checkForNewVersion,
				refresh,
			}}
		>
			{children}
		</PwaContext.Provider>
	);
};
