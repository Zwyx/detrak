import { I18nLocale } from "./en";

export const es419: I18nLocale = {
	common: {
		close: "Cerrar",
		symbolNames: {
			bar: "barra",
			cross: "cruz",
			tripleBar: "barra triple",
			sharp: "sostenido",
			triangle: "triángulo",
			circle: "círculo",
		},
	},

	app: {
		bestScore: "mejor puntaje:",
		endOnGame: "¡Terminado! Tu puntaje es",
		endOnGameWithNewScore: "¡Muy bien! Nuevo puntaje más alto:",
		numberOfGames_one: "{{count}} juego",
		numberOfGames_other: "{{count}} juegos",
		rollDice: "lanzar dados",
		rollDice1: {
			part1:
				"El símbolo que seleccionaste se insertó en la cuadrícula de abajo.",
			part2: "¡Ahora, lanza los dados!",
		},
		settingsChangeDice:
			"Los dados ahora se lanzan automáticamente y sin animación para permitirte jugar más rápido. Puedes cambiar esto en la configuración.",
		share: {
			shareYourScore: "Comparte tu puntaje",
			sendScore: "¡Envía tu puntaje a tus amigos!",
			inviteFriends:
				"E invítalos a desafiarte en el mismo juego (los símbolos que aparezcan durante su juego serán los mismos que los tuyos).",
			title: "Detrak",
			text: "🎲 ¡Acabo de hacer {{count}} en Detrak! ¿Puedes superarlo? 🤞",
		},
		sr: {
			selectSymbol: "Selecciona uno de los seis símbolos para empezar.",
			newDraw: "Nueva tirada:",
			gameFinished: "¡Juego terminado! Puntaje:",
			gameFinishedNewHighestScore: "¡Juego terminado! ¡Nuevo puntaje más alto!",
		},
		replayGame: "Repetir este juego",
		startNewGame: "Comenzar un nuevo juego",
		welcome: {
			title: "¡Bienvenido a Detrak!",
			text: "Empieza eligiendo uno de los seis símbolos de arriba.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "columna",
			empty: "vacío",
			row: "fila",
		},
		clickGrid1: {
			part1:
				"Elige una celda vacía en la cuadrícula para insertar el símbolo del primer dado.",
			part2: "El objetivo es agrupar símbolos idénticos.",
		},
		clickGrid2: {
			part1: "Elige otra celda vacía para el segundo símbolo.",
			part2: "Debe estar justo al lado del primero.",
		},
		rollDice2: {
			left: "Los puntajes se mostrarán en la columna más a la derecha y en la fila más abajo.",
			legend:
				"Esta es la leyenda del puntaje. Por ejemplo, cinco símbolos idénticos en una fila, columna o diagonal dan 10 puntos.",
			right: {
				part1:
					"¡El puntaje de la diagonal aparece en ambos extremos, así que se cuenta dos veces!",
				part2: "Lanza los dados otra vez para continuar el juego.",
			},
		},
		settingsChangeScore:
			"Además, el puntaje ahora se muestra siempre, para que puedas ver rápidamente qué filas/columnas necesitan atención.",
	},

	error: {
		oops: "Ups, algo salió mal.",
		error:
			"Ocurrió un error inesperado, por favor recarga la página. Disculpa las molestias.",
		googleTranslateNote:
			"Nota: si estás usando la función de traducción de Google Chrome para traducir esta página, es probable que esta función sea la causa del error.",
		reload: "Recargar",
	},

	headerMenu: {
		openMenu: "Abrir menú",
		detrak: "Detrak",
		newFeatures: {
			title: "¡Nuevas funciones disponibles!",
			description: "Termina tu juego y recarga la aplicación.",
			action: "Recargar aplicación",
		},
		install: {
			installableWebApp: "¡Detrak es una aplicación web instalable!",
			description:
				"Puedes agregarla a tu pantalla de inicio y jugar incluso sin conexión.",
			install: "Instalar Detrak",
		},
		gigamicGame: "Detrak es un juego con derechos de autor publicado por",
		digitalVersion: {
			madeBy: "Esta versión digital fue creada por mí,",
			webDeveloper:
				", un desarrollador web independiente, con la aprobación de Gigamic. ¡Gracias de nuevo, Gigamic!",
		},
		writeToMe: "¡Espero que lo estés disfrutando! No dudes en escribirme a",
		rules: {
			readTheRules: "Leer las reglas",
			rules: "Reglas del juego",
			part1:
				"Lanza los dados y coloca los símbolos obtenidos en la cuadrícula para conseguir la mayor cantidad de puntos posible.",
			part2:
				"Obtienes puntos cuando colocas símbolos idénticos uno al lado del otro, en una fila, columna o en la diagonal de abajo izquierda a arriba derecha:",
			points: {
				part1: "2 símbolos: +2 puntos,",
				part2: "3 símbolos: +3 puntos,",
				part3: "4 símbolos: +8 puntos,",
				part4: "5 símbolos: +10 puntos,",
				part5: "sin símbolos: -5 puntos.",
			},
			part3:
				"Los dos símbolos de los dados deben colocarse en celdas libres adyacentes (horizontal o verticalmente).",
			part4:
				"Es imposible colocar solo uno de los dos símbolos. Por lo tanto, para evitar que el juego termine prematuramente, evita aislar celdas.",
		},
		termsOfUse: "Términos de uso",
		privacyPolicy: "Política de privacidad",
		copyright: {
			originalGame: "Juego original",
			digitalVersion: "Versión digital",
		},
		sourceCodeAvailableAt: "Código fuente disponible en",
		version: "Versión",
		checkForUpdates: "Buscar actualizaciones",
		updateAvailable:
			"Actualización disponible, termina tu juego y haz clic aquí para actualizar",
	},

	languageSelector: {
		chooseLanguage: "Elegir idioma",
		language: "Idioma",
	},

	navigationBlocker: {
		title: "Esto detendrá el juego actual, ¿estás seguro?",
		description: "Por favor confirma que quieres detener el juego actual.",
		confirmationCheckbox:
			"Siempre pedir confirmación antes de interrumpir un juego",
		keepPlaying: "Seguir jugando",
		stopGame: "Detener este juego",
	},

	newGameDialog: {
		close: "Cerrar",
		createGame: "Crear un juego",
		joinGame: "Unirse a un juego",
		pickAnotherDay: "Elegir otro día",
		play: "Jugar",
		playRandomGame: "Jugar un juego aleatorio",
		playTodayGame: "Jugar el juego de hoy",
		playWithFriends: "Jugar con amigos",
		shareCreate: {
			scanQrCode:
				"Pide a tus amigos que escaneen este código QR o comparte el enlace con ellos.",
			clickPlay: "Luego haz clic en Jugar.",
			title: "Detrak",
			joinMe: "🎲 ¡Únete a mi juego de Detrak!",
			shareLink: "Compartir enlace",
			copyLink: "Copiar enlace al portapapeles",
		},
		shareJoin: {
			useCamera:
				"Usa la cámara de tu dispositivo para escanear el código QR de un juego.",
			openGameLink: "O abre el enlace de un juego.",
			enterGameLink:
				"O ingresa el enlace de un juego abajo y haz clic en Jugar.",
		},
		stopGame: "Detener este juego",
		title: {
			createGame: "Crear un juego",
			inviteToGame: "Invitar personas al juego actual",
			joinGame: "Unirse a un juego",
			newGame: "Nuevo juego",
			playWithFriends: "Jugar con amigos",
			welcomeToNewVersion: "¡Bienvenido a la nueva versión de Detrak!",
		},
		welcome: {
			intro: "Hay dos nuevas formas de jugar:",
			dailyGame: "El juego diario",
			dailyGameDetails:
				"cada día, la secuencia de símbolos que salen en los dados es la misma para todos.",
			playWithFriends: "Jugar con amigos",
			playWithFriendsDetails:
				"crea un juego e invita a personas a unirse. Aquí también, la secuencia de símbolos durante el juego es la misma para tus amigos y para ti. ¡Funciona incluso sin conexión a internet!",
			startPlaying: "¡Empezar a jugar!",
		},
		or: "o",
	},

	themeSelector: {
		chooseTheme: "Elegir tema",
		theme: "Tema",
		sameAsDevice: "Igual que el dispositivo",
		light: "Claro",
		dark: "Oscuro",
	},

	settingsDialog: {
		openSettingsDialog: "Abrir diálogo de configuración",
		settings: "Configuración",

		alwaysShowScore: {
			title: "Mostrar siempre el puntaje",
			description: "Muestra tu puntaje actual durante el juego.",
		},

		showScoreWithContrast: {
			title: "Mostrar el puntaje con contraste en lugar de color",
			description: "Usa niveles de gris en lugar de rojo, verde y azul.",
		},

		showScoreLegend: {
			title: "Mostrar la leyenda del puntaje",
			description: "Muestra la leyenda colocada encima de la cuadrícula.",
		},

		animateDice: {
			title: "Animar los dados",
			description: "Lanza los dados con una animación 3D.",
		},

		autoRollDice: {
			title: "Lanzar los dados automáticamente",
			notAvailableDuringTheFirstGame: "(no disponible durante el primer juego)",
			description:
				"Lanza los dados automáticamente una vez que los dos símbolos estén colocados en la cuadrícula. Esto elimina la posibilidad de deshacer la colocación del segundo símbolo.",
		},

		showDiceMarker: {
			title: "Mostrar el marcador de dados",
			description: "Muestra qué símbolo debe colocarse en la cuadrícula.",
		},

		showConfetti: {
			title: "Mostrar confeti",
			description:
				"¡Lanza una explosión de confeti cuando superas tu puntaje más alto!",
		},

		gridAtBottom: {
			title: "Colocar la cuadrícula en la parte inferior de la pantalla",
			description: "Útil para jugar con una mano en el celular.",
		},

		enableWakeLock: {
			title: "Mantener la pantalla encendida mientras juegas",
			description:
				"Evita que la pantalla de tu dispositivo se apague durante cinco minutos mientras juegas. Ten en cuenta que algunos dispositivos Apple no admiten esta función.",
		},

		showNavigationAlert: {
			title: "Pedir confirmación antes de salir de un juego",
			description:
				"Muestra un diálogo de confirmación al navegar fuera durante un juego.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
