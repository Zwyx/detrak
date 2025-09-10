import { I18nLocale } from "./en";

export const fr: I18nLocale = {
	common: {
		close: "Fermer",
		symbolNames: {
			bar: "barre",
			cross: "croix",
			tripleBar: "triple barre",
			sharp: "dièse",
			triangle: "triangle",
			circle: "cercle",
		},
	},

	app: {
		bestScore: "meilleur score :",
		endOnGame: "Terminé ! Votre score est",
		endOnGameWithNewScore: "Bravo ! Nouveau record :",
		numberOfGames_zero: "{{count}} partie",
		numberOfGames_one: "{{count}} partie",
		numberOfGames_other: "{{count}} parties",
		rollDice: "lancer les dés",
		rollDice1: {
			part1: "Le symbole sélectionné a été placé dans la grille ci-dessous.",
			part2: "Maintenant, lancez les dés !",
		},
		settingsChangeDice:
			"Les dés ne sont désormais plus animés et se lancent automatiquement pour vous permettre de jouer plus rapidement. Vous pouvez modifier cela dans les paramètres.",
		share: {
			shareYourScore: "Partager votre score",
			sendScore: "Envoyez votre score à vos amis !",
			inviteFriends:
				"Et invitez-les à vous défier sur la même partie (les symboles tirés pendant leur partie seront les mêmes que les vôtres).",
			title: "Détrak",
			text: "🎲 {{count}} à Détrak ! Peux-tu faire mieux ? 🤞",
		},
		sr: {
			selectSymbol: "Sélectionnez l'un des six symboles pour commencer.",
			newDraw: "Nouveau tirage :",
			gameFinished: "Partie terminée ! Votre score est de",
			gameFinishedNewHighestScore: "Partie terminée ! Nouveau record !",
		},
		replayGame: "Rejouer cette partie",
		startNewGame: "Commencer une nouvelle partie",
		welcome: {
			title: "Bienvenu dans le jeu Détrak !",
			text: "Commencez par choisir l'un des six symboles ci-dessus.",
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
				"Choisissez une case vide dans la grille pour insérer le symbole du premier dé.",
			part2: "L'objectif est de regrouper les symboles identiques.",
		},
		clickGrid2: {
			part1: "Choisissez une autre case vide pour le second symbole.",
			part2: "Il doit être directement adjacent au premier.",
		},
		rollDice2: {
			left: "Les scores seront affichés dans la colonne de droite et la ligne du bas.",
			legend:
				"Ceci est la légende du score. Par exemple, cinq symboles identiques sur une ligne, une colonne ou la diagonale donnent 10 points.",
			right: {
				part1:
					"Le score de la diagonale apparait aux deux extrémités, il est donc compté deux fois !",
				part2: "Relancez les dés pour continuer la partie.",
			},
		},
		settingsChangeScore:
			"De plus, le score est maintenant toujours affiché, vous pouvez donc voir rapidement quelles lignes/colonnes nécessitent votre attention.",
	},

	error: {
		oops: "Oups...",
		error: "Une erreur inattendue s'est produite, veuillez recharger la page.",
		googleTranslateNote:
			"Note : si vous utilisez la fonction de traduction de Google Chrome pour traduire cette page, cette fonction est probablement la cause de l'erreur.",
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
		install: {
			installableWebApp: "Détrak est une application web installable !",
			description:
				"Vous pouvez l'ajouter à votre écran d'accueil et jouer même sans connection Internet.",
			install: "Installer Détrak",
		},
		gigamicGame: "Détrak est un jeu protégé par copyright et publié par",
		digitalVersion: {
			madeBy: "Cette version numérique a été créée par moi-même,",
			webDeveloper:
				", développeur web indépendant, avec l'accord de Gigamic. Merci encore, Gigamic !",
		},
		writeToMe: "J'espère que vous l'appréciez ! N'hésitez pas à m'écrire à",
		rules: {
			readTheRules: "Lire les règles",
			rules: "Règles du jeu",
			part1:
				"Lancez les dés et placez les symboles obtenus dans la grille pour marquer le plus de points possible.",
			part2:
				"Vous marquez des points en plaçant des symboles identiques côte à côte, en ligne, en colonne, ou sur la diagonale d'en bas à gauche à en haut à droite :",
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
				"Il est impossible de ne placer qu'un seul des deux symboles. Par conséquent, pour éviter que la partie ne se termine prématurément, évitez d'isoler des cases.",
		},
		termsOfUse: "Conditions d'utilisation",
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
		changeLanguageError:
			"Une erreur s'est produite lors du changement de langue. Veuillez vérifier votre connexion Internet, redémarrer l'application et réessayer.",
	},

	navigationBlocker: {
		title: "Ceci va arrêter la partie en cours, êtes-vous sûr ?",
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
			title: "Détrak",
			joinMe: "🎲 Rejoins-moi pour cette partie de Détrak !",
			shareLink: "Partager le lien",
			copyLink: "Copier le lien dans le presse-papier",
		},
		shareJoin: {
			useCamera:
				"Utilisez l'appareil photo de votre appareil pour scanner le QR code d'une partie.",
			openGameLink: "Ou ouvrez le lien d'une partie.",
			enterGameLink:
				"Ou saisissez le lien d'une partie ci-dessous et cliquez sur Jouer.",
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
			startPlaying: "Commencer à jouer !",
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
		openSettingsDialog: "Ouvrir la boite de dialogue des paramètres",
		settings: "Paramètres",

		alwaysShowScore: {
			title: "Toujours afficher le score",
			description: "Affiche votre score actuel pendant la partie.",
		},

		showScoreWithContrast: {
			title: "Afficher le score avec du contraste",
			description:
				"Utilise des niveaux de gris au lieu du rouge, vert et bleu.",
		},

		showScoreLegend: {
			title: "Afficher la légende du score",
			description: "Affiche la légende placée au-dessus de la grille.",
		},

		animateDice: {
			title: "Animer le lancer de dés",
			description: "Lance les dés avec une animation 3D.",
		},

		autoRollDice: {
			title: "Lancer les dés automatiquement",
			notAvailableDuringTheFirstGame:
				"(non disponible pendant la première partie)",
			description:
				"Lance les dés automatiquement une fois les deux symboles placés dans la grille. Cela supprime la possibilité d'annuler le placement du second symbole.",
		},

		showDiceMarker: {
			title: "Afficher le marqueur de dé",
			description: "Indique quel symbole est à placer sur la grille.",
		},

		showConfetti: {
			title: "Afficher les confettis",
			description:
				"Lance une explosion de confettis quand vous établissez un nouveau record !",
		},

		gridAtBottom: {
			title: "Placer la grille en bas de l'écran",
			description: "Pratique pour jouer d'une seule main sur mobile.",
		},

		enableWakeLock: {
			title: "Garder l'écran allumé pendant une partie",
			description:
				"Maintient votre écran allumé, pour 5 minutes, pendant que vous jouez. Notez que certains appareils Apple ne prennent pas en charge cette fonctionnalité.",
		},

		showNavigationAlert: {
			title: "Demander confirmation avant de quitter une partie",
			description:
				"Affiche une boite de dialogue de confirmation lorsque vous être sur le point de quitter la partie en cours.",
		},
	},

	siteHeader: {
		detrak: "Détrak",
	},
};
