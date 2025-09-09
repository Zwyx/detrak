import { I18nLocale } from "./en";

export const ja: I18nLocale = {
	common: {
		close: "閉じる",
		symbolNames: {
			bar: "バー",
			cross: "クロス",
			tripleBar: "トリプルバー",
			sharp: "シャープ",
			triangle: "三角",
			circle: "丸",
		},
	},

	app: {
		bestScore: "最高スコア：",
		endOnGame: "終了！あなたのスコアは",
		endOnGameWithNewScore: "すばらしい！新記録です：",
		numberOfGames_other: "{{count}}ゲーム",
		rollDice: "サイコロを振る",
		rollDice1: {
			part1: "選択したシンボルが下のグリッドに配置されました。",
			part2: "さあ、サイコロを振りましょう！",
		},
		settingsChangeDice:
			"より速くプレイできるように、サイコロのアニメーションが無効になり、自動で振られるようになりました。この設定は設定メニューで変更できます。",
		share: {
			shareYourScore: "スコアを共有",
			sendScore: "友達にスコアを送ろう！",
			inviteFriends:
				"同じゲームに挑戦するよう友達を招待しましょう（友達のゲームで出るシンボルはあなたのものと同じになります）。",
			title: "デトラック",
			text: "🎲 デトラックで{{count}}点を獲得！あなたはもっとできる？🤞",
		},
		sr: {
			selectSymbol: "6つのシンボルから1つを選んで始めましょう。",
			newDraw: "新しい抽選：",
			gameFinished: "ゲーム終了！スコア：",
			gameFinishedNewHighestScore: "ゲーム終了！新記録達成！",
		},
		replayGame: "このゲームをもう一度",
		startNewGame: "新しいゲームを開始",
		welcome: {
			title: "デトラックへようこそ！",
			text: "上の6つのシンボルから1つを選んで始めましょう。",
		},
	},

	detrak: {
		ariaLabel: {
			column: "列",
			empty: "空",
			row: "行",
		},
		clickGrid1: {
			part1:
				"グリッドの空いているマスを選んで、1つ目のサイコロのシンボルを配置してください。",
			part2: "目標は同じシンボルをまとめることです。",
		},
		clickGrid2: {
			part1: "2つ目のシンボルを配置する空のマスを選んでください。",
			part2: "1つ目のシンボルの隣接するマスに配置する必要があります。",
		},
		rollDice2: {
			left: "スコアは一番右の列と一番下の行に表示されます。",
			legend:
				"これはスコアの凡例です。例えば、行、列、または対角線上に同じシンボルを5つ並べると10点獲得できます。",
			right: {
				part1: "対角線のスコアは両端に表示され、2回カウントされます！",
				part2: "サイコロをもう一度振ってゲームを続けましょう。",
			},
		},
		settingsChangeScore:
			"また、スコアが常に表示されるようになったので、どの行/列に注目すべきかが素早く分かります。",
	},

	error: {
		oops: "申し訳ありません。問題が発生しました。",
		error:
			"予期せぬエラーが発生しました。ページを再読み込みしてください。ご不便をおかけして申し訳ありません。",
		googleTranslateNote:
			"注意：Google Chromeの翻訳機能でこのページを翻訳している場合、この機能がエラーの原因である可能性があります。",
		reload: "再読み込み",
	},

	headerMenu: {
		openMenu: "メニューを開く",
		detrak: "デトラック",
		newFeatures: {
			title: "新機能が利用可能です！",
			description: "ゲームを終了してアプリを再読み込みしてください。",
			action: "アプリを再読み込み",
		},
		install: {
			installableWebApp: "デトラックはインストール可能なWebアプリです！",
			description: "ホーム画面に追加してオフラインでもプレイできます。",
			install: "デトラックをインストール",
		},
		gigamicGame: "デトラックはGigamicが発行する著作権で保護されたゲームです",
		digitalVersion: {
			madeBy: "このデジタル版は私、",
			webDeveloper:
				"、独立系ウェブ開発者がGigamicの承認を得て制作しました。Gigamic様、ありがとうございます！",
		},
		writeToMe:
			"楽しんでいただけていますでしょうか？お気軽にこちらまでご連絡ください：",
		rules: {
			readTheRules: "ルールを読む",
			rules: "ゲームルール",
			part1:
				"サイコロを振り、出たシンボルをグリッドに配置して、できるだけ多くの点数を獲得しましょう。",
			part2:
				"同じシンボルを隣り合わせに、行、列、または左下から右上への対角線上に配置すると得点できます：",
			points: {
				part1: "2個のシンボル：+2点、",
				part2: "3個のシンボル：+3点、",
				part3: "4個のシンボル：+8点、",
				part4: "5個のシンボル：+10点、",
				part5: "シンボルなし：-5点。",
			},
			part3:
				"サイコロの2つのシンボルは、隣接する空きマス（横または縦）に配置する必要があります。",
			part4:
				"2つのシンボルのうち1つだけを配置することはできません。そのため、ゲームが早期に終了するのを防ぐため、マスを孤立させないようにしましょう。",
		},
		termsOfUse: "利用規約",
		privacyPolicy: "プライバシーポリシー",
		copyright: {
			originalGame: "オリジナルゲーム",
			digitalVersion: "デジタル版",
		},
		sourceCodeAvailableAt: "ソースコードの公開場所",
		version: "バージョン",
		checkForUpdates: "アップデートを確認",
		updateAvailable:
			"アップデートが利用可能です。ゲームを終了してここをクリックして更新してください",
	},

	languageSelector: {
		chooseLanguage: "言語を選択",
		language: "言語",
	},

	navigationBlocker: {
		title: "現在のゲームが中断されますが、よろしいですか？",
		description: "現在のゲームを中断することを確認してください。",
		confirmationCheckbox: "ゲームを中断する前に常に確認する",
		keepPlaying: "プレイを続ける",
		stopGame: "このゲームを中断",
	},

	newGameDialog: {
		close: "閉じる",
		createGame: "ゲームを作成",
		joinGame: "ゲームに参加",
		pickAnotherDay: "別の日を選択",
		play: "プレイ",
		playRandomGame: "ランダムなゲームをプレイ",
		playTodayGame: "今日のゲームをプレイ",
		playWithFriends: "友達とプレイ",
		shareCreate: {
			scanQrCode:
				"友達にこのQRコードをスキャンしてもらうか、リンクを共有してください。",
			clickPlay: "その後、プレイをクリックしてください。",
			title: "デトラック",
			joinMe: "🎲 デトラックで一緒に遊びませんか！",
			shareLink: "リンクを共有",
			copyLink: "クリップボードにリンクをコピー",
		},
		shareJoin: {
			useCamera: "デバイスのカメラでゲームのQRコードをスキャンしてください。",
			openGameLink: "または、ゲームのリンクを開いてください。",
			enterGameLink:
				"または、下にゲームのリンクを入力してプレイをクリックしてください。",
		},
		stopGame: "このゲームを中断",
		title: {
			createGame: "ゲームを作成",
			inviteToGame: "現在のゲームに人を招待",
			joinGame: "ゲームに参加",
			newGame: "新しいゲーム",
			playWithFriends: "友達とプレイ",
			welcomeToNewVersion: "デトラックの新バージョンへようこそ！",
		},
		welcome: {
			intro: "2つの新しいプレイ方法があります：",
			dailyGame: "デイリーゲーム",
			dailyGameDetails:
				"毎日、サイコロから出るシンボルの順序が全員で同じになります。",
			playWithFriends: "友達とプレイ",
			playWithFriendsDetails:
				"ゲームを作成して友達を招待しましょう。ここでも、ゲーム中に出るシンボルの順序は友達とあなたで同じになります。インターネット接続がなくても動作します！",
			startPlaying: "プレイを開始！",
		},
		or: "または",
	},

	themeSelector: {
		chooseTheme: "テーマを選択",
		theme: "テーマ",
		sameAsDevice: "デバイスと同じ",
		light: "ライト",
		dark: "ダーク",
	},

	settingsDialog: {
		openSettingsDialog: "設定を開く",
		settings: "設定",

		alwaysShowScore: {
			title: "常にスコアを表示",
			description: "ゲーム中の現在のスコアを表示します。",
		},

		showScoreWithContrast: {
			title: "スコアを色の代わりにコントラストで表示",
			description: "赤、緑、青の代わりにグレーの階調を使用します。",
		},

		showScoreLegend: {
			title: "スコアの凡例を表示",
			description: "グリッドの上に凡例を表示します。",
		},

		animateDice: {
			title: "サイコロの回転をアニメーション表示",
			description: "3Dアニメーションでサイコロを回転させます。",
		},

		autoRollDice: {
			title: "サイコロを自動で振る",
			notAvailableDuringTheFirstGame: "（最初のゲームでは利用できません）",
			description:
				"2つのシンボルをグリッドに配置したら自動的にサイコロを振ります。これにより2つ目のシンボルの配置を取り消すことができなくなります。",
		},

		showDiceMarker: {
			title: "サイコロのマーカーを表示",
			description: "グリッドに配置すべきシンボルを表示します。",
		},

		showConfetti: {
			title: "紙吹雪を表示",
			description: "最高得点を更新したときに紙吹雪の演出を表示します！",
		},

		gridAtBottom: {
			title: "グリッドを画面の下部に配置",
			description: "モバイルで片手操作するのに便利です。",
		},

		enableWakeLock: {
			title: "プレイ中は画面をオンのままにする",
			description:
				"ゲームプレイ中、5分間デバイスの画面が消えるのを防ぎます。一部のAppleデバイスではこの機能をサポートしていないことにご注意ください。",
		},

		showNavigationAlert: {
			title: "ゲームを離れる前に確認する",
			description:
				"ゲーム中に画面を離れようとすると確認ダイアログを表示します。",
		},
	},

	siteHeader: {
		detrak: "デトラック",
	},
};
