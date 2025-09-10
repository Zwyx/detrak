import { I18nLocale } from "./en";

export const ptBR: I18nLocale = {
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
		endOnGame: "Terminou! Sua pontuação é",
		endOnGameWithNewScore: "Muito bem! Nova pontuação mais alta:",
		numberOfGames_zero: "0 jogos",
		numberOfGames_one: "1 jogo",
		numberOfGames_other: "{{count}} jogos",
		rollDice: "rolar dados",
		rollDice1: {
			part1: "O símbolo que você selecionou foi inserido na grade abaixo.",
			part2: "Agora, role os dados!",
		},
		settingsChangeDice:
			"Os dados agora não são animados e são rolados automaticamente para permitir que você jogue mais rápido. Você pode alterar isso nas configurações.",
		share: {
			shareYourScore: "Compartilhe sua pontuação",
			sendScore: "Envie sua pontuação para seus amigos!",
			inviteFriends:
				"E convide-os para desafiá-lo no mesmo jogo (os símbolos sorteados durante o jogo deles serão os mesmos que os seus).",
			title: "Detrak",
			text: "🎲 Acabei de fazer {{count}} no Detrak! Consegue fazer melhor? 🤞",
		},
		sr: {
			selectSymbol: "Selecione um dos seis símbolos para começar.",
			newDraw: "Novo sorteio:",
			gameFinished: "Jogo terminado! Pontuação:",
			gameFinishedNewHighestScore: "Jogo terminado! Nova pontuação mais alta!",
		},
		replayGame: "Jogar este jogo novamente",
		startNewGame: "Começar um novo jogo",
		welcome: {
			title: "Bem-vindo ao Detrak!",
			text: "Comece escolhendo um dos seis símbolos acima.",
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
				"Escolha uma célula vazia na grade para inserir o símbolo do primeiro dado.",
			part2: "O objetivo é agrupar símbolos idênticos.",
		},
		clickGrid2: {
			part1: "Escolha outra célula vazia para o segundo símbolo.",
			part2: "Deve estar diretamente ao lado do primeiro.",
		},
		rollDice2: {
			left: "As pontuações serão exibidas na coluna mais à direita e na linha mais abaixo.",
			legend:
				"Esta é a legenda da pontuação. Por exemplo, cinco símbolos idênticos em uma linha, coluna ou diagonal dão 10 pontos.",
			right: {
				part1:
					"A pontuação da diagonal aparece nas duas extremidades, então é contada duas vezes!",
				part2: "Role os dados novamente para continuar o jogo.",
			},
		},
		settingsChangeScore:
			"Além disso, a pontuação agora é sempre mostrada, para que você possa ver rapidamente quais linhas/colunas precisam de atenção.",
	},

	error: {
		oops: "Ops, algo deu errado.",
		error:
			"Ocorreu um erro inesperado, por favor recarregue a página. Desculpe pelo inconveniente.",
		googleTranslateNote:
			"Nota: se você estiver usando o recurso de tradução do Google Chrome para traduzir esta página, então este recurso provavelmente é a causa deste erro.",
		reload: "Recarregar",
	},

	headerMenu: {
		openMenu: "Abrir menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Novos recursos disponíveis!",
			description: "Termine seu jogo e recarregue o aplicativo.",
			action: "Recarregar aplicativo",
		},
		install: {
			installableWebApp: "Detrak é um aplicativo web instalável!",
			description:
				"Você pode adicioná-lo à sua tela inicial e jogar mesmo offline.",
			install: "Instalar Detrak",
		},
		gigamicGame: "Detrak é um jogo com direitos autorais publicado pela",
		digitalVersion: {
			madeBy: "Esta versão digital foi feita por mim,",
			webDeveloper:
				", um desenvolvedor web independente, com a aprovação da Gigamic. Obrigado novamente, Gigamic!",
		},
		writeToMe:
			"Espero que esteja gostando! Fique à vontade para me escrever em",
		rules: {
			readTheRules: "Ler as regras",
			rules: "Regras do jogo",
			part1:
				"Role os dados e coloque os símbolos obtidos na grade para marcar o máximo de pontos possível.",
			part2:
				"Você marca pontos quando coloca símbolos idênticos próximos uns aos outros, em uma linha, coluna ou diagonal de baixo-esquerda para cima-direita:",
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
		termsOfUse: "Termos de uso",
		privacyPolicy: "Política de privacidade",
		copyright: {
			originalGame: "Jogo original",
			digitalVersion: "Versão digital",
		},
		sourceCodeAvailableAt: "Código fonte disponível em",
		version: "Versão",
		checkForUpdates: "Verificar atualizações",
		updateAvailable:
			"Atualização disponível, termine seu jogo e clique aqui para atualizar",
	},

	languageSelector: {
		chooseLanguage: "Escolher idioma",
		language: "Idioma",
		changeLanguageError:
			"Ocorreu um erro ao configurar o novo idioma. Por favor, certifique-se de que seu dispositivo está conectado à internet, reinicie o aplicativo e tente novamente.",
	},

	navigationBlocker: {
		title: "Isso vai parar o jogo atual, tem certeza?",
		description: "Por favor, confirme que deseja parar o jogo atual.",
		confirmationCheckbox:
			"Sempre pedir confirmação antes de interromper um jogo",
		keepPlaying: "Continuar jogando",
		stopGame: "Parar este jogo",
	},

	newGameDialog: {
		close: "Fechar",
		createGame: "Criar um jogo",
		joinGame: "Entrar em um jogo",
		pickAnotherDay: "Escolher outro dia",
		play: "Jogar",
		playRandomGame: "Jogar um jogo aleatório",
		playTodayGame: "Jogar o jogo de hoje",
		playWithFriends: "Jogar com amigos",
		shareCreate: {
			scanQrCode:
				"Peça aos seus amigos para escanear este código QR ou compartilhe o link com eles.",
			clickPlay: "Depois clique em Jogar.",
			title: "Detrak",
			joinMe: "🎲 Venha jogar Detrak comigo!",
			shareLink: "Compartilhar link",
			copyLink: "Copiar link para a área de transferência",
		},
		shareJoin: {
			useCamera:
				"Use a câmera do seu dispositivo para escanear o código QR de um jogo.",
			openGameLink: "Ou abra o link de um jogo.",
			enterGameLink: "Ou digite o link de um jogo abaixo e clique em Jogar.",
		},
		stopGame: "Parar este jogo",
		title: {
			createGame: "Criar um jogo",
			inviteToGame: "Convidar pessoas para o jogo atual",
			joinGame: "Entrar em um jogo",
			newGame: "Novo jogo",
			playWithFriends: "Jogar com amigos",
			welcomeToNewVersion: "Bem-vindo à nova versão do Detrak!",
		},
		welcome: {
			intro: "Há duas novas maneiras de jogar:",
			dailyGame: "O jogo diário",
			dailyGameDetails:
				"a cada dia, a sequência de símbolos sorteados pelos dados é a mesma para todos.",
			playWithFriends: "Jogar com amigos",
			playWithFriendsDetails:
				"crie um jogo e convide pessoas para participar. Aqui também, a sequência de símbolos sorteados durante o jogo é a mesma para seus amigos e você. Funciona mesmo sem conexão com a internet!",
			startPlaying: "Comece a jogar!",
		},
		or: "ou",
	},

	themeSelector: {
		chooseTheme: "Escolher tema",
		theme: "Tema",
		sameAsDevice: "Mesmo que o dispositivo",
		light: "Claro",
		dark: "Escuro",
	},

	settingsDialog: {
		openSettingsDialog: "Abrir diálogo de configurações",
		settings: "Configurações",

		alwaysShowScore: {
			title: "Sempre mostrar a pontuação",
			description: "Mostra sua pontuação atual durante o jogo.",
		},

		showScoreWithContrast: {
			title: "Mostrar a pontuação com contraste em vez de cor",
			description: "Usa níveis de cinza em vez de vermelho, verde e azul.",
		},

		showScoreLegend: {
			title: "Mostrar a legenda da pontuação",
			description: "Mostra a legenda colocada acima da grade.",
		},

		animateDice: {
			title: "Animar os dados rolando",
			description: "Rola os dados com uma animação 3D.",
		},

		autoRollDice: {
			title: "Rolar os dados automaticamente",
			notAvailableDuringTheFirstGame:
				"(não disponível durante o primeiro jogo)",
			description:
				"Rola os dados automaticamente quando os dois símbolos são colocados na grade. Isso remove a capacidade de desfazer a colocação do segundo símbolo.",
		},

		showDiceMarker: {
			title: "Mostrar o marcador dos dados",
			description: "Mostra qual símbolo deve ser colocado na grade.",
		},

		showConfetti: {
			title: "Mostrar confetes",
			description:
				"Lança uma explosão de confetes quando você supera sua pontuação mais alta!",
		},

		gridAtBottom: {
			title: "Colocar a grade na parte inferior da tela",
			description: "Útil para jogar com uma mão no celular.",
		},

		enableWakeLock: {
			title: "Manter a tela ligada durante o jogo",
			description:
				"Impede que a tela do seu dispositivo desligue por cinco minutos enquanto um jogo está sendo jogado. Note que alguns dispositivos Apple não suportam este recurso.",
		},

		showNavigationAlert: {
			title: "Pedir confirmação antes de sair de um jogo",
			description:
				"Mostra um diálogo de confirmação ao navegar para longe durante um jogo.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
