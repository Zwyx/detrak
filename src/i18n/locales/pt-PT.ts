import { I18nLocale } from "./en";

export const ptPT: I18nLocale = {
	common: {
		close: "Fechar",
		symbolNames: {
			bar: "barra",
			cross: "cruz",
			tripleBar: "barra tripla",
			sharp: "sustenido",
			triangle: "triângulo",
			circle: "círculo",
		},
	},

	app: {
		bestScore: "melhor pontuação:",
		endOnGame: "Terminou! A sua pontuação é",
		endOnGameWithNewScore: "Muito bem! Nova pontuação mais alta:",
		numberOfGames_zero: "0 jogos",
		numberOfGames_one: "1 jogo",
		numberOfGames_other: "{{count}} jogos",
		rollDice: "lançar dados",
		rollDice1: {
			part1: "O símbolo que seleccionou foi inserido na grelha abaixo.",
			part2: "Agora, lance os dados!",
		},
		settingsChangeDice:
			"Os dados agora não são animados e são lançados automaticamente para lhe permitir jogar mais rapidamente. Pode alterar isto nas definições.",
		share: {
			shareYourScore: "Partilhe a sua pontuação",
			sendScore: "Envie a sua pontuação aos seus amigos!",
			inviteFriends:
				"E convide-os a desafiá-lo no mesmo jogo (os símbolos sorteados durante o jogo deles serão os mesmos que os seus).",
			title: "Detrak",
			text: "🎲 Acabei de fazer {{count}} no Detrak! Consegue fazer melhor? 🤞",
		},
		sr: {
			selectSymbol: "Seleccione um dos seis símbolos para começar.",
			newDraw: "Novo sorteio:",
			gameFinished: "Jogo terminado! Pontuação:",
			gameFinishedNewHighestScore: "Jogo terminado! Nova pontuação mais alta!",
		},
		replayGame: "Jogar este jogo novamente",
		startNewGame: "Começar um novo jogo",
		welcome: {
			title: "Bem-vindo ao Detrak!",
			text: "Comece por escolher um dos seis símbolos acima.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "coluna",
			empty: "vazio",
			row: "linha",
		},
		clickGrid1: {
			part1:
				"Escolha uma célula vazia na grelha para inserir o símbolo do primeiro dado.",
			part2: "O objectivo é agrupar símbolos idênticos.",
		},
		clickGrid2: {
			part1: "Escolha outra célula vazia para o segundo símbolo.",
			part2: "Deve estar directamente ao lado do primeiro.",
		},
		rollDice2: {
			left: "As pontuações serão apresentadas na coluna mais à direita e na linha mais abaixo.",
			legend:
				"Esta é a legenda da pontuação. Por exemplo, cinco símbolos idênticos numa linha, coluna ou diagonal dão 10 pontos.",
			right: {
				part1:
					"A pontuação da diagonal aparece nas duas extremidades, por isso é contada duas vezes!",
				part2: "Lance os dados novamente para continuar o jogo.",
			},
		},
		settingsChangeScore:
			"Além disso, a pontuação agora é sempre mostrada, para que possa ver rapidamente quais linhas/colunas precisam de atenção.",
	},

	error: {
		oops: "Ups, algo correu mal.",
		error:
			"Ocorreu um erro inesperado, por favor recarregue a página. Pedimos desculpa pelo inconveniente.",
		googleTranslateNote:
			"Nota: se estiver a usar a funcionalidade de tradução do Google Chrome para traduzir esta página, então esta funcionalidade é provavelmente a causa deste erro.",
		reload: "Recarregar",
	},

	headerMenu: {
		openMenu: "Abrir menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Novas funcionalidades disponíveis!",
			description: "Termine o seu jogo e recarregue a aplicação.",
			action: "Recarregar aplicação",
		},
		install: {
			installableWebApp: "O Detrak é uma aplicação web instalável!",
			description:
				"Pode adicioná-la ao seu ecrã inicial e jogar mesmo sem ligação à internet.",
			install: "Instalar Detrak",
		},
		gigamicGame: "Detrak é um jogo com direitos de autor publicado pela",
		digitalVersion: {
			madeBy: "Esta versão digital foi feita por mim,",
			webDeveloper:
				", um programador web independente, com a aprovação da Gigamic. Obrigado novamente, Gigamic!",
		},
		writeToMe: "Espero que esteja a gostar! Não hesite em escrever-me para",
		rules: {
			readTheRules: "Ler as regras",
			rules: "Regras do jogo",
			part1:
				"Lance os dados e coloque os símbolos obtidos na grelha para marcar o máximo de pontos possível.",
			part2:
				"Marca pontos quando coloca símbolos idênticos próximos uns dos outros, numa linha, coluna ou diagonal de baixo-esquerda para cima-direita:",
			points: {
				part1: "2 símbolos: +2 pontos,",
				part2: "3 símbolos: +3 pontos,",
				part3: "4 símbolos: +8 pontos,",
				part4: "5 símbolos: +10 pontos,",
				part5: "nenhum símbolo: -5 pontos.",
			},
			part3:
				"Os dois símbolos dos dados devem ser colocados em células livres adjacentes (horizontal ou verticalmente).",
			part4:
				"É impossível colocar apenas um dos dois símbolos. Portanto, para evitar que o jogo termine prematuramente, evite isolar células.",
		},
		termsOfUse: "Termos de utilização",
		privacyPolicy: "Política de privacidade",
		copyright: {
			originalGame: "Jogo original",
			digitalVersion: "Versão digital",
		},
		sourceCodeAvailableAt: "Código fonte disponível em",
		version: "Versão",
		checkForUpdates: "Verificar actualizações",
		updateAvailable:
			"Actualização disponível, termine o seu jogo e clique aqui para actualizar",
	},

	languageSelector: {
		chooseLanguage: "Escolher idioma",
		language: "Idioma",
		changeLanguageOffline:
			"Não foi possível carregar a tradução: o seu dispositivo parece estar offline. Por favor, certifique-se de que o seu dispositivo tem acesso à Internet e tente novamente.",
		changeLanguageError:
			"Ocorreu um erro ao configurar o novo idioma. Por favor, reinicie a aplicação e tente novamente.",
	},

	navigationBlocker: {
		title: "Isto vai parar o jogo actual, tem a certeza?",
		description: "Por favor, confirme que deseja parar o jogo actual.",
		confirmationCheckbox:
			"Pedir sempre confirmação antes de interromper um jogo",
		keepPlaying: "Continuar a jogar",
		stopGame: "Parar este jogo",
	},

	newGameDialog: {
		close: "Fechar",
		createGame: "Criar um jogo",
		joinGame: "Entrar num jogo",
		pickAnotherDay: "Escolher outro dia",
		play: "Jogar",
		playRandomGame: "Jogar um jogo aleatório",
		playTodayGame: "Jogar o jogo de hoje",
		playWithFriends: "Jogar com amigos",
		shareCreate: {
			scanQrCode:
				"Peça aos seus amigos para digitalizar este código QR ou partilhe a ligação com eles.",
			clickPlay: "Depois clique em Jogar.",
			title: "Detrak",
			joinMe: "🎲 Venha jogar Detrak comigo!",
			shareLink: "Partilhar ligação",
			copyLink: "Copiar ligação para a área de transferência",
		},
		shareJoin: {
			useCamera:
				"Use a câmara do seu dispositivo para digitalizar o código QR de um jogo.",
			openGameLink: "Ou abra a ligação de um jogo.",
			enterGameLink: "Ou digite a ligação de um jogo abaixo e clique em Jogar.",
		},
		stopGame: "Parar este jogo",
		title: {
			createGame: "Criar um jogo",
			inviteToGame: "Convidar pessoas para o jogo actual",
			joinGame: "Entrar num jogo",
			newGame: "Novo jogo",
			playWithFriends: "Jogar com amigos",
			welcomeToNewVersion: "Bem-vindo à nova versão do Detrak!",
		},
		welcome: {
			intro: "Há duas novas maneiras de jogar:",
			dailyGame: "O jogo diário",
			dailyGameDetails:
				"todos os dias, a sequência de símbolos sorteados pelos dados é a mesma para todos.",
			playWithFriends: "Jogar com amigos",
			playWithFriendsDetails:
				"crie um jogo e convide pessoas a participar. Aqui também, a sequência de símbolos sorteados durante o jogo é a mesma para os seus amigos e para si. Funciona mesmo sem ligação à internet!",
			startPlaying: "Comece a jogar!",
		},
		or: "ou",
	},

	themeSelector: {
		chooseTheme: "Escolher tema",
		theme: "Tema",
		sameAsDevice: "Igual ao dispositivo",
		light: "Claro",
		dark: "Escuro",
	},

	settingsDialog: {
		openSettingsDialog: "Abrir diálogo de definições",
		settings: "Definições",

		alwaysShowScore: {
			title: "Mostrar sempre a pontuação",
			description: "Mostra a sua pontuação actual durante o jogo.",
		},

		showScoreWithContrast: {
			title: "Mostrar a pontuação com contraste em vez de cor",
			description: "Usa níveis de cinzento em vez de vermelho, verde e azul.",
		},

		showScoreLegend: {
			title: "Mostrar a legenda da pontuação",
			description: "Mostra a legenda colocada acima da grelha.",
		},

		animateDice: {
			title: "Animar os dados a rolar",
			description: "Rola os dados com uma animação 3D.",
		},

		autoRollDice: {
			title: "Lançar os dados automaticamente",
			notAvailableDuringTheFirstGame:
				"(não disponível durante o primeiro jogo)",
			description:
				"Lança os dados automaticamente quando os dois símbolos são colocados na grelha. Isto remove a capacidade de desfazer a colocação do segundo símbolo.",
		},

		showDiceMarker: {
			title: "Mostrar o marcador dos dados",
			description: "Mostra qual símbolo deve ser colocado na grelha.",
		},

		showConfetti: {
			title: "Mostrar confetes",
			description:
				"Lança uma explosão de confetes quando supera a sua pontuação mais alta!",
		},

		gridAtBottom: {
			title: "Colocar a grelha na parte inferior do ecrã",
			description: "Útil para jogar com uma mão no telemóvel.",
		},

		enableWakeLock: {
			title: "Manter o ecrã ligado durante o jogo",
			description:
				"Impede que o ecrã do seu dispositivo se desligue durante cinco minutos enquanto um jogo está a ser jogado. Note que alguns dispositivos Apple não suportam esta funcionalidade.",
		},

		showNavigationAlert: {
			title: "Pedir confirmação antes de sair de um jogo",
			description:
				"Mostra um diálogo de confirmação ao navegar para outro lado durante um jogo.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
