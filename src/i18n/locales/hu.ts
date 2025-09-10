import { I18nLocale } from "./en";

export const hu: I18nLocale = {
	common: {
		close: "Bezárás",
		symbolNames: {
			bar: "függőleges vonal",
			cross: "kereszt",
			tripleBar: "három függőleges vonal",
			sharp: "kereszt",
			triangle: "háromszög",
			circle: "kör",
		},
	},

	app: {
		bestScore: "legjobb eredmény:",
		endOnGame: "Vége! Az eredményed",
		endOnGameWithNewScore: "Nagyszerű! Új legjobb eredmény:",
		numberOfGames_one: "{{count}} játék",
		numberOfGames_other: "{{count}} játék",
		rollDice: "dobókocka dobás",
		rollDice1: {
			part1: "A kiválasztott szimbólum bekerült az alábbi táblába.",
			part2: "Most dobd el a kockákat!",
		},
		settingsChangeDice:
			"A kockák mostantól animáció nélkül vannak és automatikusan dobódnak, hogy gyorsabban tudjál játszani. Ezt megváltoztathatod a beállításokban.",
		share: {
			shareYourScore: "Oszd meg az eredményedet",
			sendScore: "Küldd el az eredményedet a barátaidnak!",
			inviteFriends:
				"És hívd meg őket, hogy kihívjanak téged ugyanebben a játékban (a játékuk során kihúzott szimbólumok ugyanazok lesznek, mint a tieid).",
			title: "Detrak",
			text: "🎲 Épp {{count}} pontot értem el a Detrak játékban! Te tudsz ennél jobban? 🤞",
		},
		sr: {
			selectSymbol: "Válassz egyet a hat szimbólum közül a kezdéshez.",
			newDraw: "Új húzás:",
			gameFinished: "Játék vége! Eredmény:",
			gameFinishedNewHighestScore: "Játék vége! Új legjobb eredmény!",
		},
		replayGame: "Játék újrajátszása",
		startNewGame: "Új játék kezdése",
		welcome: {
			title: "Üdvözlünk a Detrak játékban!",
			text: "Kezdd azzal, hogy kiválasztasz egyet a fenti hat szimbólum közül.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "oszlop",
			empty: "üres",
			row: "sor",
		},
		clickGrid1: {
			part1:
				"Válassz egy üres cellát a táblában az első kocka szimbólumának elhelyezéséhez.",
			part2: "A cél az azonos szimbólumok csoportosítása.",
		},
		clickGrid2: {
			part1: "Válassz másik üres cellát a második szimbólumnak.",
			part2: "Közvetlenül az első mellé kell kerülnie.",
		},
		rollDice2: {
			left: "Az eredmények a jobb szélső oszlopban és a legalsó sorban jelennek meg.",
			legend:
				"Ez az eredmény jelmagyarázata. Például öt azonos szimbólum egy sorban, oszlopban vagy átlóban 10 pontot ad.",
			right: {
				part1:
					"Az átló eredménye mindkét végén megjelenik, így kétszer számítódik!",
				part2: "Dobd újra a kockákat a játék folytatásához.",
			},
		},
		settingsChangeScore:
			"Továbbá, az eredmény mostantól mindig látható, így gyorsan láthatod, mely sorok/oszlopok igényelnek figyelmet.",
	},

	error: {
		oops: "Hoppá, valami elromlott.",
		error:
			"Váratlan hiba történt, kérjük töltsd újra az oldalt. Elnézést a kellemetlenségért.",
		googleTranslateNote:
			"Megjegyzés: ha a Google Chrome fordító funkcióját használod ennek az oldalnak a lefordításához, akkor ez a funkció valószínűleg ennek a hibának az oka.",
		reload: "Újratöltés",
	},

	headerMenu: {
		openMenu: "Menü megnyitása",
		detrak: "Detrak",
		newFeatures: {
			title: "Új funkciók érhetők el!",
			description: "Fejezd be a játékot és töltsd újra az alkalmazást.",
			action: "Alkalmazás újratöltése",
		},
		install: {
			installableWebApp: "A Detrak egy telepíthető webalkalmazás!",
			description:
				"Hozzáadhatod a kezdőképernyődhöz és offline is játszhatsz vele.",
			install: "Detrak telepítése",
		},
		gigamicGame: "A Detrak egy szerzői joggal védett játék, amelyet kiadott",
		digitalVersion: {
			madeBy: "Ezt a digitális verziót én készítettem,",
			webDeveloper:
				", egy független webfejlesztő, a Gigamic jóváhagyásával. Köszönöm újra, Gigamic!",
		},
		writeToMe: "Remélem élvezed! Bátran írj nekem",
		rules: {
			readTheRules: "Szabályok elolvasása",
			rules: "Játékszabályok",
			part1:
				"Dobd el a kockákat és helyezd el a kapott szimbólumokat a táblában, hogy a lehető legtöbb pontot szerezd.",
			part2:
				"Pontokat szerzel, amikor azonos szimbólumokat helyezel egymás mellé egy sorban, oszlopban vagy a bal alsótól jobb felső átlóban:",
			points: {
				part1: "2 szimbólum: +2 pont,",
				part2: "3 szimbólum: +3 pont,",
				part3: "4 szimbólum: +8 pont,",
				part4: "5 szimbólum: +10 pont,",
				part5: "nincs szimbólum: -5 pont.",
			},
			part3:
				"A kockákról származó két szimbólumot szomszédos szabad cellákba kell helyezni (vízszintesen vagy függőlegesen).",
			part4:
				"Lehetetlen csak az egyik szimbólumot elhelyezni a kettő közül. Ezért, hogy megelőzd a játék idő előtti befejezését, kerüld a cellák elszigetelését.",
		},
		termsOfUse: "Felhasználási feltételek",
		privacyPolicy: "Adatvédelmi irányelvek",
		copyright: {
			originalGame: "Eredeti játék",
			digitalVersion: "Digitális verzió",
		},
		sourceCodeAvailableAt: "Forráskód elérhető itt:",
		version: "Verzió",
		checkForUpdates: "Frissítések keresése",
		updateAvailable:
			"Frissítés érhető el, fejezd be a játékot és kattints ide a frissítéshez",
	},

	languageSelector: {
		chooseLanguage: "Nyelv kiválasztása",
		language: "Nyelv",
		changeLanguageError:
			"Hiba történt az új nyelv beállítása közben. Kérjük, ellenőrizd, hogy az eszközödnek van-e internetkapcsolata, indítsd újra az alkalmazást és próbáld újra.",
	},

	navigationBlocker: {
		title: "Ez leállítja a jelenlegi játékot, biztos vagy benne?",
		description:
			"Kérjük erősítsd meg, hogy le akarod állítani a jelenlegi játékot.",
		confirmationCheckbox:
			"Mindig kérjen megerősítést a játék megszakítása előtt",
		keepPlaying: "Játék folytatása",
		stopGame: "Játék leállítása",
	},

	newGameDialog: {
		close: "Bezárás",
		createGame: "Játék létrehozása",
		joinGame: "Csatlakozás játékhoz",
		pickAnotherDay: "Másik nap kiválasztása",
		play: "Játék",
		playRandomGame: "Véletlenszerű játék",
		playTodayGame: "Mai játék",
		playWithFriends: "Játék barátokkal",
		shareCreate: {
			scanQrCode:
				"Kérd meg a barátaidat, hogy szkenneljék be ezt a QR kódot, vagy oszd meg velük a linket.",
			clickPlay: "Aztán kattints a Játék gombra.",
			title: "Detrak",
			joinMe: "🎲 Csatlakozz hozzám ebben a Detrak játékban!",
			shareLink: "Link megosztása",
			copyLink: "Link másolása vágólapra",
		},
		shareJoin: {
			useCamera:
				"Használd eszközöd kameráját egy játék QR kódjának beszkennelésához.",
			openGameLink: "Vagy nyiss meg egy játék linkjét.",
			enterGameLink:
				"Vagy írd be a játék linkjét alább és kattints a Játék gombra.",
		},
		stopGame: "Játék leállítása",
		title: {
			createGame: "Játék létrehozása",
			inviteToGame: "Emberek meghívása a jelenlegi játékba",
			joinGame: "Csatlakozás játékhoz",
			newGame: "Új játék",
			playWithFriends: "Játék barátokkal",
			welcomeToNewVersion: "Üdvözlünk a Detrak új verziójában!",
		},
		welcome: {
			intro: "Kétféle új játékmód van:",
			dailyGame: "Napi játék",
			dailyGameDetails:
				"minden nap a kockák által kihúzott szimbólumok sorrendje ugyanaz mindenkinek.",
			playWithFriends: "Játék barátokkal",
			playWithFriendsDetails:
				"hozz létre egy játékot és hívj meg embereket a csatlakozásra. Itt is ugyanaz a sorrendben húzódnak ki a szimbólumok a játék során neked és a barátaidnak. Internetkapcsolat nélkül is működik!",
			startPlaying: "Kezdj el játszani!",
		},
		or: "vagy",
	},

	themeSelector: {
		chooseTheme: "Téma kiválasztása",
		theme: "Téma",
		sameAsDevice: "Ugyanaz, mint az eszközön",
		light: "Világos",
		dark: "Sötét",
	},

	settingsDialog: {
		openSettingsDialog: "Beállítások dialógus megnyitása",
		settings: "Beállítások",

		alwaysShowScore: {
			title: "Eredmény mindig megjelenítése",
			description: "Megjeleníti az aktuális eredményedet a játék során.",
		},

		showScoreWithContrast: {
			title: "Eredmény megjelenítése kontraszttal szín helyett",
			description: "Szürke árnyalatokat használ piros, zöld és kék helyett.",
		},

		showScoreLegend: {
			title: "Eredmény jelmagyarázatának megjelenítése",
			description: "Megjeleníti a tábla fölé helyezett jelmagyarázatot.",
		},

		animateDice: {
			title: "Kockadobás animálása",
			description: "3D animációval dobja a kockákat.",
		},

		autoRollDice: {
			title: "Kockák automatikus dobása",
			notAvailableDuringTheFirstGame: "(az első játék során nem elérhető)",
			description:
				"Automatikusan dobja a kockákat, miután a két szimbólum elhelyezésre került a táblában. Ez eltávolítja a második szimbólum elhelyezésének visszavonási lehetőségét.",
		},

		showDiceMarker: {
			title: "Kocka jelölő megjelenítése",
			description: "Megmutatja, melyik szimbólumot kell elhelyezni a táblán.",
		},

		showConfetti: {
			title: "Konfetti megjelenítése",
			description:
				"Konfetti robbanást dob, amikor megvered a legjobb eredményedet!",
		},

		gridAtBottom: {
			title: "Tábla elhelyezése a képernyő alján",
			description: "Hasznos egy kézzel való játékhoz mobilon.",
		},

		enableWakeLock: {
			title: "Képernyő bekapcsolva tartása játék közben",
			description:
				"Megakadályozza, hogy az eszközöd képernyője kikapcsoljon öt percig játék közben. Vedd figyelembe, hogy néhány Apple eszköz nem támogatja ezt a funkciót.",
		},

		showNavigationAlert: {
			title: "Megerősítés kérése a játékból való kilépés előtt",
			description:
				"Megerősítő dialógust mutat az oldalról való navigáláskor játék közben.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
