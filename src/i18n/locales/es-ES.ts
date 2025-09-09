import { I18nLocale } from "./en";

export const esES: I18nLocale = {
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
		bestScore: "mejor puntuación:",
		endOnGame: "¡Terminado! Tu puntuación es",
		endOnGameWithNewScore: "¡Bien hecho! ¡Nueva puntuación máxima:",
		numberOfGames_zero: "0 partidas",
		numberOfGames_one: "1 partida",
		numberOfGames_other: "{{count}} partidas",
		rollDice: "lanzar dados",
		rollDice1: {
			part1:
				"El símbolo que has seleccionado se ha insertado en la cuadrícula de abajo.",
			part2: "¡Ahora, lanza los dados!",
		},
		settingsChangeDice:
			"Los dados ahora se lanzan automáticamente y sin animación para permitirte jugar más rápido. Puedes cambiar esto en los ajustes.",
		share: {
			shareYourScore: "Comparte tu puntuación",
			sendScore: "¡Envía tu puntuación a tus amigos!",
			inviteFriends:
				"E invítales a retarte en la misma partida (los símbolos que aparezcan durante su partida serán los mismos que los tuyos).",
			title: "Detrak",
			text: "🎲 ¡Acabo de hacer {{count}} en Detrak! ¿Puedes superarlo? 🤞",
		},
		sr: {
			selectSymbol: "Selecciona uno de los seis símbolos para empezar.",
			newDraw: "Nueva tirada:",
			gameFinished: "¡Partida terminada! Puntuación:",
			gameFinishedNewHighestScore:
				"¡Partida terminada! ¡Nueva puntuación máxima!",
		},
		replayGame: "Repetir esta partida",
		startNewGame: "Comenzar una nueva partida",
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
				"Elige una casilla vacía en la cuadrícula para insertar el símbolo del primer dado.",
			part2: "El objetivo es agrupar símbolos idénticos.",
		},
		clickGrid2: {
			part1: "Elige otra casilla vacía para el segundo símbolo.",
			part2: "Debe estar justo al lado del primero.",
		},
		rollDice2: {
			left: "Las puntuaciones se mostrarán en la columna más a la derecha y en la fila más abajo.",
			legend:
				"Esta es la leyenda de la puntuación. Por ejemplo, cinco símbolos idénticos en una fila, columna o diagonal dan 10 puntos.",
			right: {
				part1:
					"¡La puntuación de la diagonal aparece en ambos extremos, así que se cuenta dos veces!",
				part2: "Lanza los dados de nuevo para continuar la partida.",
			},
		},
		settingsChangeScore:
			"Además, la puntuación ahora se muestra siempre, para que puedas ver rápidamente qué filas/columnas necesitan atención.",
	},

	error: {
		oops: "Vaya, algo ha salido mal.",
		error:
			"Ha ocurrido un error inesperado, por favor recarga la página. Disculpa las molestias.",
		googleTranslateNote:
			"Nota: si estás usando la función de traducción de Google Chrome para traducir esta página, es probable que esta función sea la causa del error.",
		reload: "Recargar",
	},

	headerMenu: {
		openMenu: "Abrir menú",
		detrak: "Detrak",
		newFeatures: {
			title: "¡Nuevas funciones disponibles!",
			description: "Termina tu partida y recarga la aplicación.",
			action: "Recargar aplicación",
		},
		install: {
			installableWebApp: "¡Detrak es una aplicación web instalable!",
			description:
				"Puedes añadirla a tu pantalla de inicio y jugar incluso sin conexión.",
			install: "Instalar Detrak",
		},
		gigamicGame: "Detrak es un juego con derechos de autor publicado por",
		digitalVersion: {
			madeBy: "Esta versión digital ha sido creada por mí,",
			webDeveloper:
				", un desarrollador web independiente, con la aprobación de Gigamic. ¡Gracias de nuevo, Gigamic!",
		},
		writeToMe: "¡Espero que lo estés disfrutando! No dudes en escribirme a",
		rules: {
			readTheRules: "Leer las reglas",
			rules: "Reglas del juego",
			part1:
				"Lanza los dados y coloca los símbolos obtenidos en la cuadrícula para conseguir la máxima puntuación posible.",
			part2:
				"Consigues puntos cuando colocas símbolos idénticos uno al lado del otro, en una fila, columna o en la diagonal de abajo izquierda a arriba derecha:",
			points: {
				part1: "2 símbolos: +2 puntos,",
				part2: "3 símbolos: +3 puntos,",
				part3: "4 símbolos: +8 puntos,",
				part4: "5 símbolos: +10 puntos,",
				part5: "sin símbolos: -5 puntos.",
			},
			part3:
				"Los dos símbolos de los dados deben colocarse en casillas libres adyacentes (horizontal o verticalmente).",
			part4:
				"Es imposible colocar solo uno de los dos símbolos. Por lo tanto, para evitar que el juego termine prematuramente, evita aislar casillas.",
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
			"Actualización disponible, termina tu partida y haz clic aquí para actualizar",
	},

	languageSelector: {
		chooseLanguage: "Elegir idioma",
		language: "Idioma",
		changeLanguageOffline:
			"No se puede cargar la traducción: tu dispositivo parece estar sin conexión. Por favor, asegúrate de que tu dispositivo tiene acceso a Internet e inténtalo de nuevo",
		changeLanguageError:
			"Se ha producido un error al configurar el nuevo idioma. Por favor, reinicia la aplicación e inténtalo de nuevo",
	},

	navigationBlocker: {
		title: "Esto detendrá la partida actual, ¿estás seguro?",
		description: "Por favor, confirma que quieres detener la partida actual.",
		confirmationCheckbox:
			"Pedir siempre confirmación antes de interrumpir una partida",
		keepPlaying: "Seguir jugando",
		stopGame: "Detener esta partida",
	},

	newGameDialog: {
		close: "Cerrar",
		createGame: "Crear una partida",
		joinGame: "Unirse a una partida",
		pickAnotherDay: "Elegir otro día",
		play: "Jugar",
		playRandomGame: "Jugar una partida aleatoria",
		playTodayGame: "Jugar la partida del día",
		playWithFriends: "Jugar con amigos",
		shareCreate: {
			scanQrCode:
				"Pide a tus amigos que escaneen este código QR o comparte el enlace con ellos.",
			clickPlay: "Luego haz clic en Jugar.",
			title: "Detrak",
			joinMe: "🎲 ¡Únete a mi partida de Detrak!",
			shareLink: "Compartir enlace",
			copyLink: "Copiar enlace al portapapeles",
		},
		shareJoin: {
			useCamera:
				"Usa la cámara de tu dispositivo para escanear el código QR de una partida.",
			openGameLink: "O abre el enlace de una partida.",
			enterGameLink:
				"O introduce el enlace de una partida abajo y haz clic en Jugar.",
		},
		stopGame: "Detener esta partida",
		title: {
			createGame: "Crear una partida",
			inviteToGame: "Invitar gente a la partida actual",
			joinGame: "Unirse a una partida",
			newGame: "Nueva partida",
			playWithFriends: "Jugar con amigos",
			welcomeToNewVersion: "¡Bienvenido a la nueva versión de Detrak!",
		},
		welcome: {
			intro: "Hay dos nuevas formas de jugar:",
			dailyGame: "La partida diaria",
			dailyGameDetails:
				"cada día, la secuencia de símbolos que sale en los dados es la misma para todos.",
			playWithFriends: "Jugar con amigos",
			playWithFriendsDetails:
				"crea una partida e invita a gente a unirse. Aquí también, la secuencia de símbolos durante la partida es la misma para tus amigos y para ti. ¡Funciona incluso sin conexión a internet!",
			startPlaying: "¡Empieza a jugar!",
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
		openSettingsDialog: "Abrir diálogo de ajustes",
		settings: "Ajustes",

		alwaysShowScore: {
			title: "Mostrar siempre la puntuación",
			description: "Muestra tu puntuación actual durante la partida.",
		},

		showScoreWithContrast: {
			title: "Mostrar la puntuación con contraste en lugar de color",
			description: "Usa niveles de gris en lugar de rojo, verde y azul.",
		},

		showScoreLegend: {
			title: "Mostrar la leyenda de puntuación",
			description: "Muestra la leyenda colocada encima de la cuadrícula.",
		},

		animateDice: {
			title: "Animar los dados",
			description: "Lanza los dados con una animación 3D.",
		},

		autoRollDice: {
			title: "Lanzar los dados automáticamente",
			notAvailableDuringTheFirstGame:
				"(no disponible durante la primera partida)",
			description:
				"Lanza los dados automáticamente una vez que los dos símbolos están colocados en la cuadrícula. Esto elimina la posibilidad de deshacer la colocación del segundo símbolo.",
		},

		showDiceMarker: {
			title: "Mostrar el marcador de dados",
			description: "Muestra qué símbolo debe colocarse en la cuadrícula.",
		},

		showConfetti: {
			title: "Mostrar confeti",
			description:
				"¡Lanza una explosión de confeti cuando superas tu puntuación máxima!",
		},

		gridAtBottom: {
			title: "Colocar la cuadrícula en la parte inferior de la pantalla",
			description: "Útil para jugar con una mano en el móvil.",
		},

		enableWakeLock: {
			title: "Mantener la pantalla encendida mientras juegas",
			description:
				"Evita que la pantalla de tu dispositivo se apague durante cinco minutos mientras juegas una partida. Ten en cuenta que algunos dispositivos Apple no admiten esta función.",
		},

		showNavigationAlert: {
			title: "Pedir confirmación antes de salir de una partida",
			description:
				"Muestra un diálogo de confirmación al navegar fuera durante una partida.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
