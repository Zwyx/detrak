import { I18nLocale } from "./en";

export const fr: I18nLocale = {
	common: {
		symbolNames: {
			bar: "barre",
			circle: "cercle",
			cross: "croix",
			sharp: "dièse",
			triangle: "triangle",
			tripleBar: "triple barre",
		},
	},

	app: {
		autoRollDice:
			"Les dés sont maintenant non animés et lancés automatiquement pour vous permettre de jouer plus rapidement. Ceci est configurable dans la boite de dialogue des paramètres.",
		bestScore: "meilleur score :",
		endOnGame: "Terminé! Votre score est",
		endOnGameWithNewScore: "Bravo! Votre nouveau record est",
		numberOfGames_one: "{{count}} partie",
		numberOfGames_other: "{{count}} parties",
		rollDice: "lancer les dés",
		rollDice1: {
			part1: "Le symbole sélectionné a été placé dans la grille ci-dessous.",
			part2: "Maintenant, lancez les dés !",
		},
		sr: {
			selectSymbol: "Sélectionnez l'un des six symbols pour commencer.",
			newDraw: "Nouveau tirage :",
		},
		startNewGame: "Nouvelle partie",
		welcome: {
			title: "Bienvenu dans le jeu Détrak !",
			text: "Commencez par sélectionner l'un des six symboles ci-dessus.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "colonne",
			empty: "vide",
			row: "ligne",
		},
		clickGrid1: {
			part1:
				"Choisissez une cellule vide dans la grille pour y insérer le symbole du premier dé.",
			part2: "Le but est de grouper les symboles identiques ensembles.",
		},
		clickGrid2: {
			part1: "Choisissez une autre cellule vide pour le deuxième symbole.",
			part2: "Elle doit être juste à côté de la première.",
		},
		rollDice2: {
			left: "Les scores s'afficheront dans la colonne de droite et la ligne du bas.",
			legend:
				"Ceci est la légende du score. Exemple : cinq symboles identiques sur une ligne, une colonne, ou la diagonale, donne 10 points.",
			right: {
				part1:
					"Le score de la diagonale apparait aux deux extrémités — il est compté deux fois !",
				part2: "Lancez à nouveau les dés pour continuer le jeu.",
			},
		},
	},

	error: {
		error: "Une erreur inattendue s'est produite, veuillez recharger la page.",
		oops: "Oups...",
		reload: "Recharger",
	},

	headerMenu: {
		openMenu: "Ouvrir le menu",
		detrak: "Détrak",
		newVersion: {
			title: "Nouvelle version disponible",
			description: "Terminez votre partie et rechargez l'application.",
			action: "Recharger l'application",
		},
		gigamicGame: "Détrak est un jeu protégé par copyright et publié par",
		digitalVersion: {
			madeBy: "Cette version numérique a été créée par moi-même,",
			webDeveloper:
				", développeur web, avec l'accord de Gigamic. Merci encore, Gigamic !",
		},
		writeToMe: "J'espère que vous l'appréciez ! N'hésitez pas à m'écrire à",
		version: "Version",
		checkForUpdates: "Vérifier la présence d'une mise à jour",
		updateAvailable: "Mise à jour disponible, voir ci-dessus",
	},

	languageSelector: {
		chooseLanguage: "Choisir la langue",
	},

	navigationBlocker: {
		title: "Vous allez arrêter la partie en cours, êtes-vous sûr ?",
		description:
			"Veuillez confirmer que vous souhaitez interrompre la partie en cours.",
		confirmationCheckbox:
			"Toujours demander confirmation avant d'interrompre une partie",
		keepPlaying: "Continuer la partie",
		stopGame: "Arrêter la partie",
	},

	newGameDialog: {
		close: "Fermer",
		createGame: "Créer une partie",
		joinGame: "Rejoindre une partie",
		pickAnotherDay: "Choisir un autre jour",
		play: "Jouer",
		playRandomGame: "Jouer une partie aléatoire",
		playTodayGame: "Jouer la partie du jour",
		playWithFriends: "Jouer avec des amis",
		shareCreate: {
			scanQrCode:
				"Demandez à vos amis de scanner ce QR code, ou partagez le lien avec eux.",
			clickPlay: "Puis cliquez sur Jouer.",
			title: "Detrak",
			joinMe: "Rejoins-moi pour cette partie de Detrak",
			shareLink: "Partager le lien",
			copyLink: "Copier le lien dans le presse-papiers",
		},
		shareJoin: {
			useCamera:
				"Utilisez l'appareil photo de votre appareil pour scanner le QR code d'une partie.",
			openGameLink: "Ou, ouvrez le lien d'une partie.",
			enterGameLink:
				"Ou, entrez le lien d'une partie ci-dessous et cliquez sur Jouer.",
		},
		stopGame: "Arrêter cette partie",
		title: {
			createGame: "Créer une partie",
			inviteToGame: "Inviter des personnes à la partie en cours",
			joinGame: "Rejoindre une partie",
			newGame: "Nouvelle partie",
			playWithFriends: "Jouer avec des amis",
			welcomeToNewVersion: "Bienvenue dans la nouvelle version de Détrak !",
		},
		welcome: {
			intro: "Il y a deux nouvelles façons de jouer :",
			dailyGame: "La partie du jour",
			dailyGameDetails:
				"chaque jour, la séquence de symboles tirée par les dés sera la même pour tout le monde.",
			playWithFriends: "Jouer avec des amis",
			playWithFriendsDetails:
				"vous pouvez maintenant créer une partie et inviter des personnes à rejoindre. Ici aussi, la séquence de symboles tirée pendant la partie sera la même pour vos amis et vous. Cela fonctionne même sans connexion internet.",
			startPlaying: "Commencez à jouer !",
		},
	},

	themeSelector: {
		chooseTheme: "Choisir le thème",
		dark: "Foncé",
		light: "Clair",
		sameAsDevice: "Identique à l'appareil",
	},

	settingsDialog: {
		openSettingsDialog: "Ouvrir la boite de dialog des paramètres",
		settings: "Paramètres",

		alwaysShowScore: {
			title: "Toujours afficher le score",
			description:
				"Vous permettra de voir votre score en temps réel, au lieu de seulement à la fin de la partie.",
		},

		showScoreLegend: {
			title: "Afficher la légende du score",
			description: "La légende placée au dessus de la grille de jeu.",
		},

		animateDice: {
			title: "Animer les lancés de dés",
			description: "Lancer les dés avec une animation 3D.",
		},

		autoRollDice: {
			title: "Lancer les dés automatiquement",
			notAvailableDuringTheFirstGame:
				"(non disponible pendant la première partie)",
			description:
				"Les dés sont lancés automatiquement dès qu'un coup est complet (lorsque les deux symboles sont placés sur la grille). Ceci empêche l'annulation du placement du deuxième symbole.",
		},

		showDiceMarker: {
			title: "Afficher un marqueur sous les dés",
			description:
				"Afficher un marquer sous le dé dont le symbole est celui sur le point d'être placé dans la grille.",
		},

		showConfetti: {
			title: "Confettis",
			description:
				"Jeter des confettis quand vous établissez un nouveau record !",
		},

		showNavigationAlert: {
			title: "Demander confirmation avant d'interrompre une partie",
			description:
				"Afficher une boite de dialogue lorsque vous être sur le point de quitter la partie en cours.",
		},

		close: "Fermer",
	},

	siteHeader: {
		detrak: "Détrak",
		game: "Partie :",
	},
} as const;
