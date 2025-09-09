import { I18nLocale } from "./en";

export const zhHant: I18nLocale = {
	common: {
		close: "關閉",
		symbolNames: {
			bar: "豎線",
			cross: "十字",
			tripleBar: "三豎線",
			sharp: "升號",
			triangle: "三角形",
			circle: "圓形",
		},
	},

	app: {
		bestScore: "最高分:",
		endOnGame: "遊戲結束！你的得分是",
		endOnGameWithNewScore: "做得好！新的最高分:",
		numberOfGames_other: "{{count}}局遊戲",
		rollDice: "擲骰子",
		rollDice1: {
			part1: "你選擇的符號已插入到下方的網格中。",
			part2: "現在，擲骰子！",
		},
		settingsChangeDice:
			"骰子現在不顯示動畫並且自動擲出，讓你能更快地遊戲。你可以在設定中更改此選項。",
		share: {
			shareYourScore: "分享你的得分",
			sendScore: "將你的得分發送給朋友！",
			inviteFriends:
				"並邀請他們在同一個遊戲中挑戰你（他們遊戲中抽到的符號序列將與你的相同）。",
			title: "Detrak",
			text: "🎲 我在 Detrak 上獲得了 {{count}} 分！你能做得更好嗎？ 🤞",
		},
		sr: {
			selectSymbol: "選擇六個符號中的一個開始遊戲。",
			newDraw: "新抽取:",
			gameFinished: "遊戲結束！得分:",
			gameFinishedNewHighestScore: "遊戲結束！新的最高分！",
		},
		replayGame: "重玩這局遊戲",
		startNewGame: "開始新遊戲",
		welcome: {
			title: "歡迎來到 Detrak！",
			text: "首先選擇上方六個符號中的一個。",
		},
	},

	detrak: {
		ariaLabel: {
			column: "列",
			empty: "空",
			row: "行",
		},
		clickGrid1: {
			part1: "在網格中選擇一個空格來插入第一個骰子的符號。",
			part2: "目標是將相同的符號組合在一起。",
		},
		clickGrid2: {
			part1: "為第二個符號選擇另一個空格。",
			part2: "它必須直接與第一個相鄰。",
		},
		rollDice2: {
			left: "得分將顯示在最右邊的列和最下面的行中。",
			legend:
				"這是得分說明。例如，一行、一列或對角線上的五個相同符號可得 10 分。",
			right: {
				part1: "對角線的得分會在兩端顯示，所以會被計算兩次！",
				part2: "再次擲骰子繼續遊戲。",
			},
		},
		settingsChangeScore:
			"另外，現在始終顯示得分，這樣你可以快速看到哪些行/列需要注意。",
	},

	error: {
		oops: "哎呀，出了點問題。",
		error: "發生了意外錯誤，請重新整理頁面。抱歉造成不便。",
		googleTranslateNote:
			"注意：如果你正在使用 Google Chrome 的翻譯功能來翻譯此頁面，那麼此功能可能是導致此錯誤的原因。",
		reload: "重新整理",
	},

	headerMenu: {
		openMenu: "開啟選單",
		detrak: "Detrak",
		newFeatures: {
			title: "新功能可用！",
			description: "完成你的遊戲並重新載入應用程式。",
			action: "重新載入應用程式",
		},
		install: {
			installableWebApp: "Detrak 是一個可安裝的網頁應用程式！",
			description: "你可以將它新增到主畫面，甚至在離線時也能遊戲。",
			install: "安裝 Detrak",
		},
		gigamicGame: "Detrak 是由以下公司發行的版權遊戲",
		digitalVersion: {
			madeBy: "這個數位版本是由我製作的，",
			webDeveloper:
				"，一名獨立的網頁開發者，經 Gigamic 批准。再次感謝 Gigamic！",
		},
		writeToMe: "希望你玩得開心！歡迎寫信給我",
		rules: {
			readTheRules: "閱讀規則",
			rules: "遊戲規則",
			part1: "擲骰子並將獲得的符號放置在網格中以獲得儘可能多的分數。",
			part2:
				"當你將相同的符號相鄰放置在一行、一列或從左下到右上的對角線上時，你會得分：",
			points: {
				part1: "2 個符號：+2 分，",
				part2: "3 個符號：+3 分，",
				part3: "4 個符號：+8 分，",
				part4: "5 個符號：+10 分，",
				part5: "沒有符號：-5 分。",
			},
			part3: "骰子上的兩個符號必須放置在相鄰的空格上（水平或垂直）。",
			part4:
				"不可能只放置兩個符號中的一個。因此，為了防止遊戲過早結束，要避免孤立格子。",
		},
		termsOfUse: "使用條款",
		privacyPolicy: "隱私政策",
		copyright: {
			originalGame: "原版遊戲",
			digitalVersion: "數位版本",
		},
		sourceCodeAvailableAt: "原始碼可在此處取得",
		version: "版本",
		checkForUpdates: "檢查更新",
		updateAvailable: "有可用更新，完成你的遊戲並點選此處更新",
	},

	languageSelector: {
		chooseLanguage: "選擇語言",
		language: "語言",
		changeLanguageOffline:
			"無法載入翻譯：你的裝置似乎處於離線狀態。請確保你的裝置可以連接到網路，然後再試一次。",
		changeLanguageError:
			"設定新語言時發生錯誤。請重新啟動應用程式，然後再試一次。",
	},

	navigationBlocker: {
		title: "這將停止目前遊戲，你確定嗎？",
		description: "請確認你要停止目前遊戲。",
		confirmationCheckbox: "在中斷遊戲前始終要求確認",
		keepPlaying: "繼續遊戲",
		stopGame: "停止這局遊戲",
	},

	newGameDialog: {
		close: "關閉",
		createGame: "建立遊戲",
		joinGame: "加入遊戲",
		pickAnotherDay: "選擇其他日期",
		play: "開始遊戲",
		playRandomGame: "玩隨機遊戲",
		playTodayGame: "玩今日遊戲",
		playWithFriends: "與朋友一起玩",
		shareCreate: {
			scanQrCode: "讓你的朋友掃描此 QR 碼，或與他們分享連結。",
			clickPlay: "然後點選開始遊戲。",
			title: "Detrak",
			joinMe: "🎲 加入我的 Detrak 遊戲！",
			shareLink: "分享連結",
			copyLink: "複製連結到剪貼簿",
		},
		shareJoin: {
			useCamera: "使用你裝置的相機掃描遊戲的 QR 碼。",
			openGameLink: "或者，開啟遊戲連結。",
			enterGameLink: "或者，在下方輸入遊戲連結並點選開始遊戲。",
		},
		stopGame: "停止這局遊戲",
		title: {
			createGame: "建立遊戲",
			inviteToGame: "邀請他人加入目前遊戲",
			joinGame: "加入遊戲",
			newGame: "新遊戲",
			playWithFriends: "與朋友一起玩",
			welcomeToNewVersion: "歡迎來到新版本的 Detrak！",
		},
		welcome: {
			intro: "有兩種新的遊戲方式：",
			dailyGame: "每日遊戲",
			dailyGameDetails: "每天，所有人抽到的骰子符號序列都是相同的。",
			playWithFriends: "與朋友一起玩",
			playWithFriendsDetails:
				"建立遊戲並邀請他人加入。在這裡，你和朋友在遊戲中抽到的符號序列也是相同的。即使沒有網路連接也能正常運作！",
			startPlaying: "開始遊戲！",
		},
		or: "或",
	},

	themeSelector: {
		chooseTheme: "選擇主題",
		theme: "主題",
		sameAsDevice: "與裝置相同",
		light: "淺色",
		dark: "深色",
	},

	settingsDialog: {
		openSettingsDialog: "開啟設定對話方塊",
		settings: "設定",

		alwaysShowScore: {
			title: "始終顯示得分",
			description: "在遊戲過程中顯示你的目前得分。",
		},

		showScoreWithContrast: {
			title: "用對比度而不是顏色顯示得分",
			description: "使用灰階而不是紅色、綠色和藍色。",
		},

		showScoreLegend: {
			title: "顯示得分說明",
			description: "顯示放置在網格上方的說明。",
		},

		animateDice: {
			title: "骰子擲出動畫",
			description: "用 3D 動畫擲骰子。",
		},

		autoRollDice: {
			title: "自動擲骰子",
			notAvailableDuringTheFirstGame: "（在第一局遊戲中不可用）",
			description:
				"一旦兩個符號被放置在網格中就自動擲骰子。這會移除撤銷第二個符號放置的功能。",
		},

		showDiceMarker: {
			title: "顯示骰子標記",
			description: "顯示要放置在網格上的符號。",
		},

		showConfetti: {
			title: "顯示彩帶",
			description: "當你打破最高分時拋灑彩帶！",
		},

		gridAtBottom: {
			title: "將網格放在螢幕底部",
			description: "有助於在手機上單手遊戲。",
		},

		enableWakeLock: {
			title: "遊戲時保持螢幕開啟",
			description:
				"在遊戲進行時防止你的裝置螢幕關閉，持續五分鐘。注意某些蘋果裝置不支援此功能。",
		},

		showNavigationAlert: {
			title: "離開遊戲前要求確認",
			description: "在遊戲進行中導航離開時顯示確認對話方塊。",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
