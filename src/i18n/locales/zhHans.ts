import { I18nLocale } from "./en";

export const zhHans: I18nLocale = {
	common: {
		close: "关闭",
		symbolNames: {
			bar: "竖线",
			cross: "十字",
			tripleBar: "三竖线",
			sharp: "升号",
			triangle: "三角形",
			circle: "圆形",
		},
	},

	app: {
		bestScore: "最高分:",
		endOnGame: "游戏结束！你的得分是",
		endOnGameWithNewScore: "做得好！新的最高分:",
		numberOfGames_other: "{{count}} 局游戏",
		rollDice: "掷骰子",
		rollDice1: {
			part1: "你选择的符号已插入到下方的网格中。",
			part2: "现在，掷骰子！",
		},
		settingsChangeDice:
			"骰子现在不显示动画并且自动掷出，让你能更快地游戏。你可以在设置中更改此选项。",
		share: {
			shareYourScore: "分享你的得分",
			sendScore: "将你的得分发送给朋友！",
			inviteFriends:
				"并邀请他们在同一个游戏中挑战你（他们游戏中抽到的符号序列将与你的相同）。",
			title: "Detrak",
			text: "🎲 我在 Detrak 上获得了 {{count}} 分！你能做得更好吗？ 🤞",
		},
		sr: {
			selectSymbol: "选择六个符号中的一个开始游戏。",
			newDraw: "新抽取:",
			gameFinished: "游戏结束！得分:",
			gameFinishedNewHighestScore: "游戏结束！新的最高分！",
		},
		replayGame: "重玩这局游戏",
		startNewGame: "开始新游戏",
		welcome: {
			title: "欢迎来到 Detrak！",
			text: "首先选择上方六个符号中的一个。",
		},
	},

	detrak: {
		ariaLabel: {
			column: "列",
			empty: "空",
			row: "行",
		},
		clickGrid1: {
			part1: "在网格中选择一个空格来插入第一个骰子的符号。",
			part2: "目标是将相同的符号组合在一起。",
		},
		clickGrid2: {
			part1: "为第二个符号选择另一个空格。",
			part2: "它必须直接与第一个相邻。",
		},
		rollDice2: {
			left: "得分将显示在最右边的列和最下面的行中。",
			legend:
				"这是得分说明。例如，一行、一列或对角线上的五个相同符号可得 10 分。",
			right: {
				part1: "对角线的得分会在两端显示，所以会被计算两次！",
				part2: "再次掷骰子继续游戏。",
			},
		},
		settingsChangeScore:
			"另外，现在始终显示得分，这样你可以快速看到哪些行/列需要注意。",
	},

	error: {
		oops: "哎呀，出了点问题。",
		error: "发生了意外错误，请刷新页面。抱歉造成不便。",
		googleTranslateNote:
			"注意：如果你正在使用 Google Chrome 的翻译功能来翻译此页面，那么此功能可能是导致此错误的原因。",
		reload: "刷新",
	},

	headerMenu: {
		openMenu: "打开菜单",
		detrak: "Detrak",
		newFeatures: {
			title: "新功能可用！",
			description: "完成你的游戏并重新加载应用。",
			action: "重新加载应用",
		},
		install: {
			installableWebApp: "Detrak 是一个可安装的网页应用！",
			description: "你可以将它添加到主屏幕，甚至在离线时也能游戏。",
			install: "安装 Detrak",
		},
		gigamicGame: "Detrak 是由以下公司发行的版权游戏",
		digitalVersion: {
			madeBy: "这个数字版本是由我制作的，",
			webDeveloper:
				"，一名独立的网页开发者，经 Gigamic 批准。再次感谢 Gigamic！",
		},
		writeToMe: "希望你玩得开心！欢迎写信给我",
		rules: {
			readTheRules: "阅读规则",
			rules: "游戏规则",
			part1: "掷骰子并将获得的符号放置在网格中以获得尽可能多的分数。",
			part2:
				"当你将相同的符号相邻放置在一行、一列或从左下到右上的对角线上时，你会得分：",
			points: {
				part1: "2 个符号：+2 分，",
				part2: "3 个符号：+3 分，",
				part3: "4 个符号：+8 分，",
				part4: "5 个符号：+10 分，",
				part5: "没有符号：-5 分。",
			},
			part3: "骰子上的两个符号必须放置在相邻的空格上（水平或垂直）。",
			part4:
				"不可能只放置两个符号中的一个。因此，为了防止游戏过早结束，要避免孤立格子。",
		},
		termsOfUse: "使用条款",
		privacyPolicy: "隐私政策",
		copyright: {
			originalGame: "原版游戏",
			digitalVersion: "数字版本",
		},
		sourceCodeAvailableAt: "源代码可在此处获取",
		version: "版本",
		checkForUpdates: "检查更新",
		updateAvailable: "有可用更新，完成你的游戏并点击此处更新",
	},

	languageSelector: {
		chooseLanguage: "选择语言",
		language: "语言",
	},

	navigationBlocker: {
		title: "这将停止当前游戏，你确定吗？",
		description: "请确认你要停止当前游戏。",
		confirmationCheckbox: "在中断游戏前始终要求确认",
		keepPlaying: "继续游戏",
		stopGame: "停止这局游戏",
	},

	newGameDialog: {
		close: "关闭",
		createGame: "创建游戏",
		joinGame: "加入游戏",
		pickAnotherDay: "选择其他日期",
		play: "开始游戏",
		playRandomGame: "玩随机游戏",
		playTodayGame: "玩今日游戏",
		playWithFriends: "与朋友一起玩",
		shareCreate: {
			scanQrCode: "让你的朋友扫描此二维码，或与他们分享链接。",
			clickPlay: "然后点击开始游戏。",
			title: "Detrak",
			joinMe: "🎲 加入我的 Detrak 游戏！",
			shareLink: "分享链接",
			copyLink: "复制链接到剪贴板",
		},
		shareJoin: {
			useCamera: "使用你设备的摄像头扫描游戏的二维码。",
			openGameLink: "或者，打开游戏链接。",
			enterGameLink: "或者，在下方输入游戏链接并点击开始游戏。",
		},
		stopGame: "停止这局游戏",
		title: {
			createGame: "创建游戏",
			inviteToGame: "邀请他人加入当前游戏",
			joinGame: "加入游戏",
			newGame: "新游戏",
			playWithFriends: "与朋友一起玩",
			welcomeToNewVersion: "欢迎来到新版本的 Detrak！",
		},
		welcome: {
			intro: "有两种新的游戏方式：",
			dailyGame: "每日游戏",
			dailyGameDetails: "每天，所有人抽到的骰子符号序列都是相同的。",
			playWithFriends: "与朋友一起玩",
			playWithFriendsDetails:
				"创建游戏并邀请他人加入。在这里，你和朋友在游戏中抽到的符号序列也是相同的。即使没有网络连接也能正常工作！",
			startPlaying: "开始游戏！",
		},
		or: "或",
	},

	themeSelector: {
		chooseTheme: "选择主题",
		theme: "主题",
		sameAsDevice: "与设备相同",
		light: "浅色",
		dark: "深色",
	},

	settingsDialog: {
		openSettingsDialog: "打开设置对话框",
		settings: "设置",

		alwaysShowScore: {
			title: "始终显示得分",
			description: "在游戏过程中显示你的当前得分。",
		},

		showScoreWithContrast: {
			title: "用对比度而不是颜色显示得分",
			description: "使用灰度级别而不是红色、绿色和蓝色。",
		},

		showScoreLegend: {
			title: "显示得分说明",
			description: "显示放置在网格上方的说明。",
		},

		animateDice: {
			title: "骰子掷出动画",
			description: "用 3D 动画掷骰子。",
		},

		autoRollDice: {
			title: "自动掷骰子",
			notAvailableDuringTheFirstGame: "（在第一局游戏中不可用）",
			description:
				"一旦两个符号被放置在网格中就自动掷骰子。这会移除撤销第二个符号放置的功能。",
		},

		showDiceMarker: {
			title: "显示骰子标记",
			description: "显示要放置在网格上的符号。",
		},

		showConfetti: {
			title: "显示彩带",
			description: "当你打破最高分时抛洒彩带！",
		},

		gridAtBottom: {
			title: "将网格放在屏幕底部",
			description: "有助于在手机上单手游戏。",
		},

		enableWakeLock: {
			title: "游戏时保持屏幕开启",
			description:
				"在游戏进行时防止你的设备屏幕关闭，持续五分钟。注意某些苹果设备不支持此功能。",
		},

		showNavigationAlert: {
			title: "离开游戏前要求确认",
			description: "在游戏进行中导航离开时显示确认对话框。",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
