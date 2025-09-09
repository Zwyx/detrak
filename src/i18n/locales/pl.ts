import { I18nLocale } from "./en";

export const pl: I18nLocale = {
	common: {
		close: "Zamknij",
		symbolNames: {
			bar: "belka",
			cross: "krzyż",
			tripleBar: "potrójna belka",
			sharp: "krzyżyk",
			triangle: "trójkąt",
			circle: "koło",
		},
	},

	app: {
		bestScore: "najlepszy wynik:",
		endOnGame: "Skończone! Twój wynik to",
		endOnGameWithNewScore: "Świetnie! Nowy najwyższy wynik:",
		numberOfGames_one: "1 gra",
		numberOfGames_few: "{{count}} gry",
		numberOfGames_many: "{{count}} gier",
		numberOfGames_other: "{{count}} gier",
		rollDice: "rzuć kostkami",
		rollDice1: {
			part1: "Wybrany symbol został umieszczony w siatce poniżej.",
			part2: "Teraz rzuć kostkami!",
		},
		settingsChangeDice:
			"Kostki są teraz rzucane automatycznie i bez animacji, aby umożliwić szybszą grę. Możesz to zmienić w ustawieniach.",
		share: {
			shareYourScore: "Udostępnij swój wynik",
			sendScore: "Wyślij swój wynik znajomym!",
			inviteFriends:
				"I zaproś ich do wyzwania w tej samej grze (symbole wylosowane podczas ich gry będą takie same jak twoje).",
			title: "Detrak",
			text: "🎲 Właśnie zrobiłem {{count}} w Detrak! Czy potrafisz lepiej? 🤞",
		},
		sr: {
			selectSymbol: "Wybierz jeden z sześciu symboli, aby zacząć.",
			newDraw: "Nowe losowanie:",
			gameFinished: "Gra zakończona! Wynik:",
			gameFinishedNewHighestScore: "Gra zakończona! Nowy najwyższy wynik!",
		},
		replayGame: "Zagraj ponownie tę grę",
		startNewGame: "Rozpocznij nową grę",
		welcome: {
			title: "Witaj w Detrak!",
			text: "Zacznij od wyboru jednego z sześciu symboli powyżej.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "kolumna",
			empty: "puste",
			row: "wiersz",
		},
		clickGrid1: {
			part1:
				"Wybierz pustą komórkę w siatce, aby umieścić symbol z pierwszej kostki.",
			part2: "Celem jest grupowanie identycznych symboli.",
		},
		clickGrid2: {
			part1: "Wybierz inną pustą komórkę dla drugiego symbolu.",
			part2: "Musi być bezpośrednio obok pierwszego.",
		},
		rollDice2: {
			left: "Wyniki będą wyświetlane w prawej kolumnie i dolnym wierszu.",
			legend:
				"To jest legenda wyniku. Na przykład pięć identycznych symboli w wierszu, kolumnie lub na przekątnej daje 10 punktów.",
			right: {
				part1:
					"Wynik przekątnej pojawia się na obu końcach, więc jest liczony dwukrotnie!",
				part2: "Rzuć kostkami ponownie, aby kontynuować grę.",
			},
		},
		settingsChangeScore:
			"Dodatkowo wynik jest teraz zawsze pokazywany, więc możesz szybko zobaczyć, które wiersze/kolumny wymagają uwagi.",
	},

	error: {
		oops: "Ups, coś poszło nie tak.",
		error:
			"Wystąpił nieoczekiwany błąd, proszę odśwież stronę. Przepraszamy za niedogodności.",
		googleTranslateNote:
			"Uwaga: jeśli używasz funkcji tłumaczenia Google Chrome do tłumaczenia tej strony, to prawdopodobnie ta funkcja jest przyczyną tego błędu.",
		reload: "Odśwież",
	},

	headerMenu: {
		openMenu: "Otwórz menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Dostępne nowe funkcje!",
			description: "Skończ grę i odśwież aplikację.",
			action: "Odśwież aplikację",
		},
		install: {
			installableWebApp:
				"Detrak to aplikacja internetowa, którą można zainstalować!",
			description: "Możesz dodać ją do ekranu głównego i grać nawet offline.",
			install: "Zainstaluj Detrak",
		},
		gigamicGame: "Detrak to gra chroniona prawami autorskimi, wydana przez",
		digitalVersion: {
			madeBy: "Ta wersja cyfrowa została stworzona przeze mnie,",
			webDeveloper:
				", niezależnego programistę internetowego, za zgodą Gigamic. Jeszcze raz dziękuję, Gigamic!",
		},
		writeToMe: "Mam nadzieję, że ci się podoba! Śmiało napisz do mnie na",
		rules: {
			readTheRules: "Przeczytaj zasady",
			rules: "Zasady gry",
			part1:
				"Rzuć kostkami i umieść uzyskane symbole w siatce, aby zdobyć jak najwięcej punktów.",
			part2:
				"Zdobywasz punkty, gdy umieszczasz identyczne symbole obok siebie, w wierszu, kolumnie lub na przekątnej od lewego dolnego do prawego górnego rogu:",
			points: {
				part1: "2 symbole: +2 punkty,",
				part2: "3 symbole: +3 punkty,",
				part3: "4 symbole: +8 punktów,",
				part4: "5 symboli: +10 punktów,",
				part5: "brak symboli: -5 punktów.",
			},
			part3:
				"Dwa symbole z kostek muszą być umieszczone na sąsiadujących wolnych komórkach (poziomo lub pionowo).",
			part4:
				"Nie można umieścić tylko jednego z dwóch symboli. Dlatego, aby zapobiec przedwczesnemu zakończeniu gry, unikaj izolowania komórek.",
		},
		termsOfUse: "Warunki użytkowania",
		privacyPolicy: "Polityka prywatności",
		copyright: {
			originalGame: "Oryginalna gra",
			digitalVersion: "Wersja cyfrowa",
		},
		sourceCodeAvailableAt: "Kod źródłowy dostępny na",
		version: "Wersja",
		checkForUpdates: "Sprawdź aktualizacje",
		updateAvailable:
			"Dostępna aktualizacja, skończ grę i kliknij tutaj, aby zaktualizować",
	},

	languageSelector: {
		chooseLanguage: "Wybierz język",
		language: "Język",
		changeLanguageOffline:
			"Nie można wczytać tłumaczenia: Twoje urządzenie wydaje się być offline. Upewnij się, że Twoje urządzenie ma dostęp do Internetu i spróbuj ponownie.",
		changeLanguageError:
			"Wystąpił błąd podczas konfigurowania nowego języka. Uruchom ponownie aplikację i spróbuj ponownie.",
	},

	navigationBlocker: {
		title: "To zatrzyma bieżącą grę, czy jesteś pewien?",
		description: "Potwierdź, że chcesz zatrzymać bieżącą grę.",
		confirmationCheckbox: "Zawsze pytaj o potwierdzenie przed przerwaniem gry",
		keepPlaying: "Kontynuuj grę",
		stopGame: "Zatrzymaj tę grę",
	},

	newGameDialog: {
		close: "Zamknij",
		createGame: "Stwórz grę",
		joinGame: "Dołącz do gry",
		pickAnotherDay: "Wybierz inny dzień",
		play: "Graj",
		playRandomGame: "Zagraj losową grę",
		playTodayGame: "Zagraj dzisiejszą grę",
		playWithFriends: "Graj ze znajomymi",
		shareCreate: {
			scanQrCode:
				"Poproś znajomych o zeskanowanie tego kodu QR lub udostępnij im link.",
			clickPlay: "Następnie kliknij Graj.",
			title: "Detrak",
			joinMe: "🎲 Dołącz do mojej gry w Detrak!",
			shareLink: "Udostępnij link",
			copyLink: "Skopiuj link do schowka",
		},
		shareJoin: {
			useCamera: "Użyj kamery urządzenia, aby zeskanować kod QR gry.",
			openGameLink: "Lub otwórz link do gry.",
			enterGameLink: "Lub wprowadź link do gry poniżej i kliknij Graj.",
		},
		stopGame: "Zatrzymaj tę grę",
		title: {
			createGame: "Stwórz grę",
			inviteToGame: "Zaproś ludzi do bieżącej gry",
			joinGame: "Dołącz do gry",
			newGame: "Nowa gra",
			playWithFriends: "Graj ze znajomymi",
			welcomeToNewVersion: "Witaj w nowej wersji Detrak!",
		},
		welcome: {
			intro: "Są dwa nowe sposoby gry:",
			dailyGame: "Gra dnia",
			dailyGameDetails:
				"każdego dnia sekwencja symboli wyrzucanych przez kostki jest taka sama dla wszystkich.",
			playWithFriends: "Graj ze znajomymi",
			playWithFriendsDetails:
				"stwórz grę i zaproś ludzi do dołączenia. Tutaj także sekwencja symboli podczas gry jest taka sama dla twoich znajomych i ciebie. Działa nawet bez połączenia internetowego!",
			startPlaying: "Zacznij grać!",
		},
		or: "lub",
	},

	themeSelector: {
		chooseTheme: "Wybierz motyw",
		theme: "Motyw",
		sameAsDevice: "Taki sam jak urządzenie",
		light: "Jasny",
		dark: "Ciemny",
	},

	settingsDialog: {
		openSettingsDialog: "Otwórz okno ustawień",
		settings: "Ustawienia",

		alwaysShowScore: {
			title: "Zawsze pokazuj wynik",
			description: "Pokazuje twój bieżący wynik podczas gry.",
		},

		showScoreWithContrast: {
			title: "Pokazuj wynik z kontrastem zamiast koloru",
			description:
				"Używa odcieni szarości zamiast czerwonego, zielonego i niebieskiego.",
		},

		showScoreLegend: {
			title: "Pokazuj legendę wyniku",
			description: "Pokazuje legendę umieszczoną nad siatką.",
		},

		animateDice: {
			title: "Animuj rzucanie kostkami",
			description: "Rzuca kostkami z animacją 3D.",
		},

		autoRollDice: {
			title: "Automatycznie rzucaj kostkami",
			notAvailableDuringTheFirstGame: "(niedostępne podczas pierwszej gry)",
			description:
				"Rzuca kostkami automatycznie po umieszczeniu dwóch symboli w siatce. Usuwa to możliwość cofnięcia umieszczenia drugiego symbolu.",
		},

		showDiceMarker: {
			title: "Pokazuj znacznik kostki",
			description: "Pokazuje, który symbol ma być umieszczony w siatce.",
		},

		showConfetti: {
			title: "Pokazuj konfetti",
			description:
				"Wywołuje eksplozję konfetti, gdy pobijesz swój najwyższy wynik!",
		},

		gridAtBottom: {
			title: "Umieść siatkę na dole ekranu",
			description: "Przydatne do gry jedną ręką na telefonie.",
		},

		enableWakeLock: {
			title: "Utrzymuj ekran włączony podczas gry",
			description:
				"Zapobiega wyłączaniu się ekranu urządzenia przez pięć minut podczas gry. Zauważ, że niektóre urządzenia Apple nie obsługują tej funkcji.",
		},

		showNavigationAlert: {
			title: "Pytaj o potwierdzenie przed opuszczeniem gry",
			description:
				"Pokazuje okno potwierdzenia przy nawigowaniu poza grę podczas rozgrywki.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
