import { I18nLocale } from "./en";

export const cs: I18nLocale = {
	common: {
		close: "Zavřít",
		symbolNames: {
			bar: "čára",
			cross: "křížek",
			tripleBar: "trojitá čára",
			sharp: "křížek",
			triangle: "trojúhelník",
			circle: "kruh",
		},
	},

	app: {
		bestScore: "nejlepší skóre:",
		endOnGame: "Konec! Vaše skóre je",
		endOnGameWithNewScore: "Výborně! Nové nejvyšší skóre:",
		numberOfGames_zero: "0 her",
		numberOfGames_one: "1 hra",
		numberOfGames_few: "{{count}} hry",
		numberOfGames_many: "{{count}} her",
		numberOfGames_other: "{{count}} her",
		rollDice: "hodit kostky",
		rollDice1: {
			part1: "Symbol, který jste vybrali, byl vložen do mřížky níže.",
			part2: "Nyní hoďte kostky!",
		},
		settingsChangeDice:
			"Kostky jsou nyní bez animace a házejí se automaticky, abyste mohli hrát rychleji. Můžete to změnit v nastavení.",
		share: {
			shareYourScore: "Sdílejte své skóre",
			sendScore: "Pošlete své skóre svým přátelům!",
			inviteFriends:
				"A pozvěte je, aby vás vyzvali ve stejné hře (symboly vylosované během jejich hry budou stejné jako vaše).",
			title: "Detrak",
			text: "🎲 Právě jsem dosáhl {{count}} v Detraku! Dokážeš lépe? 🤞",
		},
		sr: {
			selectSymbol: "Vyberte jeden ze šesti symbolů pro začátek.",
			newDraw: "Nové losování:",
			gameFinished: "Hra skončena! Skóre:",
			gameFinishedNewHighestScore: "Hra skončena! Nové nejvyšší skóre!",
		},
		replayGame: "Hrát znovu tuto hru",
		startNewGame: "Začít novou hru",
		welcome: {
			title: "Vítejte v Detraku!",
			text: "Začněte výběrem jednoho ze šesti symbolů výše.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "sloupec",
			empty: "prázdné",
			row: "řádek",
		},
		clickGrid1: {
			part1:
				"Vyberte prázdnou buňku v mřížce pro vložení symbolu z první kostky.",
			part2: "Cílem je seskupovat stejné symboly dohromady.",
		},
		clickGrid2: {
			part1: "Vyberte další prázdnou buňku pro druhý symbol.",
			part2: "Musí být přímo vedle prvního.",
		},
		rollDice2: {
			left: "Skóre se zobrazí v krajním pravém sloupci a spodním řádku.",
			legend:
				"Toto je legenda pro skóre. Například pět stejných symbolů v řádku, sloupci nebo diagonále dává 10 bodů.",
			right: {
				part1:
					"Skóre diagonály se objevuje na obou koncích, takže se počítá dvakrát!",
				part2: "Hoďte kostky znovu pro pokračování hry.",
			},
		},
		settingsChangeScore:
			"Skóre je také nyní vždy zobrazeno, takže rychle vidíte, které řádky/sloupce potřebují pozornost.",
	},

	error: {
		oops: "Ups, něco se pokazilo.",
		error:
			"Došlo k neočekávané chybě, prosím obnovte stránku. Omlouváme se za nepříjemnosti.",
		googleTranslateNote:
			"Poznámka: pokud používáte funkci překladu Google Chrome k překladu této stránky, pak je tato funkce pravděpodobně příčinou této chyby.",
		reload: "Obnovit",
	},

	headerMenu: {
		openMenu: "Otevřít menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Nové funkce jsou k dispozici!",
			description: "Dokončete hru a obnovte aplikaci.",
			action: "Obnovit aplikaci",
		},
		install: {
			installableWebApp: "Detrak je instalovatelná webová aplikace!",
			description:
				"Můžete si ji přidat na domovskou obrazovku a hrát i offline.",
			install: "Nainstalovat Detrak",
		},
		gigamicGame: "Detrak je hra chráněná autorskými právy vydaná společností",
		digitalVersion: {
			madeBy: "Tuto digitální verzi jsem vytvořil já,",
			webDeveloper:
				", nezávislý webový vývojář, se souhlasem společnosti Gigamic. Děkuji znovu, Gigamic!",
		},
		writeToMe: "Doufám, že si to užíváte! Neváhejte mi napsat na",
		rules: {
			readTheRules: "Přečíst pravidla",
			rules: "Pravidla hry",
			part1:
				"Hoďte kostky a umístěte získané symboly do mřížky, abyste získali co nejvíce bodů.",
			part2:
				"Získáváte body, když umístíte stejné symboly vedle sebe, v řádku, sloupci nebo diagonále zleva dolů doprava nahoru:",
			points: {
				part1: "2 symboly: +2 body,",
				part2: "3 symboly: +3 body,",
				part3: "4 symboly: +8 bodů,",
				part4: "5 symbolů: +10 bodů,",
				part5: "žádné symboly: -5 bodů.",
			},
			part3:
				"Oba symboly z kostek musí být umístěny na sousední volné buňky (vodorovně nebo svisle).",
			part4:
				"Není možné umístit pouze jeden ze dvou symbolů. Proto, abyste zabránili předčasnému skončení hry, vyhněte se izolování buněk.",
		},
		termsOfUse: "Podmínky použití",
		privacyPolicy: "Zásady ochrany osobních údajů",
		copyright: {
			originalGame: "Původní hra",
			digitalVersion: "Digitální verze",
		},
		sourceCodeAvailableAt: "Zdrojový kód dostupný na",
		version: "Verze",
		checkForUpdates: "Zkontrolovat aktualizace",
		updateAvailable:
			"Aktualizace k dispozici, dokončete hru a klikněte zde pro aktualizaci",
	},

	languageSelector: {
		chooseLanguage: "Vyberte jazyk",
		language: "Jazyk",
		changeLanguageError:
			"Při nastavování nového jazyka došlo k chybě. Ujistěte se prosím, že má vaše zařízení přístup k internetu, restartujte aplikaci a zkuste to znovu",
	},

	navigationBlocker: {
		title: "Tím se zastaví aktuální hra, jste si jisti?",
		description: "Potvrďte prosím, že chcete zastavit aktuální hru.",
		confirmationCheckbox: "Vždy se ptát na potvrzení před přerušením hry",
		keepPlaying: "Pokračovat ve hře",
		stopGame: "Zastavit tuto hru",
	},

	newGameDialog: {
		close: "Zavřít",
		createGame: "Vytvořit hru",
		joinGame: "Připojit se ke hře",
		pickAnotherDay: "Vybrat jiný den",
		play: "Hrát",
		playRandomGame: "Hrát náhodnou hru",
		playTodayGame: "Hrát dnešní hru",
		playWithFriends: "Hrát s přáteli",
		shareCreate: {
			scanQrCode:
				"Požádejte své přátele, aby naskenovali tento QR kód, nebo s nimi sdílejte odkaz.",
			clickPlay: "Pak klikněte na Hrát.",
			title: "Detrak",
			joinMe: "🎲 Připojte se ke mně v této hře Detraku!",
			shareLink: "Sdílet odkaz",
			copyLink: "Zkopírovat odkaz do schránky",
		},
		shareJoin: {
			useCamera: "Použijte kameru svého zařízení k naskenování QR kódu hry.",
			openGameLink: "Nebo otevřete odkaz hry.",
			enterGameLink: "Nebo zadejte odkaz hry níže a klikněte na Hrát.",
		},
		stopGame: "Zastavit tuto hru",
		title: {
			createGame: "Vytvořit hru",
			inviteToGame: "Pozvat lidi do aktuální hry",
			joinGame: "Připojit se ke hře",
			newGame: "Nová hra",
			playWithFriends: "Hrát s přáteli",
			welcomeToNewVersion: "Vítejte v nové verzi Detraku!",
		},
		welcome: {
			intro: "Jsou zde dva nové způsoby hraní:",
			dailyGame: "Denní hra",
			dailyGameDetails:
				"každý den je posloupnost symbolů vylosovaných kostkami stejná pro všechny.",
			playWithFriends: "Hrát s přáteli",
			playWithFriendsDetails:
				"vytvořte hru a pozvěte lidi k připojení. I zde je posloupnost symbolů vylosovaných během hry stejná pro vaše přátele i vás. Funguje to i bez internetového připojení!",
			startPlaying: "Začít hrát!",
		},
		or: "nebo",
	},

	themeSelector: {
		chooseTheme: "Vyberte téma",
		theme: "Téma",
		sameAsDevice: "Stejné jako zařízení",
		light: "Světlé",
		dark: "Tmavé",
	},

	settingsDialog: {
		openSettingsDialog: "Otevřít dialog nastavení",
		settings: "Nastavení",

		alwaysShowScore: {
			title: "Vždy zobrazit skóre",
			description: "Zobrazuje vaše aktuální skóre během hry.",
		},

		showScoreWithContrast: {
			title: "Zobrazit skóre s kontrastem místo barev",
			description: "Používá úrovně šedi místo červené, zelené a modré.",
		},

		showScoreLegend: {
			title: "Zobrazit legendu skóre",
			description: "Zobrazuje legendu umístěnou nad mřížkou.",
		},

		animateDice: {
			title: "Animovat házení kostek",
			description: "Hází kostky s 3D animací.",
		},

		autoRollDice: {
			title: "Automaticky hodit kostky",
			notAvailableDuringTheFirstGame: "(není k dispozici během první hry)",
			description:
				"Automaticky hodí kostky, jakmile jsou oba symboly umístěny do mřížky. Tím se odstraní možnost vrátit umístění druhého symbolu.",
		},

		showDiceMarker: {
			title: "Zobrazit značku kostek",
			description: "Zobrazuje, který symbol má být umístěn do mřížky.",
		},

		showConfetti: {
			title: "Zobrazit konfety",
			description: "Vypustí explozi konfet, když překonáte své nejvyšší skóre!",
		},

		gridAtBottom: {
			title: "Umístit mřížku na spodek obrazovky",
			description: "Užitečné pro hraní jednou rukou na mobilu.",
		},

		enableWakeLock: {
			title: "Udržet obrazovku zapnutou během hraní",
			description:
				"Zabrání vypnutí obrazovky vašeho zařízení po dobu pěti minut během hraní hry. Poznámka: některá zařízení Apple tuto funkci nepodporují.",
		},

		showNavigationAlert: {
			title: "Ptát se na potvrzení před opuštěním hry",
			description: "Zobrazuje potvrzovací dialog při odchodu během hry.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
