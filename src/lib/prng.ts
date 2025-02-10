export interface SeededPrng {
	getNext: () => number;
}

const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz-";

function getSeed(text: string): number {
	const base = ALPHABET.length;

	let result = 0;

	for (let i = 0; i < text.length; i++) {
		result = result * base + ALPHABET.indexOf(text.charAt(i));
	}

	return result;
}

/**
 * Splitmix32 PRNG;
 * see https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
export function getSeededPrng(seedText: string) {
	let seed = getSeed(seedText);

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

/**
 * Used to verify the repartition of the numbers drawn by the PRNG;
 * run `npm run check-prng`
 */
export function checkPrngNumbersRepartition() {
	const seedText = Array.from({ length: Math.floor(Math.random() * 10) }, () =>
		ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length)),
	).join("");

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
