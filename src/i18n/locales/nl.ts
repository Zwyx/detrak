import { I18nLocale } from "./en";

export const nl: I18nLocale = {
	common: {
		close: "Sluiten",
		symbolNames: {
			bar: "balk",
			cross: "kruis",
			tripleBar: "drievoudige balk",
			sharp: "kruis",
			triangle: "driehoek",
			circle: "cirkel",
		},
	},

	app: {
		bestScore: "beste score:",
		endOnGame: "Klaar! Je score is",
		endOnGameWithNewScore: "Goed gedaan! Nieuwe hoogste score:",
		numberOfGames_one: "{{count}} spel",
		numberOfGames_other: "{{count}} spellen",
		rollDice: "dobbelstenen gooien",
		rollDice1: {
			part1:
				"Het symbool dat je hebt geselecteerd is ingevoegd in het raster hieronder.",
			part2: "Gooi nu de dobbelstenen!",
		},
		settingsChangeDice:
			"Dobbelstenen worden nu zonder animatie en automatisch gegooid zodat je sneller kunt spelen. Je kunt dit wijzigen in de instellingen.",
		share: {
			shareYourScore: "Deel je score",
			sendScore: "Stuur je score naar je vrienden!",
			inviteFriends:
				"En nodig ze uit om je uit te dagen in hetzelfde spel (de symbolen die tijdens hun spel worden getrokken zijn hetzelfde als de jouwe).",
			title: "Detrak",
			text: "🎲 Heb net {{count}} gescoord op Detrak! Kun jij het beter? 🤞",
		},
		sr: {
			selectSymbol: "Selecteer een van de zes symbolen om te beginnen.",
			newDraw: "Nieuwe trekking:",
			gameFinished: "Spel afgelopen! Score:",
			gameFinishedNewHighestScore: "Spel afgelopen! Nieuwe hoogste score!",
		},
		replayGame: "Dit spel opnieuw spelen",
		startNewGame: "Een nieuw spel starten",
		welcome: {
			title: "Welkom bij Detrak!",
			text: "Begin door een van de zes symbolen hierboven te kiezen.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "kolom",
			empty: "leeg",
			row: "rij",
		},
		clickGrid1: {
			part1:
				"Kies een lege cel in het raster om het symbool van de eerste dobbelsteen in te voegen.",
			part2: "Het doel is om identieke symbolen samen te groeperen.",
		},
		clickGrid2: {
			part1: "Kies een andere lege cel voor het tweede symbool.",
			part2: "Het moet direct naast de eerste staan.",
		},
		rollDice2: {
			left: "Scores worden weergegeven in de meest rechtse kolom en de onderste rij.",
			legend:
				"Dit is de legenda voor de score. Bijvoorbeeld, vijf identieke symbolen op een rij, kolom of diagonaal geven 10 punten.",
			right: {
				part1:
					"De score van de diagonaal verschijnt aan beide uiteinden, dus wordt twee keer geteld!",
				part2: "Gooi de dobbelstenen opnieuw om het spel voort te zetten.",
			},
		},
		settingsChangeScore:
			"Ook wordt de score nu altijd getoond, zodat je snel kunt zien welke rijen/kolommen aandacht nodig hebben.",
	},

	error: {
		oops: "Oeps, er is iets misgegaan.",
		error:
			"Er is een onverwachte fout opgetreden, herlaad de pagina. Sorry voor het ongemak.",
		googleTranslateNote:
			"Opmerking: als je de vertaalfunctie van Google Chrome gebruikt om deze pagina te vertalen, dan is deze functie waarschijnlijk de oorzaak van deze fout.",
		reload: "Herladen",
	},

	headerMenu: {
		openMenu: "Menu openen",
		detrak: "Detrak",
		newFeatures: {
			title: "Nieuwe functies beschikbaar!",
			description: "Maak je spel af en herlaad de app.",
			action: "App herladen",
		},
		install: {
			installableWebApp: "Detrak is een installeerbare web-app!",
			description:
				"Je kunt het toevoegen aan je startscherm en zelfs offline spelen.",
			install: "Detrak installeren",
		},
		gigamicGame:
			"Detrak is een auteursrechtelijk beschermd spel uitgegeven door",
		digitalVersion: {
			madeBy: "Deze digitale versie is gemaakt door mij,",
			webDeveloper:
				", een onafhankelijke webontwikkelaar, met goedkeuring van Gigamic. Nogmaals bedankt, Gigamic!",
		},
		writeToMe:
			"Ik hoop dat je ervan geniet! Voel je vrij om me te schrijven op",
		rules: {
			readTheRules: "Lees de regels",
			rules: "Spelregels",
			part1:
				"Gooi de dobbelstenen en plaats de verkregen symbolen in het raster om zoveel mogelijk punten te scoren.",
			part2:
				"Je scoort punten wanneer je identieke symbolen naast elkaar plaatst, in een rij, kolom of de diagonaal van linksonder naar rechtsboven:",
			points: {
				part1: "2 symbolen: +2 punten,",
				part2: "3 symbolen: +3 punten,",
				part3: "4 symbolen: +8 punten,",
				part4: "5 symbolen: +10 punten,",
				part5: "geen symbolen: -5 punten.",
			},
			part3:
				"De twee symbolen van de dobbelstenen moeten op aangrenzende vrije cellen worden geplaatst (horizontaal of verticaal).",
			part4:
				"Het is onmogelijk om slechts een van de twee symbolen te plaatsen. Vermijd daarom het isoleren van cellen om te voorkomen dat het spel voortijdig eindigt.",
		},
		termsOfUse: "Gebruiksvoorwaarden",
		privacyPolicy: "Privacybeleid",
		copyright: {
			originalGame: "Origineel spel",
			digitalVersion: "Digitale versie",
		},
		sourceCodeAvailableAt: "Broncode beschikbaar op",
		version: "Versie",
		checkForUpdates: "Controleren op updates",
		updateAvailable:
			"Update beschikbaar, maak je spel af en klik hier om te updaten",
	},

	languageSelector: {
		chooseLanguage: "Kies taal",
		language: "Taal",
	},

	navigationBlocker: {
		title: "Dit stopt het huidige spel, weet je het zeker?",
		description: "Bevestig dat je het huidige spel wilt stoppen.",
		confirmationCheckbox:
			"Altijd om bevestiging vragen voordat een spel wordt onderbroken",
		keepPlaying: "Blijven spelen",
		stopGame: "Dit spel stoppen",
	},

	newGameDialog: {
		close: "Sluiten",
		createGame: "Een spel maken",
		joinGame: "Deelnemen aan een spel",
		pickAnotherDay: "Een andere dag kiezen",
		play: "Spelen",
		playRandomGame: "Een willekeurig spel spelen",
		playTodayGame: "Het spel van vandaag spelen",
		playWithFriends: "Spelen met vrienden",
		shareCreate: {
			scanQrCode:
				"Vraag je vrienden om deze QR-code te scannen of deel de link met hen.",
			clickPlay: "Klik dan op Spelen.",
			title: "Detrak",
			joinMe: "🎲 Doe mee met mijn Detrak-spel!",
			shareLink: "Link delen",
			copyLink: "Link naar klembord kopiëren",
		},
		shareJoin: {
			useCamera:
				"Gebruik de camera van je apparaat om de QR-code van een spel te scannen.",
			openGameLink: "Of open een spellink.",
			enterGameLink: "Of voer hieronder een spellink in en klik op Spelen.",
		},
		stopGame: "Dit spel stoppen",
		title: {
			createGame: "Een spel maken",
			inviteToGame: "Mensen uitnodigen voor het huidige spel",
			joinGame: "Deelnemen aan een spel",
			newGame: "Nieuw spel",
			playWithFriends: "Spelen met vrienden",
			welcomeToNewVersion: "Welkom bij de nieuwe versie van Detrak!",
		},
		welcome: {
			intro: "Er zijn twee nieuwe manieren om te spelen:",
			dailyGame: "Het dagelijkse spel",
			dailyGameDetails:
				"elke dag is de volgorde van symbolen die door de dobbelstenen worden getrokken hetzelfde voor iedereen.",
			playWithFriends: "Spelen met vrienden",
			playWithFriendsDetails:
				"maak een spel en nodig mensen uit om mee te doen. Ook hier is de volgorde van symbolen tijdens het spel hetzelfde voor je vrienden en jou. Het werkt zelfs zonder internetverbinding!",
			startPlaying: "Begin met spelen!",
		},
		or: "of",
	},

	themeSelector: {
		chooseTheme: "Kies thema",
		theme: "Thema",
		sameAsDevice: "Hetzelfde als apparaat",
		light: "Licht",
		dark: "Donker",
	},

	settingsDialog: {
		openSettingsDialog: "Instellingendialoog openen",
		settings: "Instellingen",

		alwaysShowScore: {
			title: "Altijd de score tonen",
			description: "Toont je huidige score tijdens het spel.",
		},

		showScoreWithContrast: {
			title: "Score tonen met contrast in plaats van kleur",
			description: "Gebruikt grijswaarden in plaats van rood, groen en blauw.",
		},

		showScoreLegend: {
			title: "De scorelegenda tonen",
			description: "Toont de legenda geplaatst boven het raster.",
		},

		animateDice: {
			title: "De rollende dobbelstenen animeren",
			description: "Gooit de dobbelstenen met een 3D-animatie.",
		},

		autoRollDice: {
			title: "Automatisch dobbelstenen gooien",
			notAvailableDuringTheFirstGame:
				"(niet beschikbaar tijdens het eerste spel)",
			description:
				"Gooit de dobbelstenen automatisch zodra de twee symbolen in het raster zijn geplaatst. Dit verwijdert de mogelijkheid om de plaatsing van het tweede symbool ongedaan te maken.",
		},

		showDiceMarker: {
			title: "De dobbelsteenmarkering tonen",
			description: "Toont welk symbool in het raster moet worden geplaatst.",
		},

		showConfetti: {
			title: "Confetti tonen",
			description:
				"Gooit een confetti-explosie wanneer je je hoogste score verslaat!",
		},

		gridAtBottom: {
			title: "Het raster onderaan het scherm plaatsen",
			description: "Handig om met één hand te spelen op mobiel.",
		},

		enableWakeLock: {
			title: "Het scherm aan houden tijdens het spelen",
			description:
				"Voorkomt dat het scherm van je apparaat uitschakelt gedurende vijf minuten tijdens het spelen. Let op dat sommige Apple-apparaten deze functie niet ondersteunen.",
		},

		showNavigationAlert: {
			title: "Om bevestiging vragen voordat een spel wordt verlaten",
			description:
				"Toont een bevestigingsdialoog bij het wegnavigeren tijdens een spel.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
