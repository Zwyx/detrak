import { I18nLocale } from "./en";

export const ro: I18nLocale = {
	common: {
		close: "Închide",
		symbolNames: {
			bar: "bară",
			cross: "cruce",
			tripleBar: "bară triplă",
			sharp: "diez",
			triangle: "triunghi",
			circle: "cerc",
		},
	},

	app: {
		bestScore: "cel mai bun scor:",
		endOnGame: "Terminat! Scorul tău este",
		endOnGameWithNewScore: "Bravo! Cel mai bun scor nou:",
		numberOfGames_zero: "0 jocuri",
		numberOfGames_one: "1 joc",
		numberOfGames_few: "{{count}} jocuri",
		numberOfGames_other: "{{count}} de jocuri",
		rollDice: "aruncă zarurile",
		rollDice1: {
			part1:
				"Simbolul pe care l-ai selectat a fost inserat în grila de mai jos.",
			part2: "Acum, aruncă zarurile!",
		},
		settingsChangeDice:
			"Zarurile acum nu sunt animate și sunt aruncate automat pentru a-ți permite să joci mai rapid. Poți schimba acest lucru în setări.",
		share: {
			shareYourScore: "Distribuie scorul tău",
			sendScore: "Trimite scorul tău prietenilor!",
			inviteFriends:
				"Și invită-i să te provoace la același joc (simbolurile extrase în timpul jocului lor vor fi aceleași cu ale tale).",
			title: "Detrak",
			text: "🎲 Tocmai am făcut {{count}} la Detrak! Poți face mai bine? 🤞",
		},
		sr: {
			selectSymbol: "Selectează unul din cele șase simboluri pentru a începe.",
			newDraw: "Extragere nouă:",
			gameFinished: "Joc terminat! Scor:",
			gameFinishedNewHighestScore: "Joc terminat! Cel mai bun scor nou!",
		},
		replayGame: "Joacă din nou acest joc",
		startNewGame: "Începe un joc nou",
		welcome: {
			title: "Bun venit la Detrak!",
			text: "Începe prin a alege unul din cele șase simboluri de mai sus.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "coloană",
			empty: "gol",
			row: "rând",
		},
		clickGrid1: {
			part1:
				"Alege o celulă goală în grilă pentru a insera simbolul primului zar.",
			part2: "Scopul este să grupezi simbolurile identice împreună.",
		},
		clickGrid2: {
			part1: "Alege o altă celulă goală pentru al doilea simbol.",
			part2: "Trebuie să fie direct lângă primul.",
		},
		rollDice2: {
			left: "Scorurile vor fi afișate în coloana din dreapta și în rândul de jos.",
			legend:
				"Aceasta este legenda pentru scor. De exemplu, cinci simboluri identice pe un rând, o coloană sau diagonala dau 10 puncte.",
			right: {
				part1:
					"Scorul diagonalei apare la ambele capete, deci este numărat de două ori!",
				part2: "Aruncă zarurile din nou pentru a continua jocul.",
			},
		},
		settingsChangeScore:
			"De asemenea, scorul este acum întotdeauna afișat, astfel încât poți vedea rapid care rânduri/coloane au nevoie de atenție.",
	},

	error: {
		oops: "Ups, ceva nu a mers bine.",
		error:
			"A apărut o eroare neașteptată, te rog reîncarcă pagina. Scuze pentru neplăcere.",
		googleTranslateNote:
			"Notă: dacă folosești funcția de traducere Google Chrome pentru a traduce această pagină, atunci această funcție este probabil cauza acestei erori.",
		reload: "Reîncarcă",
	},

	headerMenu: {
		openMenu: "Deschide meniul",
		detrak: "Detrak",
		newFeatures: {
			title: "Funcții noi disponibile!",
			description: "Termină jocul și reîncarcă aplicația.",
			action: "Reîncarcă aplicația",
		},
		install: {
			installableWebApp: "Detrak este o aplicație web instalabilă!",
			description:
				"O poți adăuga pe ecranul de pornire și juca chiar și offline.",
			install: "Instalează Detrak",
		},
		gigamicGame: "Detrak este un joc cu drepturi de autor publicat de",
		digitalVersion: {
			madeBy: "Această versiune digitală a fost făcută de mine,",
			webDeveloper:
				", un dezvoltator web independent, cu aprobarea Gigamic. Mulțumesc din nou, Gigamic!",
		},
		writeToMe: "Sper că îți place! Nu ezita să îmi scrii la",
		rules: {
			readTheRules: "Citește regulile",
			rules: "Regulile jocului",
			part1:
				"Aruncă zarurile și plasează simbolurile obținute în grilă pentru a marca cât mai multe puncte posibil.",
			part2:
				"Marchezi puncte când plasezi simboluri identice una lângă alta, pe un rând, o coloană sau diagonala de la stânga-jos la dreapta-sus:",
			points: {
				part1: "2 simboluri: +2 puncte,",
				part2: "3 simboluri: +3 puncte,",
				part3: "4 simboluri: +8 puncte,",
				part4: "5 simboluri: +10 puncte,",
				part5: "niciun simbol: -5 puncte.",
			},
			part3:
				"Cele două simboluri de la zaruri trebuie plasate pe celule libere adiacente (orizontal sau vertical).",
			part4:
				"Este imposibil să plasezi doar unul din cele două simboluri. Prin urmare, pentru a evita ca jocul să se termine prematur, evită să izolezi celulele.",
		},
		termsOfUse: "Termeni de utilizare",
		privacyPolicy: "Politica de confidențialitate",
		copyright: {
			originalGame: "Jocul original",
			digitalVersion: "Versiunea digitală",
		},
		sourceCodeAvailableAt: "Codul sursă disponibil la",
		version: "Versiunea",
		checkForUpdates: "Verifică actualizările",
		updateAvailable:
			"Actualizare disponibilă, termină jocul și apasă aici pentru a actualiza",
	},

	languageSelector: {
		chooseLanguage: "Alege limba",
		language: "Limba",
	},

	navigationBlocker: {
		title: "Aceasta va opri jocul curent, ești sigur?",
		description: "Te rog confirmă că vrei să oprești jocul curent.",
		confirmationCheckbox:
			"Întreabă întotdeauna pentru confirmare înainte de întreruperea unui joc",
		keepPlaying: "Continuă să joci",
		stopGame: "Oprește acest joc",
	},

	newGameDialog: {
		close: "Închide",
		createGame: "Creează un joc",
		joinGame: "Alătură-te unui joc",
		pickAnotherDay: "Alege o altă zi",
		play: "Joacă",
		playRandomGame: "Joacă un joc aleatoriu",
		playTodayGame: "Joacă jocul de azi",
		playWithFriends: "Joacă cu prietenii",
		shareCreate: {
			scanQrCode:
				"Cere prietenilor să scaneze acest cod QR sau distribuie linkul cu ei.",
			clickPlay: "Apoi apasă Joacă.",
			title: "Detrak",
			joinMe: "🎲 Alătură-te la acest joc de Detrak!",
			shareLink: "Distribuie linkul",
			copyLink: "Copiază linkul în clipboard",
		},
		shareJoin: {
			useCamera:
				"Folosește camera dispozitivului pentru a scana codul QR al unui joc.",
			openGameLink: "Sau deschide linkul unui joc.",
			enterGameLink: "Sau introdu linkul unui joc mai jos și apasă Joacă.",
		},
		stopGame: "Oprește acest joc",
		title: {
			createGame: "Creează un joc",
			inviteToGame: "Invită oameni la jocul curent",
			joinGame: "Alătură-te unui joc",
			newGame: "Joc nou",
			playWithFriends: "Joacă cu prietenii",
			welcomeToNewVersion: "Bun venit la noua versiune Detrak!",
		},
		welcome: {
			intro: "Sunt două noi moduri de a juca:",
			dailyGame: "Jocul zilnic",
			dailyGameDetails:
				"în fiecare zi, secvența de simboluri extrase de zaruri este aceeași pentru toată lumea.",
			playWithFriends: "Joacă cu prietenii",
			playWithFriendsDetails:
				"creează un joc și invită oameni să se alăture. Și aici, secvența de simboluri extrase în timpul jocului este aceeași pentru prietenii tăi și pentru tine. Funcționează chiar și fără conexiune la internet!",
			startPlaying: "Începe să joci!",
		},
		or: "sau",
	},

	themeSelector: {
		chooseTheme: "Alege tema",
		theme: "Tema",
		sameAsDevice: "La fel ca dispozitivul",
		light: "Luminoasă",
		dark: "Întunecată",
	},

	settingsDialog: {
		openSettingsDialog: "Deschide dialogul de setări",
		settings: "Setări",

		alwaysShowScore: {
			title: "Afișează întotdeauna scorul",
			description: "Afișează scorul tău curent în timpul jocului.",
		},

		showScoreWithContrast: {
			title: "Afișează scorul cu contrast în loc de culoare",
			description:
				"Folosește niveluri de gri în loc de roșu, verde și albastru.",
		},

		showScoreLegend: {
			title: "Afișează legenda scorului",
			description: "Afișează legenda plasată deasupra grilei.",
		},

		animateDice: {
			title: "Animează zarurile care se rostogolesc",
			description: "Rostogolește zarurile cu o animație 3D.",
		},

		autoRollDice: {
			title: "Aruncă zarurile automat",
			notAvailableDuringTheFirstGame:
				"(nu este disponibil în timpul primului joc)",
			description:
				"Aruncă zarurile automat odată ce cele două simboluri sunt plasate în grilă. Aceasta elimină capacitatea de a anula plasarea celui de-al doilea simbol.",
		},

		showDiceMarker: {
			title: "Afișează marcatorul zarurilor",
			description: "Arată care simbol trebuie plasat pe grilă.",
		},

		showConfetti: {
			title: "Afișează confetti",
			description:
				"Aruncă o explozie de confetti când îți depășești cel mai bun scor!",
		},

		gridAtBottom: {
			title: "Plasează grila în partea de jos a ecranului",
			description: "Util pentru a juca cu o mână pe mobil.",
		},

		enableWakeLock: {
			title: "Păstrează ecranul aprins în timpul jocului",
			description:
				"Împiedică ecranul dispozitivului să se stingă timp de cinci minute în timpul unui joc. Notă că unele dispozitive Apple nu suportă această funcție.",
		},

		showNavigationAlert: {
			title: "Cere confirmare înainte de a părăsi un joc",
			description:
				"Afișează un dialog de confirmare când navighezi în altă parte în timpul unui joc.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
