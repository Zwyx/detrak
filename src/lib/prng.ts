export interface SeededPrng {
	getNext: () => number;
}

/**
 * Alphabet for game IDs
 *
 * - No vowels to prevent accidental insults
 * - 31 characters → 31^10 = 8.2e14 combinations (`Number.MAX_SAFE_INTEGER` = 2^53 - 1 = 9e15)
 * - `-` is placed last and not used when generating random IDs
 */
const GAME_ID_ALPHABET = "0123456789bcdfghjklmnpqrstvwxz-";

export const GAME_ID_REGEX = new RegExp(`^[${GAME_ID_ALPHABET}]{1,10}$`);

function getSeed(text: string): number {
	const base = GAME_ID_ALPHABET.length;

	let result = 0;

	for (let i = 0; i < text.length; i++) {
		result = result * base + GAME_ID_ALPHABET.indexOf(text.charAt(i));
	}

	return result;
}

/**
 * Splitmix32 PRNG;
 * see https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
export function getSeededPrng(seedText: string, overrideForTestOnly?: number) {
	let seed =
		typeof overrideForTestOnly === "number" ? overrideForTestOnly : (
			getSeed(seedText)
		);

	return {
		getNext: () => {
			seed |= 0;
			seed = (seed + 0x9e3779b9) | 0;
			let t = seed ^ (seed >>> 16);
			t = Math.imul(t, 0x21f0aaad);
			t = t ^ (t >>> 15);
			t = Math.imul(t, 0x735a2d97);
			return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
		},
	};
}

export function getRandomId(length?: number) {
	return Array.from({ length: length || Math.floor(Math.random() * 10) }, () =>
		// `- 1` because we don't include dash when generating random IDs
		GAME_ID_ALPHABET.charAt(
			Math.floor(Math.random() * (GAME_ID_ALPHABET.length - 1)),
		),
	).join("");
}

/**
 * Used to verify the repartition of the numbers drawn by the PRNG;
 * run `npm run check-prng`
 */
export function checkPrngNumbersRepartition() {
	const seedText = getRandomId();

	console.info(`Seed text: ${seedText}`);

	const seededPrng = getSeededPrng(seedText);

	const repartition: { [id: number]: number } = {};

	for (let i = 0; i < 100_000_000; i++) {
		const value = Math.floor(seededPrng.getNext() * 6);
		repartition[value] = (repartition[value] || 0) + 1;
	}

	const allNumberOfAppearances = Object.entries(repartition).map(
		([, numberOfAppearances]) => numberOfAppearances,
	);

	const numberOfAppearanceMin = Math.min(...allNumberOfAppearances);
	const numberOfAppearanceMax = Math.max(...allNumberOfAppearances);
	const numberOfAppearanceSpan = numberOfAppearanceMax - numberOfAppearanceMin;
	const numberOfAppearanceSpanPercent =
		Math.round(
			((numberOfAppearanceMax * 100) / numberOfAppearanceMin - 100) * 100,
		) / 100;

	console.info(Object.fromEntries(Object.entries(repartition).sort()));
	console.info(`Min: ${numberOfAppearanceMin}`);
	console.info(`Max: ${numberOfAppearanceMax}`);
	console.info(
		`Span: ${numberOfAppearanceSpan} (${numberOfAppearanceSpanPercent}% of min)`,
	);
}

function toBase(value: number): string {
	const base = GAME_ID_ALPHABET.length;

	let result = "";

	let dividend = value;
	let remainder;

	while (dividend >= base) {
		remainder = dividend % base;
		result = GAME_ID_ALPHABET[Math.floor(remainder)] + result;
		dividend = dividend / base;
	}

	result = GAME_ID_ALPHABET[Math.floor(dividend)] + result;

	return result;
}

/**
 * run `npm run find-remarkable-games`
 *
 * Remarkable games found so far:
 *
 * 2025-01-21 – 11 bars
 * 2025-08-09 – 11 circles
 * 2025-11-24 – 11 circles
 * 2026-06-07 – 11 triple bars
 * 2026-06-27 – 11 circles
 * 2026-11-30 – 11 sharps
 * 2028-01-05 – 11 bars
 * 2028-05-29 – 11 crosses
 * 2028-08-19 – 11 circles
 * 2028-10-05 – 12 triple bars
 * 2029-02-21 – 12 sharps
 * 2029-10-22 – 11 circles
 * 2030-02-19 – 11 crosses
 * 2030-04-03 – 11 triangles
 * 2030-08-26 – 11 sharps
 * 2030-10-06 – 11 crosses
 * 2030-12-03 – 11 triple bars
 * 2030-12-07 – 11 bars
 * 2032-07-28 – 12 triple bars
 * 2032-12-10 – 11 bars
 * 2034-01-27 – 11 circles
 * 3hpvl4m – 19 triple bars // cspell:disable-line
 * 5c07lxg – 19 triple bars
 * 1lv2nvk – 18 triangles
 * 1ndgkcs – 18 triple bars // cspell:disable-line
 * 1z8wpwz – 18 bars // cspell:disable-line
 * 11092082 – 17 circles
 * 305868256 – 17 sharps
 * 550478166 – 17 crosses
 */
export function findRemarkableGames() {
	const startTime = Date.now();

	const symbolNames = [
		"bars",
		"crosses",
		"triple bars",
		"sharps",
		"triangles",
		"circles",
	];

	const remarkableGames = [];

	// let year = 2025;
	// let month = 1;
	// let day = 1;

	for (let i = 0; i < 10_000_000_000; i++) {
		// day += 1;

		// if (day > 31) {
		// 	month += 1;
		// 	day = 1;
		// }

		// if (month > 12) {
		// 	year += 1;
		// 	month = 1;
		// }

		// const id = `${year}-${String(month).padStart(2, "0")}-${String(
		// 	day,
		// ).padStart(2, "0")}`;

		const seededPrng = getSeededPrng("", i);

		const symbols = Array.from({ length: 24 }, () =>
			Math.floor(seededPrng.getNext() * 6),
		);

		const counts = symbols.reduce(
			(acc, cur) => {
				acc[cur] += 1;
				return acc;
			},
			[0, 0, 0, 0, 0, 0],
		);

		const highestCount = counts.reduce<{ count: number; index: number }>(
			(acc, cur, j) => (cur > acc.count ? { count: cur, index: j } : acc),
			{ count: 0, index: 0 },
		);

		if (highestCount.count > 17) {
			const remarkable = `${toBase(i)} – ${highestCount.count} ${
				symbolNames[highestCount.index]
			}`;

			console.info(remarkable);

			remarkableGames.push(remarkable);
		}
	}

	console.info(`\nDone in ${(Date.now() - startTime) / 1000} s`);
}
