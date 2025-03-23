let wakeLockSentinel: WakeLockSentinel | undefined;
let wakeLockTimeout: ReturnType<typeof setTimeout> | undefined;

export function requestWakeLock() {
	navigator.wakeLock
		?.request("screen")
		.then((newWakeLockSentinel) => {
			wakeLockSentinel = newWakeLockSentinel;
			setWakeLockTimeout();
		})
		.catch(() => {});
}

export function releaseWakeLock() {
	wakeLockSentinel?.release();
	clearTimeout(wakeLockTimeout);
}

function setWakeLockTimeout() {
	wakeLockTimeout = setTimeout(
		() => wakeLockSentinel?.release(),
		5 * 60 * 1000,
	);
}

export function resetWakeLockTimeout() {
	if (wakeLockTimeout) {
		clearTimeout(wakeLockTimeout);
		setWakeLockTimeout();
	}
}
