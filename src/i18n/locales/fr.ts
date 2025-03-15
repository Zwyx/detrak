import { I18nLocale } from "./en";

export const fr: I18nLocale = {
	common: {
		close: "Fermer",
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
		bestScore: "meilleur score :",
		endOnGame: "Terminé ! Votre score est",
		endOnGameWithNewScore: "Bravo ! Nouveau record :",
		numberOfGames_one: "{{count}} partie",
		numberOfGames_other: "{{count}} parties",
		rollDice: "lancer les dés",
		rollDice1: {
			part1: "Le symbole sélectionné a été placé dans la grille ci-dessous.",
			part2: "Maintenant, lancez les dés !",
		},
		settingsChangeDice:
			"Les dés sont maintenant non-animés et lancés automatiquement pour vous permettre de jouer plus vite. Ceci est configurable dans les paramètres.",
		share: {
			shareYourScore: "Partager votre score",
			sendScore: "Envoyez votre score à vos amis !",
			inviteFriends:
				"Et invitez-les à vous défier sur la même partie (les symboles tirés pendant leur jeu seront les mêmes que les vôtres).",
			title: "Détrak",
			text: "🎲 {{count}} à Détrak ! Peux-tu faire mieux ? 🤞",
			newVersion:
				"(Si tu y avais joué précédemment, ferme l'appli et relance-la pour obtenir la dernière version: 2.0.0)",
		},
		sr: {
			selectSymbol: "Sélectionnez l'un des six symbols pour commencer.",
			newDraw: "Nouveau tirage :",
			gameFinished: "Partie terminée ! Votre score est de",
			gameFinishedNewHighestScore: "Partie terminée ! Nouveau record !",
		},
		startNewGame: "Jouer à nouveau",
		welcome: {
			title: "Bienvenu dans le jeu Détrak !",
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
				"Ceci est la légende du score. Exemple : cinq symboles identiques sur une ligne, une colonne, ou la diagonale, donne 10 points.",
			right: {
				part1:
					"Le score de la diagonale apparait aux deux extrémités — il est compté deux fois !",
				part2: "Lancez à nouveau les dés pour continuer le jeu.",
			},
		},
		settingsChangeScore:
			"Aussi, le score est maintenant toujours affiché, afin vous puissiez voir rapidement quelles lignes/colonnes ont besoin d'attention.",
	},

	error: {
		error: "Une erreur inattendue s'est produite, veuillez recharger la page.",
		oops: "Oups...",
		reload: "Recharger",
	},

	headerMenu: {
		openMenu: "Ouvrir le menu",
		detrak: "Détrak",
		newFeatures: {
			title: "Nouvelles fonctionnalités disponibles !",
			description: "Terminez votre partie et rechargez l'application.",
			action: "Recharger l'application",
		},
		rules: {
			readTheRules: "Lire les règles",
			rules: "Règles du jeu",
			part1:
				"Lancez les dés et placez les symboles obtenus dans la grille pour marquer le plus possible de points.",
			part2:
				"Vous marquez des points lorsque vous placez des symboles identiques l'un à côté de l'autre, sur une ligne, une colonne, ou la diagonale d'en bas à gauche à en haut à droite :",
			points: {
				part1: "2 symboles : +2 points,",
				part2: "3 symboles : +3 points,",
				part3: "4 symboles : +8 points,",
				part4: "5 symboles : +10 points,",
				part5: "aucun symbole : -5 points.",
			},
			part3:
				"Les deux symboles des dés doivent être placés sur des cases libres adjacentes (horizontalement ou verticalement).",
			part4:
				"Il est impossible de ne placer qu'un seul des deux symboles. Ainsi, pour éviter que la partie ne s'arrête prématurément, évitez d'isoler des cases.",
		},
		gigamicGame: "Détrak est un jeu protégé par copyright et publié par",
		digitalVersion: {
			madeBy: "Cette version numérique a été créée par moi-même,",
			webDeveloper:
				", développeur web, avec l'accord de Gigamic. Merci encore, Gigamic !",
		},
		writeToMe: "J'espère que vous l'appréciez ! N'hésitez pas à m'écrire à",
		termsOfUse: "Conditions générales",
		privacyPolicy: "Politique de confidentialité",
		copyright: {
			originalGame: "Jeu original",
			digitalVersion: "Version numérique",
		},
		sourceCodeAvailableAt: "Code source disponible sur",
		version: "Version",
		checkForUpdates: "Vérifier les mises à jour",
		updateAvailable:
			"Mise à jour disponible, terminez votre partie et cliquez ici pour recharger l'application",
	},

	languageSelector: {
		chooseLanguage: "Choisir la langue",
		language: "Langue",
	},

	navigationBlocker: {
		title: "Vous allez arrêter la partie en cours, êtes-vous sûr ?",
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
		playWithFriends: "Jouer avec des ami·e·s",
		shareCreate: {
			scanQrCode:
				"Demandez à vos ami·e·s de scanner ce QR code, ou envoyez-leur le lien.",
			clickPlay: "Puis cliquez sur Jouer.",
			title: "Detrak",
			joinMe: "🎲 Rejoins-moi pour cette partie de Détrak !",
			newVersion:
				"(Si tu y avais joué précédemment, ferme l'appli et relance-la pour obtenir la dernière version: 2.0.0)",
			shareLink: "Partager le lien",
			copyLink: "Copier le lien dans le presse-papiers",
			lastVersion: {
				part1: "Note : vos ami·e·s doivent utiliser Détrak version",
				part2:
					"or supérieure. Fermer et rouvrir l'applications permet de la mettre à jour.",
			},
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
			playWithFriends: "Jouer avec des ami·e·s",
			welcomeToNewVersion: "Bienvenue dans la nouvelle version de Détrak !",
		},
		welcome: {
			intro: "Il y a deux nouvelles façons de jouer :",
			dailyGame: "La partie du jour",
			dailyGameDetails:
				"chaque jour, la séquence de symboles tirée par les dés est la même pour tout le monde.",
			playWithFriends: "Jouer avec des ami·e·s",
			playWithFriendsDetails:
				"créez une partie et invitez des personnes à la rejoindre. Ici aussi, la séquence de symboles tirée pendant la partie est la même pour vos ami·e·s et vous. Cela fonctionne même sans connexion internet !",
			startPlaying: "Commencez à jouer !",
		},
		or: "ou",
	},

	themeSelector: {
		chooseTheme: "Choisir le thème",
		theme: "Thème",
		sameAsDevice: "Identique à l'appareil",
		light: "Clair",
		dark: "Sombre",
	},

	settingsDialog: {
		openSettingsDialog: "Ouvrir la boite de dialog des paramètres",
		settings: "Paramètres",

		alwaysShowScore: {
			title: "Toujours afficher le score",
			description: "Permet de voir votre score pendant la partie.",
		},

		showScoreWithContrast: {
			title: "Montrer le score avec un contraste",
			description:
				"Utilise des niveaux de gris plutôt que les couleurs rouge, vert, et blue.",
		},

		showScoreLegend: {
			title: "Afficher la légende du score",
			description: "Montre la légende placée au dessus de la grille.",
		},

		animateDice: {
			title: "Animer les lancés de dés",
			description: "Lance les dés avec une animation 3D.",
		},

		autoRollDice: {
			title: "Lancer les dés automatiquement",
			notAvailableDuringTheFirstGame:
				"(non disponible pendant la première partie)",
			description:
				"Lance les dés automatiquement que les deux symboles sont placés sur la grille. Ceci empêche l'annulation du placement du deuxième symbole.",
		},

		showDiceMarker: {
			title: "Afficher le marqueur sous les dés",
			description:
				"Affiche un marqueur pointant le symbole à placer dans la grille.",
		},

		showConfetti: {
			title: "Confettis",
			description:
				"Jette des confettis quand vous établissez un nouveau record !",
		},

		showNavigationAlert: {
			title: "Demander confirmation avant d'interrompre une partie",
			description:
				"Affiche une boite de dialogue lorsque vous être sur le point de quitter la partie en cours.",
		},
	},

	siteHeader: {
		detrak: "Détrak",
		game: "Partie :",
	},
};
