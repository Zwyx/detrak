export const initPlausible = (appMode: string, localeCode: string) => {
	const appVersion = import.meta.env.VITE_APP_VERSION;
	const apiUrl = import.meta.env.VITE_PLAUSIBLE_API_URL;

	if (
		!import.meta.env.PROD ||
		!apiUrl ||
		/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(
			location.hostname,
		) ||
		location.protocol === "file:" ||
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any)._phantom ||
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any).__nightmare ||
		window.navigator.webdriver ||
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window as any).Cypress
	) {
		return;
	}

	const trigger = (eventName: string) => {
		const payload = {
			n: eventName,
			u: `${location.href}${
				location.href.includes("?") ? "&" : "?"
			}utm_medium=${appMode}&utm_campaign=${appVersion}&utm_content=${localeCode}`,
			d: location.host,
			r: document.referrer || null,
		};

		const request = new XMLHttpRequest();

		request.open("POST", apiUrl, true);
		request.setRequestHeader("Content-Type", "text/plain");
		request.send(JSON.stringify(payload));
	};

	let lastPage: string;

	const page = () => {
		if (lastPage === location.pathname) {
			return;
		}

		lastPage = location.pathname;
		trigger("pageview");
	};

	const his = window.history;

	if (his.pushState) {
		const originalPushState = his["pushState"];

		his.pushState = function (...args) {
			originalPushState.apply(this, args);
			page();
		};

		window.addEventListener("popstate", page);
	}

	page();
};
