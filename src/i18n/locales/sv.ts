import { I18nLocale } from "./en";

export const sv: I18nLocale = {
	common: {
		close: "Stäng",
		symbolNames: {
			bar: "streck",
			cross: "kors",
			tripleBar: "trippelstreck",
			sharp: "fyrkant",
			triangle: "triangel",
			circle: "cirkel",
		},
	},

	app: {
		bestScore: "bästa poäng:",
		endOnGame: "Klart! Din poäng är",
		endOnGameWithNewScore: "Bra jobbat! Ny högsta poäng:",
		numberOfGames_zero: "0 spel",
		numberOfGames_one: "1 spel",
		numberOfGames_other: "{{count}} spel",
		rollDice: "kasta tärningar",
		rollDice1: {
			part1: "Symbolen du har valt har satts in i rutnätet nedan.",
			part2: "Kasta nu tärningarna!",
		},
		settingsChangeDice:
			"Tärningarna är nu oanimerade och kastas automatiskt så att du kan spela snabbare. Du kan ändra detta i inställningarna.",
		share: {
			shareYourScore: "Dela din poäng",
			sendScore: "Skicka din poäng till dina vänner!",
			inviteFriends:
				"Och bjud in dem att utmana dig i samma spel (symbolerna som dras under deras spel kommer att vara samma som dina).",
			title: "Detrak",
			text: "🎲 Fick precis {{count}} på Detrak! Kan du göra bättre? 🤞",
		},
		sr: {
			selectSymbol: "Välj en av de sex symbolerna för att börja.",
			newDraw: "Ny dragning:",
			gameFinished: "Spelet klart! Poäng:",
			gameFinishedNewHighestScore: "Spelet klart! Ny högsta poäng!",
		},
		replayGame: "Spela om detta spel",
		startNewGame: "Börja nytt spel",
		welcome: {
			title: "Välkommen till Detrak!",
			text: "Börja genom att välja en av de sex symbolerna ovan.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "kolumn",
			empty: "tom",
			row: "rad",
		},
		clickGrid1: {
			part1:
				"Välj en tom cell i rutnätet för att sätta in symbolen från den första tärningen.",
			part2: "Målet är att gruppera identiska symboler tillsammans.",
		},
		clickGrid2: {
			part1: "Välj en annan tom cell för den andra symbolen.",
			part2: "Den måste vara direkt intill den första.",
		},
		rollDice2: {
			left: "Poäng kommer att visas i kolumnen längst till höger och den nedersta raden.",
			legend:
				"Detta är förklaringen för poängen. Till exempel ger fem identiska symboler på en rad, kolumn eller diagonal 10 poäng.",
			right: {
				part1: "Diagonalens poäng visas i båda ändarna, så den räknas dubbelt!",
				part2: "Kasta tärningarna igen för att fortsätta spelet.",
			},
		},
		settingsChangeScore:
			"Dessutom visas poängen nu alltid, så du kan snabbt se vilka rader/kolumner som behöver uppmärksamhet.",
	},

	error: {
		oops: "Hoppsan, något gick fel.",
		error:
			"Ett oväntat fel inträffade, vänligen ladda om sidan. Ursäkta för besväret.",
		googleTranslateNote:
			"Obs: om du använder Google Chromes översättningsfunktion för att översätta denna sida, är denna funktion troligen orsaken till detta fel.",
		reload: "Ladda om",
	},

	headerMenu: {
		openMenu: "Öppna meny",
		detrak: "Detrak",
		newFeatures: {
			title: "Nya funktioner tillgängliga!",
			description: "Avsluta ditt spel och ladda om appen.",
			action: "Ladda om app",
		},
		install: {
			installableWebApp: "Detrak är en installerbar webbapp!",
			description:
				"Du kan lägga till den på din hemskärm och spela även offline.",
			install: "Installera Detrak",
		},
		gigamicGame: "Detrak är ett upphovsrättsskyddat spel publicerat av",
		digitalVersion: {
			madeBy: "Denna digitala version har gjorts av mig,",
			webDeveloper:
				", en oberoende webbutvecklare, med godkännande från Gigamic. Tack igen, Gigamic!",
		},
		writeToMe: "Jag hoppas du gillar det! Skriv gärna till mig på",
		rules: {
			readTheRules: "Läs reglerna",
			rules: "Spelregler",
			part1:
				"Kasta tärningarna och placera de erhållna symbolerna i rutnätet för att få så många poäng som möjligt.",
			part2:
				"Du får poäng när du placerar identiska symboler bredvid varandra, i en rad, kolumn eller diagonalen från nedre vänster till övre höger:",
			points: {
				part1: "2 symboler: +2 poäng,",
				part2: "3 symboler: +3 poäng,",
				part3: "4 symboler: +8 poäng,",
				part4: "5 symboler: +10 poäng,",
				part5: "inga symboler: -5 poäng.",
			},
			part3:
				"De två symbolerna från tärningarna måste placeras på intilliggande fria celler (horisontellt eller vertikalt).",
			part4:
				"Det är omöjligt att bara placera en av de två symbolerna. För att förhindra att spelet slutar i förtid, undvik att isolera celler.",
		},
		termsOfUse: "Användarvillkor",
		privacyPolicy: "Integritetspolicy",
		copyright: {
			originalGame: "Originalspel",
			digitalVersion: "Digital version",
		},
		sourceCodeAvailableAt: "Källkod tillgänglig på",
		version: "Version",
		checkForUpdates: "Sök efter uppdateringar",
		updateAvailable:
			"Uppdatering tillgänglig, avsluta ditt spel och klicka här för att uppdatera",
	},

	languageSelector: {
		chooseLanguage: "Välj språk",
		language: "Språk",
		changeLanguageError:
			"Ett fel uppstod vid inställning av det nya språket. Se till att din enhet har tillgång till internet, starta om appen och försök igen.",
	},

	navigationBlocker: {
		title: "Detta kommer att stoppa det aktuella spelet, är du säker?",
		description: "Vänligen bekräfta att du vill stoppa det aktuella spelet.",
		confirmationCheckbox: "Fråga alltid om bekräftelse innan ett spel avbryts",
		keepPlaying: "Fortsätt spela",
		stopGame: "Stoppa detta spel",
	},

	newGameDialog: {
		close: "Stäng",
		createGame: "Skapa ett spel",
		joinGame: "Gå med i ett spel",
		pickAnotherDay: "Välj en annan dag",
		play: "Spela",
		playRandomGame: "Spela ett slumpmässigt spel",
		playTodayGame: "Spela dagens spel",
		playWithFriends: "Spela med vänner",
		shareCreate: {
			scanQrCode:
				"Be dina vänner att skanna denna QR-kod eller dela länken med dem.",
			clickPlay: "Klicka sedan på Spela.",
			title: "Detrak",
			joinMe: "🎲 Häng med mig i detta Detrak-spel!",
			shareLink: "Dela länk",
			copyLink: "Kopiera länk till urklipp",
		},
		shareJoin: {
			useCamera: "Använd din enhets kamera för att skanna en spels QR-kod.",
			openGameLink: "Eller öppna en spellänk.",
			enterGameLink: "Eller ange en spellänk nedan och klicka på Spela.",
		},
		stopGame: "Stoppa detta spel",
		title: {
			createGame: "Skapa ett spel",
			inviteToGame: "Bjud in personer till det aktuella spelet",
			joinGame: "Gå med i ett spel",
			newGame: "Nytt spel",
			playWithFriends: "Spela med vänner",
			welcomeToNewVersion: "Välkommen till den nya versionen av Detrak!",
		},
		welcome: {
			intro: "Det finns två nya sätt att spela:",
			dailyGame: "Dagens spel",
			dailyGameDetails:
				"varje dag är sekvensen av symboler som dras av tärningarna densamma för alla.",
			playWithFriends: "Spela med vänner",
			playWithFriendsDetails:
				"skapa ett spel och bjud in personer att gå med. Även här är sekvensen av symboler som dras under spelet densamma för dina vänner och dig. Det fungerar även utan internetanslutning!",
			startPlaying: "Börja spela!",
		},
		or: "eller",
	},

	themeSelector: {
		chooseTheme: "Välj tema",
		theme: "Tema",
		sameAsDevice: "Samma som enhet",
		light: "Ljust",
		dark: "Mörkt",
	},

	settingsDialog: {
		openSettingsDialog: "Öppna inställningsdialog",
		settings: "Inställningar",

		alwaysShowScore: {
			title: "Visa alltid poängen",
			description: "Visar din aktuella poäng under spelet.",
		},

		showScoreWithContrast: {
			title: "Visa poängen med kontrast istället för färg",
			description: "Använder gråskalor istället för rött, grönt och blått.",
		},

		showScoreLegend: {
			title: "Visa poängförklaringen",
			description: "Visar förklaringen placerad ovanför rutnätet.",
		},

		animateDice: {
			title: "Animera tärningskast",
			description: "Kastar tärningarna med 3D-animation.",
		},

		autoRollDice: {
			title: "Kasta tärningar automatiskt",
			notAvailableDuringTheFirstGame:
				"(inte tillgängligt under det första spelet)",
			description:
				"Kastar tärningarna automatiskt när de två symbolerna är placerade i rutnätet. Detta tar bort möjligheten att ångra den andra symbolplaceringen.",
		},

		showDiceMarker: {
			title: "Visa tärningsmarkör",
			description: "Visar vilken symbol som ska placeras på rutnätet.",
		},

		showConfetti: {
			title: "Visa konfetti",
			description: "Kastar konfettiexplosion när du slår din högsta poäng!",
		},

		gridAtBottom: {
			title: "Placera rutnätet längst ner på skärmen",
			description: "Användbart för att spela med en hand på mobilen.",
		},

		enableWakeLock: {
			title: "Håll skärmen på under spel",
			description:
				"Förhindrar att enhetens skärm stängs av i fem minuter medan ett spel spelas. Obs att vissa Apple-enheter inte stöder denna funktion.",
		},

		showNavigationAlert: {
			title: "Be om bekräftelse innan du lämnar ett spel",
			description:
				"Visar en bekräftelsedialog vid navigering bort under ett spel.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
