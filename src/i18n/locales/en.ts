import { DeepReplace } from "@/lib/utils";

export const en = {
	common: {
		close: "Close",
		symbolNames: {
			bar: "bar",
			cross: "cross",
			tripleBar: "triple bar",
			sharp: "sharp",
			triangle: "triangle",
			circle: "circle",
		},
	},

	app: {
		bestScore: "best score:",
		endOnGame: "Finished! Your score is",
		endOnGameWithNewScore: "Well done! New highest score:",
		numberOfGames_one: "{{count}} game",
		numberOfGames_other: "{{count}} games",
		rollDice: "roll dice",
		rollDice1: {
			part1:
				"The symbol you have selected has been inserted in the grid below.",
			part2: "Now, roll the dice!",
		},
		settingsChangeDice:
			"Dice are now unanimated and rolled automatically to allow you to play quicker. You can change this in the settings.",
		share: {
			shareYourScore: "Share your score",
			sendScore: "Send your score to your friends!",
			inviteFriends:
				"And invite them to challenge you on the same game (the symbols drawn during their game will be the same as yours).",
			title: "Detrak",
			text: "🎲 Just did {{count}} on Detrak! Can you do better? 🤞",
		},
		sr: {
			selectSymbol: "Select one of the six symbols to start.",
			newDraw: "New draw:",
			gameFinished: "Game finished! Score:",
			gameFinishedNewHighestScore: "Game finished! New highest score!",
		},
		replayGame: "Replay this game",
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
		settingsChangeScore:
			"Also, the score is now always shown, so you can quickly see which rows/columns need attention.",
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
			title: "New features available!",
			description: "Finish your game and reload the app.",
			action: "Reload app",
		},
		rules: {
			readTheRules: "Read the rules",
			rules: "Game rules",
			part1:
				"Roll the dice and place the obtained symbols in the grid to score as many points as possible.",
			part2:
				"You score points when you place identical symbols next to each other, in a row, a column, or the diagonal from bottom-left to top-right:",
			points: {
				part1: "2 symbols: +2 points,",
				part2: "3 symbols: +3 points,",
				part3: "4 symbols: +8 points,",
				part4: "5 symbols: +10 points,",
				part5: "no symbols: -5 points.",
			},
			part3:
				"The two symbols from the dice must be placed on adjacent free cells (horizontally or vertically).",
			part4:
				"It is impossible to place only one of the two symbols. Therefore, to prevent the game from ending prematurely, avoid isolating cells.",
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
			joinMe: "🎲 Join me for this game of Detrak!",
			shareLink: "Share link",
			copyLink: "Copy link to clipboard",
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
				"each day, the sequence of symbols drawn by the dice is be the same for everyone.",
			playWithFriends: "Play with friends",
			playWithFriendsDetails:
				"create a game and invite people to join. Here too, the sequence of symbols drawn during the game is the same for your friends and you. It works even without internet connection!",
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
			description: "Shows your current score during the game.",
		},

		showScoreWithContrast: {
			title: "Show the score with contrast instead of color",
			description: "Uses levels of grey instead of red, green, and blue.",
		},

		showScoreLegend: {
			title: "Show the score's legend",
			description: "Shows the legend placed above the grid.",
		},

		animateDice: {
			title: "Animate the rolling dice",
			description: "Rolls the dice with a 3D animation.",
		},

		autoRollDice: {
			title: "Automatically roll the dice",
			notAvailableDuringTheFirstGame: "(not available during the first game)",
			description:
				"Rolls the dice automatically once the two symbols are placed in the grid. This removes the ability to undo the second symbol placement.",
		},

		showDiceMarker: {
			title: "Show the dice marker",
			description: "Shows which symbol is to be placed on the grid.",
		},

		showConfetti: {
			title: "Show confetti",
			description:
				"Throws a confetti explosion when you beat your highest score!",
		},

		gridAtBottom: {
			title: "Place the grid at the bottom of the screen",
			description: "Useful to play with one hand on mobile.",
		},

		enableWakeLock: {
			title: "Keep the screen on while playing",
			description:
				"Prevents your device's screen from turing off, for five minutes, while a game is being played. Note that some Apple devices don't support this feature.",
		},

		showNavigationAlert: {
			title: "Ask for confirmation before leaving a game",
			description:
				"Shows a confirmation dialog when navigating away during a game.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};

export type I18nLocale = DeepReplace<typeof en, [string, string]>;
