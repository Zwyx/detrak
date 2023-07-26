import { I18nLocale } from "./en";

export const fr: I18nLocale = {
	app: {
		autoRollDice:
			"Les dés sont maintenant non animés et lancés automatiquement pour vous permettre de jouer plus rapidement. Ceci est configurable dans la boîte de dialogue des paramètres.",
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
		startNewGame: "Rejouer",
		welcome: {
			title: "Bienvenu dans le jeu Detrak !",
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
				"Ceci est la légende du score. Exemple : cinq symbols identique sur une ligne, une colonne, ou la diagonale, donne 10 points.",
			right: {
				part1:
					"Le score de la diagonale apparaît aux deux extrémités — il est compté deux fois !",
				part2: "Lancez à nouveau les dés pour continuer le jeu.",
			},
		},
		symbolNames: {
			bar: "barre",
			circle: "cercle",
			cross: "croix",
			sharp: "dièse",
			triangle: "triangle",
			tripleBar: "triple barre",
		},
	},
	headerMenu: {
		aboutTheDeveloper: "À propos du dévelopeur",
		detrak: "Detrak",
		goToEditorWebsite: "Aller sur le site de l'éditeur",
		heyImAlex1: "Je suis ",
		heyImAlex2: "Alex",
		heyImAlex3: ", un dévelopeur web australien.",
		hopeEnjoyDetrak: "J'espère que vous apréciez Détrak !",
		toggleMenu: "Ouvrir le menu",
		writeToMe: "Écrivez-moi à ",
	},
	languageToggle: { chooseLanguage: "Choisir la langue" },
	modeToggle: {
		chooseTheme: "Choisir le thème",
		dark: "Foncé",
		light: "Clair",
		sameAsDevice: "Identique à l'appareil",
	},
	settingsDialog: {
		openSettingsDialog: "Ouvrir la boîte de dialog des paramètres",
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
		showConfetti: {
			title: "Confettis",
			description:
				"Jeter des confettis quand vous établissez un nouveau record !",
		},
	},
} as const;
