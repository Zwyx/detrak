let wakeLockSentinel: WakeLockSentinel | undefined;

export function requestWakeLock() {
	navigator.wakeLock
		?.request("screen")
		.then((newWakeLockSentinel) => {
			wakeLockSentinel = newWakeLockSentinel;
			setTimeout(() => wakeLockSentinel?.release(), 5 * 60 * 1000);
		})
		.catch(() => {});
}

export function releaseWakeLock() {
	wakeLockSentinel?.release();
}
