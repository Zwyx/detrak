import { I18nLocale } from "./en";

export const hr: I18nLocale = {
	common: {
		close: "Zatvori",
		symbolNames: {
			bar: "vertikalna crtica",
			cross: "križ",
			tripleBar: "tri vertikalne crtice",
			sharp: "šarp",
			triangle: "trokut",
			circle: "krug",
		},
	},

	app: {
		bestScore: "najbolji rezultat:",
		endOnGame: "Završeno! Vaš rezultat je",
		endOnGameWithNewScore: "Odlično! Novi najbolji rezultat:",
		numberOfGames_zero: "0 igara",
		numberOfGames_one: "1 igra",
		numberOfGames_few: "{{count}} igre",
		numberOfGames_many: "{{count}} igara",
		numberOfGames_other: "{{count}} igara",
		rollDice: "baci kockice",
		rollDice1: {
			part1: "Simbol koji ste odabrali umetnut je u ploču ispod.",
			part2: "Sada bacite kockice!",
		},
		settingsChangeDice:
			"Kockice su sada bez animacije i bacaju se automatski kako biste mogli igrati brže. Možete to promijeniti u postavkama.",
		share: {
			shareYourScore: "Podijelite svoj rezultat",
			sendScore: "Pošaljite svoj rezultat prijateljima!",
			inviteFriends:
				"I pozovite ih da vas izazovu u istoj igri (simboli izvučeni tijekom njihove igre bit će isti kao vaši).",
			title: "Detrak",
			text: "🎲 Upravo sam postigao {{count}} u Detrak igri! Možete li bolje? 🤞",
		},
		sr: {
			selectSymbol: "Odaberite jedan od šest simbola za početak.",
			newDraw: "Novo izvlačenje:",
			gameFinished: "Igra završena! Rezultat:",
			gameFinishedNewHighestScore: "Igra završena! Novi najbolji rezultat!",
		},
		replayGame: "Ponovite ovu igru",
		startNewGame: "Započnite novu igru",
		welcome: {
			title: "Dobrodošli u Detrak!",
			text: "Započnite odabirom jednog od šest simbola iznad.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "stupac",
			empty: "prazno",
			row: "red",
		},
		clickGrid1: {
			part1:
				"Odaberite praznu ćeliju u ploči za umetanje simbola prve kockice.",
			part2: "Cilj je grupirati identične simbole zajedno.",
		},
		clickGrid2: {
			part1: "Odaberite drugu praznu ćeliju za drugi simbol.",
			part2: "Mora biti izravno pokraj prvog.",
		},
		rollDice2: {
			left: "Rezultati će se prikazivati u najdešnjem stupcu i najdonjem redu.",
			legend:
				"Ovo je legenda za rezultat. Na primjer, pet identičnih simbola u redu, stupcu ili dijagonali daje 10 bodova.",
			right: {
				part1:
					"Rezultat dijagonale pojavljuje se na oba kraja, pa se broji dvaput!",
				part2: "Bacite kockice ponovno da nastavite igru.",
			},
		},
		settingsChangeScore:
			"Također, rezultat se sada uvijek prikazuje, tako da možete brzo vidjeti koji redovi/stupci trebaju pažnju.",
	},

	error: {
		oops: "Ups, nešto je pošlo po zlu.",
		error:
			"Dogodila se neočekivana greška, molimo ponovno učitajte stranicu. Ispričavamo se zbog neugodnosti.",
		googleTranslateNote:
			"Napomena: ako koristite Google Chrome funkciju prevođenja za prevođenje ove stranice, tada je ta funkcija vjerojatno uzrok ove greške.",
		reload: "Ponovno učitaj",
	},

	headerMenu: {
		openMenu: "Otvori izbornik",
		detrak: "Detrak",
		newFeatures: {
			title: "Dostupne su nove funkcije!",
			description: "Završite igru i ponovno učitajte aplikaciju.",
			action: "Ponovno učitaj aplikaciju",
		},
		install: {
			installableWebApp: "Detrak je web aplikacija koju možete instalirati!",
			description:
				"Možete je dodati na početni zaslon i igrati čak i bez internetske veze.",
			install: "Instaliraj Detrak",
		},
		gigamicGame: "Detrak je igra zaštićena autorskim pravima, objavio ju je",
		digitalVersion: {
			madeBy: "Ovu digitalnu verziju napravio sam ja,",
			webDeveloper:
				", nezavisan web developer, uz odobrenje Gigamic-a. Hvala vam ponovno, Gigamic!",
		},
		writeToMe: "Nadam se da uživate! Slobodno mi pišite na",
		rules: {
			readTheRules: "Pročitajte pravila",
			rules: "Pravila igre",
			part1:
				"Bacite kockice i postavite dobivene simbole u ploču kako biste osvojili što više bodova.",
			part2:
				"Osvojite bodove kada postavite identične simbole jedan pokraj drugog, u redu, stupcu ili dijagonali od dolje-lijevo do gore-desno:",
			points: {
				part1: "2 simbola: +2 boda,",
				part2: "3 simbola: +3 boda,",
				part3: "4 simbola: +8 bodova,",
				part4: "5 simbola: +10 bodova,",
				part5: "nema simbola: -5 bodova.",
			},
			part3:
				"Dva simbola s kockica moraju se postaviti u susjedne slobodne ćelije (vodoravno ili okomito).",
			part4:
				"Nemoguće je postaviti samo jedan od dva simbola. Stoga, da biste spriječili preuranjeni završetak igre, izbjegavajte izoliranje ćelija.",
		},
		termsOfUse: "Uvjeti korištenja",
		privacyPolicy: "Pravila privatnosti",
		copyright: {
			originalGame: "Originalna igra",
			digitalVersion: "Digitalna verzija",
		},
		sourceCodeAvailableAt: "Izvorni kod dostupan na",
		version: "Verzija",
		checkForUpdates: "Provjeri ažuriranja",
		updateAvailable:
			"Dostupno je ažuriranje, završite igru i kliknite ovdje da ažurirate",
	},

	languageSelector: {
		chooseLanguage: "Odaberite jezik",
		language: "Jezik",
	},

	navigationBlocker: {
		title: "Ovo će zaustaviti trenutnu igru, jeste li sigurni?",
		description: "Molimo potvrdite da želite zaustaviti trenutnu igru.",
		confirmationCheckbox: "Uvijek traži potvrdu prije prekidanja igre",
		keepPlaying: "Nastavi igrati",
		stopGame: "Zaustavi ovu igru",
	},

	newGameDialog: {
		close: "Zatvori",
		createGame: "Stvori igru",
		joinGame: "Pridruži se igri",
		pickAnotherDay: "Odaberi drugi dan",
		play: "Igraj",
		playRandomGame: "Igraj nasumičnu igru",
		playTodayGame: "Igraj današnju igru",
		playWithFriends: "Igraj s prijateljima",
		shareCreate: {
			scanQrCode:
				"Zamolite prijatelje da skeniraju ovaj QR kod ili podijelite vezu s njima.",
			clickPlay: "Zatim kliknite Igraj.",
			title: "Detrak",
			joinMe: "🎲 Pridružite mi se u ovoj Detrak igri!",
			shareLink: "Podijeli vezu",
			copyLink: "Kopiraj vezu u međuspremnik",
		},
		shareJoin: {
			useCamera: "Koristite kameru svojeg uređaja za skeniranje QR koda igre.",
			openGameLink: "Ili otvorite vezu igre.",
			enterGameLink: "Ili unesite vezu igre ispod i kliknite Igraj.",
		},
		stopGame: "Zaustavi ovu igru",
		title: {
			createGame: "Stvori igru",
			inviteToGame: "Pozovi ljude u trenutnu igru",
			joinGame: "Pridruži se igri",
			newGame: "Nova igra",
			playWithFriends: "Igraj s prijateljima",
			welcomeToNewVersion: "Dobrodošli u novu verziju Detrak igre!",
		},
		welcome: {
			intro: "Postoje dva nova načina igranja:",
			dailyGame: "Dnevna igra",
			dailyGameDetails:
				"svaki dan, slijed simbola koje izvuku kockice isti je za sve.",
			playWithFriends: "Igraj s prijateljima",
			playWithFriendsDetails:
				"stvorite igru i pozovite ljude da se pridruže. I ovdje je slijed simbola izvučenih tijekom igre isti za vas i vaše prijatelje. Radi čak i bez internetske veze!",
			startPlaying: "Počnite igrati!",
		},
		or: "ili",
	},

	themeSelector: {
		chooseTheme: "Odaberite temu",
		theme: "Tema",
		sameAsDevice: "Kao na uređaju",
		light: "Svijetla",
		dark: "Tamna",
	},

	settingsDialog: {
		openSettingsDialog: "Otvori dijalo za postavke",
		settings: "Postavke",

		alwaysShowScore: {
			title: "Uvijek prikaži rezultat",
			description: "Prikazuje vaš trenutni rezultat tijekom igre.",
		},

		showScoreWithContrast: {
			title: "Prikaži rezultat s kontrastom umjesto boje",
			description: "Koristi razine sive umjesto crvene, zelene i plave.",
		},

		showScoreLegend: {
			title: "Prikaži legendu rezultata",
			description: "Prikazuje legendu postavljena iznad ploče.",
		},

		animateDice: {
			title: "Animiraj bacanje kockica",
			description: "Baca kockice s 3D animacijom.",
		},

		autoRollDice: {
			title: "Automatski baci kockice",
			notAvailableDuringTheFirstGame: "(nije dostupno tijekom prve igre)",
			description:
				"Automatski baca kockice nakon što se dva simbola postave u ploču. Ovo uklanja mogućnost poništavanja postavljanja drugog simbola.",
		},

		showDiceMarker: {
			title: "Prikaži oznaku kockice",
			description: "Pokazuje koji simbol treba postaviti na ploču.",
		},

		showConfetti: {
			title: "Prikaži konfete",
			description:
				"Baca eksploziju konfeta kada pobijete svoj najbolji rezultat!",
		},

		gridAtBottom: {
			title: "Postavi ploču na dno zaslona",
			description: "Korisno za igranje jednom rukom na mobilnom uređaju.",
		},

		enableWakeLock: {
			title: "Zadrži zaslon uključen tijekom igranja",
			description:
				"Sprječava da se zaslon vašeg uređaja ugasi pet minuta tijekom igranja igre. Napomena da neki Apple uređaji ne podržavaju ovu funkciju.",
		},

		showNavigationAlert: {
			title: "Traži potvrdu prije napuštanja igre",
			description:
				"Prikazuje dijalo za potvrdu pri navigaciji van stranice tijekom igre.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
