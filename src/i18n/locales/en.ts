import { DeepReplace } from "@/lib/utils";

export const en = {
	common: {
		close: "Close",
		symbolNames: {
			bar: "bar",
			circle: "circle",
			cross: "cross",
			sharp: "sharp",
			triangle: "triangle",
			tripleBar: "triple bar",
		},
	},

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
		sr: {
			selectSymbol: "Select one of the six symbols to start.",
			newDraw: "New draw:",
			gameFinished: "Game finished! Score:",
			gameFinishedNewHighestScore: "Game finished! New highest score!",
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
	},

	error: {
		error:
			"An unexpected error occurred, please reload the page. Sorry for the inconvenience.",
		oops: "Oops, something went wrong.",
		reload: "Reload",
	},

	headerMenu: {
		openMenu: "Open menu",
		detrak: "Detrak",
		newFeatures: {
			title: "New features available",
			description: "Finish your game and reload the app to update.",
			action: "Reload app",
		},
		rules: {
			readTheRules: "Read the rules",
			rules: "Game rules",
			part1:
				"Roll the dice and place the obtained symbols in the grid to score as many points as possible.",
			part2:
				"You score points when you place identical symbols next to each other, in a row, a column, or the diagonal from bottom left to top right:",
			points: {
				part1: "2 symbols: +2 points,",
				part2: "3 symbols: +3 points,",
				part3: "4 symbols: +8 points,",
				part4: "5 symbols: +10 points,",
				part5: "no symbols: -5 points,",
			},
			part3:
				"The two symbols from the dice must be placed on adjacent free cells (horizontally or vertically).",
			part4:
				"It is impossible to place only one of the two symbols. Therefore, to avoid the game ending prematurely, it is necessary to avoid isolating cells.",
		},
		gigamicGame: "Detrak is a copyrighted game published by",
		digitalVersion: {
			madeBy: "This digital version has been made by me,",
			webDeveloper:
				", an independent web developer from Australia, with the approval of Gigamic. Thank you again, Gigamic!",
		},
		writeToMe: "I hope you're enjoying it! Feel free to write to me at",
		termsOfUse: "Terms of use",
		privacyPolicy: "Privacy policy",
		copyright: {
			originalGame: "Original game",
			digitalVersion: "Digital version",
		},
		sourceCodeAvailableAt: "Source code available at",
		version: "Version",
		checkForUpdates: "Check for updates",
		updateAvailable:
			"Update available, finish your game and click here to update",
	},

	languageSelector: {
		chooseLanguage: "Choose language",
		language: "Language",
	},

	navigationBlocker: {
		title: "This will stop the current game, are you sure?",
		description: "Please confirm that you want to stop the current game.",
		confirmationCheckbox:
			"Always ask for confirmation before interrupting a game",
		keepPlaying: "Keep playing",
		stopGame: "Stop this game",
	},

	newGameDialog: {
		close: "Close",
		createGame: "Create a game",
		joinGame: "Join a game",
		pickAnotherDay: "Pick another day",
		play: "Play",
		playRandomGame: "Play a random game",
		playTodayGame: "Play today's game",
		playWithFriends: "Play with friends",
		shareCreate: {
			scanQrCode:
				"Ask your friends to scan this QR code, or share the link with them.",
			clickPlay: "Then click Play.",
			title: "Detrak",
			joinMe: "Join me for this game of Detrak",
			shareLink: "Share link",
			copyLink: "Copy link to clipboard",
			lastVersion: {
				part1: "Note: your friends need Detrak version",
				part2: "or superior. They can reload the app to update.",
			},
		},
		shareJoin: {
			useCamera: "Use your device's camera to scan a game's QR code.",
			openGameLink: "Or, open a game's link.",
			enterGameLink: "Or, enter a game's link below and click Play.",
		},
		stopGame: "Stop this game",
		title: {
			createGame: "Create a game",
			inviteToGame: "Invite people to the current game",
			joinGame: "Join a game",
			newGame: "New game",
			playWithFriends: "Play with friends",
			welcomeToNewVersion: "Welcome to the new version of Detrak!",
		},
		welcome: {
			intro: "There are two new ways of playing:",
			dailyGame: "The daily game",
			dailyGameDetails:
				"each day, the sequence of symbols drawn by the dice will be the same for everyone.",
			playWithFriends: "Play with friends",
			playWithFriendsDetails:
				"you can now create a game and invite people to join. Here too, the sequence of symbols drawn during the game will be the same for your friends and you. It even works without internet connection.",
			startPlaying: "Start playing!",
		},
		or: "or",
	},

	themeSelector: {
		chooseTheme: "Choose theme",
		theme: "Theme",
		sameAsDevice: "Same as device",
		light: "Light",
		dark: "Dark",
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
				"Dice will be rolled automatically once the two symbols are placed in the grid. This removes the ability to undo the second symbol placement.",
		},

		showDiceMarker: {
			title: "Show dice marker",
			description:
				"Show a marker below the dice's symbol to be placed on the grid.",
		},

		showConfetti: {
			title: "Show confetti",
			description:
				"Show a confetti explosion when you beat your highest score!",
		},

		showNavigationAlert: {
			title: "Ask for confirmation before interrupting a game",
			description:
				"Show a confirmation dialog when navigating away during a game.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
		game: "Game:",
	},
} as const;

export type I18nLocale = DeepReplace<typeof en, [string, string]>;
