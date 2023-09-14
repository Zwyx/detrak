import { DeepReplace } from "~/lib/utils";

export const en = {
	app: {
		autoRollDice:
			"Dice are now unanimated and rolled automatically to allow you to play quicker. You can change this in the settings dialog.",
		bestScore: "best:",
		endOnGame: "Finished! Your score is",
		endOnGameWithNewScore: "Well done! Your new highest score is",
		numberOfGames_one: "{{count}} game",
		numberOfGames_other: "{{count}} games",
		rollDice: "roll dice",
		rollDice1: {
			part1:
				"The symbol you have selected has been inserted in the grid below.",
			part2: "Now, roll the dice!",
		},
		startNewGame: "Start a new game",
		welcome: {
			title: "Welcome to Detrak!",
			text: "Start by choosing one of the six symbols above.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "column",
			empty: "empty",
			row: "row",
		},
		clickGrid1: {
			part1:
				"Choose an empty cell in the grid to insert the symbol of the first dice.",
			part2: "The goal is to group identical symbols together.",
		},
		clickGrid2: {
			part1: "Choose another empty cell for the second symbol.",
			part2: "It must be directly next to the first one.",
		},
		rollDice2: {
			left: "Scores will be displayed in the right-most column, and the bottom-most row.",
			legend:
				"This is the legend for the score. For instance, five identical symbols on a row, a column, or the diagonal, give 10 points.",
			right: {
				part1:
					"The diagonal's score appears on both ends, so it is counted twice!",
				part2: "Roll the dice again to continue the game.",
			},
		},
		symbolNames: {
			bar: "bar",
			circle: "circle",
			cross: "cross",
			sharp: "sharp",
			triangle: "triangle",
			tripleBar: "triple bar",
		},
	},

	headerMenu: {
		detrak: "Detrak",
		digitalVersion: {
			madeBy: "This digital version has been made by me, ",
			webDeveloper:
				", an independent web developer from Australia, with the approval of Gigamic. Thank you again, Gigamic!",
		},
		gigamicGame: "Detrak is a copyrighted game published by ",
		openMenu: "Open menu",
		version: "version",
		writeToMe: "I hope you're enjoying it! Feel free to write to me at ",
	},

	languageSelector: {
		chooseLanguage: "Choose language",
	},

	themeSelector: {
		chooseTheme: "Choose theme",
		dark: "Dark",
		light: "Light",
		sameAsDevice: "Same as device",
	},

	settingsDialog: {
		openSettingsDialog: "Open settings dialog",
		settings: "Settings",

		alwaysShowScore: {
			title: "Always show the score",
			description:
				"Allow you to see your current score during the game, instead of only at the end.",
		},

		showScoreLegend: {
			title: "Show the score legend",
			description: "The legend placed above the grid.",
		},

		animateDice: {
			title: "Animate rolling dice",
			description: "Roll dice with a 3D animation.",
		},

		autoRollDice: {
			title: "Automatically roll the dice",
			notAvailableDuringTheFirstGame: "(not available during the first game)",
			description:
				"Dice will be rolled automatically once a move is complete (when the two symbols are placed on the grid). This removes the ability to undo the second symbol placement.",
		},

		showDiceMarker: {
			title: "Show dice marker",
			description:
				"Show a marker below the dice, the symbol of which you are about to play.",
		},

		showConfetti: {
			title: "Show confetti",
			description:
				"Show a confetti explosion when you beat your highest score!",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
} as const;

export type I18nLocale = DeepReplace<typeof en, [string, string]>;
