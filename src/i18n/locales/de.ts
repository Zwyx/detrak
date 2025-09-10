import { I18nLocale } from "./en";

export const de: I18nLocale = {
	common: {
		close: "Schließen",
		symbolNames: {
			bar: "Balken",
			cross: "Kreuz",
			tripleBar: "Dreifachbalken",
			sharp: "Raute",
			triangle: "Dreieck",
			circle: "Kreis",
		},
	},

	app: {
		bestScore: "beste Punktzahl:",
		endOnGame: "Fertig! Ihre Punktzahl ist",
		endOnGameWithNewScore: "Gut gemacht! Neue Höchstpunktzahl:",
		numberOfGames_zero: "0 Spiele",
		numberOfGames_one: "1 Spiel",
		numberOfGames_other: "{{count}} Spiele",
		rollDice: "Würfel werfen",
		rollDice1: {
			part1:
				"Das Symbol, das Sie ausgewählt haben, wurde in das Raster unten eingefügt.",
			part2: "Werfen Sie jetzt die Würfel!",
		},
		settingsChangeDice:
			"Die Würfel sind jetzt nicht animiert und werden automatisch geworfen, damit Sie schneller spielen können. Sie können dies in den Einstellungen ändern.",
		share: {
			shareYourScore: "Teilen Sie Ihre Punktzahl",
			sendScore: "Senden Sie Ihre Punktzahl an Ihre Freunde!",
			inviteFriends:
				"Und laden Sie sie ein, Sie im gleichen Spiel herauszufordern (die während ihres Spiels gezogenen Symbole werden die gleichen sein wie Ihre).",
			title: "Detrak",
			text: "🎲 Habe gerade {{count}} bei Detrak erreicht! Kannst du es besser? 🤞",
		},
		sr: {
			selectSymbol: "Wählen Sie eines der sechs Symbole zum Starten.",
			newDraw: "Neue Ziehung:",
			gameFinished: "Spiel beendet! Punktzahl:",
			gameFinishedNewHighestScore: "Spiel beendet! Neue Höchstpunktzahl!",
		},
		replayGame: "Dieses Spiel wiederholen",
		startNewGame: "Neues Spiel starten",
		welcome: {
			title: "Willkommen bei Detrak!",
			text: "Beginnen Sie mit der Auswahl eines der sechs Symbole oben.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "Spalte",
			empty: "leer",
			row: "Zeile",
		},
		clickGrid1: {
			part1:
				"Wählen Sie eine leere Zelle im Raster, um das Symbol des ersten Würfels einzufügen.",
			part2: "Das Ziel ist es, identische Symbole zusammenzugruppieren.",
		},
		clickGrid2: {
			part1: "Wählen Sie eine weitere leere Zelle für das zweite Symbol.",
			part2: "Es muss direkt neben dem ersten stehen.",
		},
		rollDice2: {
			left: "Punkte werden in der rechtesten Spalte und der untersten Zeile angezeigt.",
			legend:
				"Dies ist die Legende für die Punktzahl. Zum Beispiel geben fünf identische Symbole in einer Zeile, Spalte oder Diagonale 10 Punkte.",
			right: {
				part1:
					"Die Punktzahl der Diagonale erscheint an beiden Enden, wird also doppelt gezählt!",
				part2: "Werfen Sie die Würfel erneut, um das Spiel fortzusetzen.",
			},
		},
		settingsChangeScore:
			"Außerdem wird die Punktzahl jetzt immer angezeigt, sodass Sie schnell sehen können, welche Zeilen/Spalten Aufmerksamkeit benötigen.",
	},

	error: {
		oops: "Ups, etwas ist schiefgelaufen.",
		error:
			"Ein unerwarteter Fehler ist aufgetreten, bitte laden Sie die Seite neu. Entschuldigung für die Unannehmlichkeiten.",
		googleTranslateNote:
			"Hinweis: Wenn Sie die Übersetzungsfunktion von Google Chrome verwenden, um diese Seite zu übersetzen, ist diese Funktion wahrscheinlich die Ursache für diesen Fehler.",
		reload: "Neu laden",
	},

	headerMenu: {
		openMenu: "Menü öffnen",
		detrak: "Detrak",
		newFeatures: {
			title: "Neue Funktionen verfügbar!",
			description: "Beenden Sie Ihr Spiel und laden Sie die App neu.",
			action: "App neu laden",
		},
		install: {
			installableWebApp: "Detrak ist eine installierbare Web-App!",
			description:
				"Sie können sie zu Ihrem Startbildschirm hinzufügen und auch offline spielen.",
			install: "Detrak installieren",
		},
		gigamicGame:
			"Detrak ist ein urheberrechtlich geschütztes Spiel, veröffentlicht von",
		digitalVersion: {
			madeBy: "Diese digitale Version wurde von mir erstellt,",
			webDeveloper:
				", einem unabhängigen Webentwickler, mit der Genehmigung von Gigamic. Nochmals vielen Dank, Gigamic!",
		},
		writeToMe: "Ich hoffe, es gefällt Ihnen! Schreiben Sie mir gerne an",
		rules: {
			readTheRules: "Regeln lesen",
			rules: "Spielregeln",
			part1:
				"Werfen Sie die Würfel und platzieren Sie die erhaltenen Symbole im Raster, um so viele Punkte wie möglich zu erzielen.",
			part2:
				"Sie erhalten Punkte, wenn Sie identische Symbole nebeneinander platzieren, in einer Zeile, Spalte oder der Diagonale von unten links nach oben rechts:",
			points: {
				part1: "2 Symbole: +2 Punkte,",
				part2: "3 Symbole: +3 Punkte,",
				part3: "4 Symbole: +8 Punkte,",
				part4: "5 Symbole: +10 Punkte,",
				part5: "keine Symbole: -5 Punkte.",
			},
			part3:
				"Die beiden Symbole von den Würfeln müssen auf benachbarten freien Zellen platziert werden (horizontal oder vertikal).",
			part4:
				"Es ist unmöglich, nur eines der beiden Symbole zu platzieren. Um zu verhindern, dass das Spiel vorzeitig endet, vermeiden Sie es, Zellen zu isolieren.",
		},
		termsOfUse: "Nutzungsbedingungen",
		privacyPolicy: "Datenschutzrichtlinie",
		copyright: {
			originalGame: "Originalspiel",
			digitalVersion: "Digitale Version",
		},
		sourceCodeAvailableAt: "Quellcode verfügbar unter",
		version: "Version",
		checkForUpdates: "Nach Updates suchen",
		updateAvailable:
			"Update verfügbar, beenden Sie Ihr Spiel und klicken Sie hier zum Aktualisieren",
	},

	languageSelector: {
		chooseLanguage: "Sprache wählen",
		language: "Sprache",
		changeLanguageError:
			"Beim Einrichten der neuen Sprache ist ein Fehler aufgetreten. Bitte stellen Sie sicher, dass Ihr Gerät Zugang zum Internet hat, starten Sie die App neu und versuchen Sie es erneut",
	},

	navigationBlocker: {
		title: "Dies wird das aktuelle Spiel beenden, sind Sie sicher?",
		description:
			"Bitte bestätigen Sie, dass Sie das aktuelle Spiel beenden möchten.",
		confirmationCheckbox:
			"Immer nach Bestätigung fragen, bevor ein Spiel unterbrochen wird",
		keepPlaying: "Weiterspielen",
		stopGame: "Dieses Spiel beenden",
	},

	newGameDialog: {
		close: "Schließen",
		createGame: "Spiel erstellen",
		joinGame: "Spiel beitreten",
		pickAnotherDay: "Anderen Tag wählen",
		play: "Spielen",
		playRandomGame: "Zufälliges Spiel spielen",
		playTodayGame: "Heutiges Spiel spielen",
		playWithFriends: "Mit Freunden spielen",
		shareCreate: {
			scanQrCode:
				"Bitten Sie Ihre Freunde, diesen QR-Code zu scannen, oder teilen Sie den Link mit ihnen.",
			clickPlay: "Klicken Sie dann auf Spielen.",
			title: "Detrak",
			joinMe: "🎲 Mach mit bei diesem Detrak-Spiel!",
			shareLink: "Link teilen",
			copyLink: "Link in Zwischenablage kopieren",
		},
		shareJoin: {
			useCamera:
				"Verwenden Sie die Kamera Ihres Geräts, um den QR-Code eines Spiels zu scannen.",
			openGameLink: "Oder öffnen Sie einen Spiel-Link.",
			enterGameLink:
				"Oder geben Sie unten einen Spiel-Link ein und klicken Sie auf Spielen.",
		},
		stopGame: "Dieses Spiel beenden",
		title: {
			createGame: "Spiel erstellen",
			inviteToGame: "Personen zum aktuellen Spiel einladen",
			joinGame: "Spiel beitreten",
			newGame: "Neues Spiel",
			playWithFriends: "Mit Freunden spielen",
			welcomeToNewVersion: "Willkommen zur neuen Version von Detrak!",
		},
		welcome: {
			intro: "Es gibt zwei neue Spielmöglichkeiten:",
			dailyGame: "Das tägliche Spiel",
			dailyGameDetails:
				"jeden Tag ist die Reihenfolge der von den Würfeln gezogenen Symbole für alle gleich.",
			playWithFriends: "Mit Freunden spielen",
			playWithFriendsDetails:
				"erstellen Sie ein Spiel und laden Sie Personen zum Beitreten ein. Auch hier ist die Reihenfolge der während des Spiels gezogenen Symbole für Ihre Freunde und Sie gleich. Es funktioniert sogar ohne Internetverbindung!",
			startPlaying: "Beginnen Sie zu spielen!",
		},
		or: "oder",
	},

	themeSelector: {
		chooseTheme: "Design wählen",
		theme: "Design",
		sameAsDevice: "Wie Gerät",
		light: "Hell",
		dark: "Dunkel",
	},

	settingsDialog: {
		openSettingsDialog: "Einstellungsdialog öffnen",
		settings: "Einstellungen",

		alwaysShowScore: {
			title: "Punktzahl immer anzeigen",
			description: "Zeigt Ihre aktuelle Punktzahl während des Spiels an.",
		},

		showScoreWithContrast: {
			title: "Punktzahl mit Kontrast statt Farbe anzeigen",
			description: "Verwendet Graustufen anstelle von Rot, Grün und Blau.",
		},

		showScoreLegend: {
			title: "Punktzahl-Legende anzeigen",
			description: "Zeigt die Legende über dem Raster an.",
		},

		animateDice: {
			title: "Würfelwurf animieren",
			description: "Wirft die Würfel mit einer 3D-Animation.",
		},

		autoRollDice: {
			title: "Würfel automatisch werfen",
			notAvailableDuringTheFirstGame:
				"(nicht verfügbar während des ersten Spiels)",
			description:
				"Wirft die Würfel automatisch, sobald die beiden Symbole im Raster platziert sind. Dies entfernt die Möglichkeit, die Platzierung des zweiten Symbols rückgängig zu machen.",
		},

		showDiceMarker: {
			title: "Würfelmarkierung anzeigen",
			description: "Zeigt, welches Symbol im Raster platziert werden soll.",
		},

		showConfetti: {
			title: "Konfetti anzeigen",
			description:
				"Wirft eine Konfetti-Explosion, wenn Sie Ihre Höchstpunktzahl schlagen!",
		},

		gridAtBottom: {
			title: "Raster am unteren Bildschirmrand platzieren",
			description: "Nützlich zum Spielen mit einer Hand auf dem Handy.",
		},

		enableWakeLock: {
			title: "Bildschirm während des Spielens eingeschaltet lassen",
			description:
				"Verhindert, dass sich der Bildschirm Ihres Geräts für fünf Minuten ausschaltet, während ein Spiel gespielt wird. Beachten Sie, dass einige Apple-Geräte diese Funktion nicht unterstützen.",
		},

		showNavigationAlert: {
			title: "Nach Bestätigung fragen, bevor ein Spiel verlassen wird",
			description:
				"Zeigt einen Bestätigungsdialog beim Navigieren während eines Spiels an.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
