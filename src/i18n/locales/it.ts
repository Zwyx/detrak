import { I18nLocale } from "./en";

export const it: I18nLocale = {
	common: {
		close: "Chiudi",
		symbolNames: {
			bar: "barra",
			cross: "croce",
			tripleBar: "tripla barra",
			sharp: "diesis",
			triangle: "triangolo",
			circle: "cerchio",
		},
	},

	app: {
		bestScore: "miglior punteggio:",
		endOnGame: "Finito! Il tuo punteggio è",
		endOnGameWithNewScore: "Ben fatto! Nuovo record:",
		numberOfGames_zero: "0 partite",
		numberOfGames_one: "1 partita",
		numberOfGames_other: "{{count}} partite",
		rollDice: "lancia i dadi",
		rollDice1: {
			part1:
				"Il simbolo che hai selezionato è stato inserito nella griglia qui sotto.",
			part2: "Ora, lancia i dadi!",
		},
		settingsChangeDice:
			"I dadi ora sono senza animazione e vengono lanciati automaticamente per permetterti di giocare più velocemente. Puoi modificare questa impostazione nelle impostazioni.",
		share: {
			shareYourScore: "Condividi il tuo punteggio",
			sendScore: "Invia il tuo punteggio ai tuoi amici!",
			inviteFriends:
				"E invitali a sfidarti sulla stessa partita (i simboli estratti durante la loro partita saranno gli stessi dei tuoi).",
			title: "Detrak",
			text: "🎲 Ho fatto {{count}} a Detrak! Riesci a fare meglio? 🤞",
		},
		sr: {
			selectSymbol: "Seleziona uno dei sei simboli per iniziare.",
			newDraw: "Nuova estrazione:",
			gameFinished: "Partita finita! Punteggio:",
			gameFinishedNewHighestScore: "Partita finita! Nuovo record!",
		},
		replayGame: "Rigioca questa partita",
		startNewGame: "Inizia una nuova partita",
		welcome: {
			title: "Benvenuto a Detrak!",
			text: "Inizia scegliendo uno dei sei simboli qui sopra.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "colonna",
			empty: "vuoto",
			row: "riga",
		},
		clickGrid1: {
			part1:
				"Scegli una cella vuota nella griglia per inserire il simbolo del primo dado.",
			part2: "L'obiettivo è raggruppare i simboli identici.",
		},
		clickGrid2: {
			part1: "Scegli un'altra cella vuota per il secondo simbolo.",
			part2: "Deve essere direttamente accanto al primo.",
		},
		rollDice2: {
			left: "I punteggi saranno mostrati nella colonna più a destra e nella riga più in basso.",
			legend:
				"Questa è la legenda del punteggio. Per esempio, cinque simboli identici su una riga, una colonna o la diagonale, danno 10 punti.",
			right: {
				part1:
					"Il punteggio della diagonale appare a entrambe le estremità, quindi viene contato due volte!",
				part2: "Lancia di nuovo i dadi per continuare la partita.",
			},
		},
		settingsChangeScore:
			"Inoltre, il punteggio è ora sempre visibile, così puoi vedere rapidamente quali righe/colonne richiedono attenzione.",
	},

	error: {
		oops: "Ops, qualcosa è andato storto.",
		error:
			"Si è verificato un errore imprevisto, ricarica la pagina. Ci scusiamo per l'inconveniente.",
		googleTranslateNote:
			"Nota: se stai usando la funzione di traduzione di Google Chrome per tradurre questa pagina, questa funzione è probabilmente la causa dell'errore.",
		reload: "Ricarica",
	},

	headerMenu: {
		openMenu: "Apri menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Nuove funzionalità disponibili!",
			description: "Termina la partita e ricarica l'app.",
			action: "Ricarica app",
		},
		install: {
			installableWebApp: "Detrak è un'app web installabile!",
			description:
				"Puoi aggiungerla alla tua schermata home e giocare anche offline.",
			install: "Installa Detrak",
		},
		gigamicGame: "Detrak è un gioco protetto da copyright pubblicato da",
		digitalVersion: {
			madeBy: "Questa versione digitale è stata creata da me,",
			webDeveloper:
				", uno sviluppatore web indipendente, con l'approvazione di Gigamic. Grazie ancora, Gigamic!",
		},
		writeToMe: "Spero che ti stia piacendo! Non esitare a scrivermi a",
		rules: {
			readTheRules: "Leggi le regole",
			rules: "Regole del gioco",
			part1:
				"Lancia i dadi e posiziona i simboli ottenuti nella griglia per ottenere più punti possibile.",
			part2:
				"Ottieni punti quando posizioni simboli identici uno accanto all'altro, in una riga, una colonna o sulla diagonale da in basso a sinistra verso l'alto a destra:",
			points: {
				part1: "2 simboli: +2 punti,",
				part2: "3 simboli: +3 punti,",
				part3: "4 simboli: +8 punti,",
				part4: "5 simboli: +10 punti,",
				part5: "nessun simbolo: -5 punti.",
			},
			part3:
				"I due simboli dei dadi devono essere posizionati su celle libere adiacenti (orizzontalmente o verticalmente).",
			part4:
				"È impossibile posizionare solo uno dei due simboli. Pertanto, per evitare che la partita finisca prematuramente, evita di isolare le celle.",
		},
		termsOfUse: "Termini di utilizzo",
		privacyPolicy: "Informativa sulla privacy",
		copyright: {
			originalGame: "Gioco originale",
			digitalVersion: "Versione digitale",
		},
		sourceCodeAvailableAt: "Codice sorgente disponibile su",
		version: "Versione",
		checkForUpdates: "Controlla aggiornamenti",
		updateAvailable:
			"Aggiornamento disponibile, termina la partita e clicca qui per aggiornare",
	},

	languageSelector: {
		chooseLanguage: "Scegli la lingua",
		language: "Lingua",
	},

	navigationBlocker: {
		title: "Questo interromperà la partita in corso, sei sicuro?",
		description: "Conferma che vuoi interrompere la partita in corso.",
		confirmationCheckbox:
			"Chiedi sempre conferma prima di interrompere una partita",
		keepPlaying: "Continua a giocare",
		stopGame: "Interrompi questa partita",
	},

	newGameDialog: {
		close: "Chiudi",
		createGame: "Crea una partita",
		joinGame: "Unisciti a una partita",
		pickAnotherDay: "Scegli un altro giorno",
		play: "Gioca",
		playRandomGame: "Gioca una partita casuale",
		playTodayGame: "Gioca la partita del giorno",
		playWithFriends: "Gioca con gli amici",
		shareCreate: {
			scanQrCode:
				"Chiedi ai tuoi amici di scansionare questo codice QR, o condividi il link con loro.",
			clickPlay: "Poi clicca su Gioca.",
			title: "Detrak",
			joinMe: "🎲 Unisciti a me per questa partita di Detrak!",
			shareLink: "Condividi link",
			copyLink: "Copia link negli appunti",
		},
		shareJoin: {
			useCamera:
				"Usa la fotocamera del tuo dispositivo per scansionare il codice QR di una partita.",
			openGameLink: "Oppure, apri il link di una partita.",
			enterGameLink:
				"Oppure, inserisci il link di una partita qui sotto e clicca su Gioca.",
		},
		stopGame: "Interrompi questa partita",
		title: {
			createGame: "Crea una partita",
			inviteToGame: "Invita persone alla partita in corso",
			joinGame: "Unisciti a una partita",
			newGame: "Nuova partita",
			playWithFriends: "Gioca con gli amici",
			welcomeToNewVersion: "Benvenuto nella nuova versione di Detrak!",
		},
		welcome: {
			intro: "Ci sono due nuovi modi di giocare:",
			dailyGame: "La partita del giorno",
			dailyGameDetails:
				"ogni giorno, la sequenza di simboli estratta dai dadi è la stessa per tutti.",
			playWithFriends: "Gioca con gli amici",
			playWithFriendsDetails:
				"crea una partita e invita altre persone a partecipare. Anche qui, la sequenza di simboli estratta durante la partita è la stessa per te e i tuoi amici. Funziona anche senza connessione internet!",
			startPlaying: "Inizia a giocare!",
		},
		or: "oppure",
	},

	themeSelector: {
		chooseTheme: "Scegli tema",
		theme: "Tema",
		sameAsDevice: "Come il dispositivo",
		light: "Chiaro",
		dark: "Scuro",
	},

	settingsDialog: {
		openSettingsDialog: "Apri impostazioni",
		settings: "Impostazioni",

		alwaysShowScore: {
			title: "Mostra sempre il punteggio",
			description: "Mostra il tuo punteggio attuale durante la partita.",
		},

		showScoreWithContrast: {
			title: "Mostra il punteggio con contrasto invece del colore",
			description: "Utilizza livelli di grigio invece di rosso, verde e blu.",
		},

		showScoreLegend: {
			title: "Mostra la legenda del punteggio",
			description: "Mostra la legenda posizionata sopra la griglia.",
		},

		animateDice: {
			title: "Anima il lancio dei dadi",
			description: "Lancia i dadi con un'animazione 3D.",
		},

		autoRollDice: {
			title: "Lancia i dadi automaticamente",
			notAvailableDuringTheFirstGame:
				"(non disponibile durante la prima partita)",
			description:
				"Lancia i dadi automaticamente una volta che i due simboli sono stati posizionati nella griglia. Questo rimuove la possibilità di annullare il posizionamento del secondo simbolo.",
		},

		showDiceMarker: {
			title: "Mostra il marcatore dei dadi",
			description:
				"Mostra quale simbolo deve essere posizionato sulla griglia.",
		},

		showConfetti: {
			title: "Mostra i coriandoli",
			description:
				"Lancia un'esplosione di coriandoli quando superi il tuo record!",
		},

		gridAtBottom: {
			title: "Posiziona la griglia in fondo allo schermo",
			description: "Utile per giocare con una mano su dispositivi mobili.",
		},

		enableWakeLock: {
			title: "Mantieni lo schermo acceso durante il gioco",
			description:
				"Impedisce allo schermo del dispositivo di spegnersi per cinque minuti durante una partita. Nota che alcuni dispositivi Apple non supportano questa funzionalità.",
		},

		showNavigationAlert: {
			title: "Chiedi conferma prima di abbandonare una partita",
			description:
				"Mostra una finestra di conferma quando ci si allontana durante una partita.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
