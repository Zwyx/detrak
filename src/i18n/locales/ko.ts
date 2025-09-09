import { I18nLocale } from "./en";

export const ko: I18nLocale = {
	common: {
		close: "닫기",
		symbolNames: {
			bar: "막대",
			cross: "십자",
			tripleBar: "삼중 막대",
			sharp: "샵",
			triangle: "삼각형",
			circle: "원",
		},
	},

	app: {
		bestScore: "최고 점수:",
		endOnGame: "게임 종료! 당신의 점수는",
		endOnGameWithNewScore: "잘했어요! 새로운 최고 점수:",
		numberOfGames_one: "{{count}}게임",
		numberOfGames_other: "{{count}}게임",
		rollDice: "주사위 던지기",
		rollDice1: {
			part1: "선택하신 기호가 아래 격자에 배치되었습니다.",
			part2: "이제 주사위를 던지세요!",
		},
		settingsChangeDice:
			"더 빠른 플레이를 위해 주사위 애니메이션이 비활성화되고 자동으로 던져집니다. 설정에서 이를 변경할 수 있습니다.",
		share: {
			shareYourScore: "점수 공유하기",
			sendScore: "친구들에게 점수를 보내보세요!",
			inviteFriends:
				"그리고 같은 게임에서 도전하도록 초대하세요 (친구들의 게임에서 나오는 기호들은 당신의 것과 동일합니다).",
			title: "데트락",
			text: "🎲 데트락에서 {{count}}점 달성! 더 잘할 수 있겠어요? 🤞",
		},
		sr: {
			selectSymbol: "시작하려면 여섯 개의 기호 중 하나를 선택하세요.",
			newDraw: "새로운 추첨:",
			gameFinished: "게임 종료! 점수:",
			gameFinishedNewHighestScore: "게임 종료! 새로운 최고 점수!",
		},
		replayGame: "이 게임 다시하기",
		startNewGame: "새 게임 시작하기",
		welcome: {
			title: "데트락에 오신 것을 환영합니다!",
			text: "위의 여섯 개의 기호 중 하나를 선택하여 시작하세요.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "열",
			empty: "비어있음",
			row: "행",
		},
		clickGrid1: {
			part1: "첫 번째 주사위의 기호를 넣을 빈 칸을 격자에서 선택하세요.",
			part2: "목표는 동일한 기호들을 함께 모으는 것입니다.",
		},
		clickGrid2: {
			part1: "두 번째 기호를 위한 다른 빈 칸을 선택하세요.",
			part2: "첫 번째 기호와 바로 인접해야 합니다.",
		},
		rollDice2: {
			left: "점수는 가장 오른쪽 열과 가장 아래쪽 행에 표시됩니다.",
			legend:
				"이것은 점수 범례입니다. 예를 들어, 한 행, 열 또는 대각선에 동일한 기호 다섯 개를 모으면 10점을 얻습니다.",
			right: {
				part1: "대각선의 점수는 양쪽 끝에 나타나므로 두 번 계산됩니다!",
				part2: "게임을 계속하려면 주사위를 다시 던지세요.",
			},
		},
		settingsChangeScore:
			"또한, 점수가 항상 표시되어 어느 행/열에 주의가 필요한지 빠르게 확인할 수 있습니다.",
	},

	error: {
		oops: "죄송합니다, 문제가 발생했습니다.",
		error:
			"예기치 않은 오류가 발생했습니다. 페이지를 새로고침해 주세요. 불편을 끼쳐 죄송합니다.",
		googleTranslateNote:
			"참고: 구글 크롬의 번역 기능을 사용하여 이 페이지를 번역하고 있다면, 이 기능이 오류의 원인일 수 있습니다.",
		reload: "새로고침",
	},

	headerMenu: {
		openMenu: "메뉴 열기",
		detrak: "데트락",
		newFeatures: {
			title: "새로운 기능이 있습니다!",
			description: "게임을 마치고 앱을 새로고침하세요.",
			action: "앱 새로고침",
		},
		install: {
			installableWebApp: "데트락은 설치 가능한 웹 앱입니다!",
			description: "홈 화면에 추가하여 오프라인에서도 플레이할 수 있습니다.",
			install: "데트락 설치",
		},
		gigamicGame: "데트락은 다음 회사가 발행한 저작권이 있는 게임입니다:",
		digitalVersion: {
			madeBy: "이 디지털 버전은 제가 만들었습니다,",
			webDeveloper:
				", Gigamic의 승인을 받은 독립 웹 개발자입니다. Gigamic에 다시 한 번 감사드립니다!",
		},
		writeToMe:
			"즐겁게 플레이하시기를 바랍니다! 언제든지 다음 주소로 연락주세요:",
		rules: {
			readTheRules: "게임 규칙 읽기",
			rules: "게임 규칙",
			part1:
				"주사위를 던져 얻은 기호들을 격자에 배치하여 가능한 한 많은 점수를 얻으세요.",
			part2:
				"동일한 기호들을 행, 열 또는 왼쪽 아래에서 오른쪽 위로의 대각선으로 서로 인접하게 배치하면 점수를 얻습니다:",
			points: {
				part1: "기호 2개: +2점,",
				part2: "기호 3개: +3점,",
				part3: "기호 4개: +8점,",
				part4: "기호 5개: +10점,",
				part5: "기호 없음: -5점.",
			},
			part3:
				"주사위에서 나온 두 기호는 인접한 빈 칸에 배치해야 합니다(가로 또는 세로).",
			part4:
				"두 기호 중 하나만 배치하는 것은 불가능합니다. 따라서 게임이 일찍 끝나는 것을 방지하기 위해 칸을 고립시키지 마세요.",
		},
		termsOfUse: "이용약관",
		privacyPolicy: "개인정보 보호정책",
		copyright: {
			originalGame: "원본 게임",
			digitalVersion: "디지털 버전",
		},
		sourceCodeAvailableAt: "소스 코드 확인:",
		version: "버전",
		checkForUpdates: "업데이트 확인",
		updateAvailable:
			"업데이트가 있습니다. 게임을 마치고 여기를 클릭하여 업데이트하세요",
	},

	languageSelector: {
		chooseLanguage: "언어 선택",
		language: "언어",
		changeLanguageOffline:
			"번역을 불러올 수 없습니다: 기기가 오프라인 상태인 것 같습니다. 기기가 인터넷에 연결되어 있는지 확인하고 다시 시도해 주세요",
		changeLanguageError:
			"새로운 언어를 설정하는 동안 오류가 발생했습니다. 앱을 다시 시작하고 다시 시도해 주세요",
	},

	navigationBlocker: {
		title: "현재 게임이 중단됩니다. 계속하시겠습니까?",
		description: "현재 게임을 중단하시려면 확인해 주세요.",
		confirmationCheckbox: "게임을 중단하기 전에 항상 확인을 요청합니다",
		keepPlaying: "계속하기",
		stopGame: "게임 중단하기",
	},

	newGameDialog: {
		close: "닫기",
		createGame: "게임 만들기",
		joinGame: "게임 참여하기",
		pickAnotherDay: "다른 날짜 선택하기",
		play: "플레이",
		playRandomGame: "랜덤 게임 플레이",
		playTodayGame: "오늘의 게임 플레이",
		playWithFriends: "친구와 함께 플레이",
		shareCreate: {
			scanQrCode:
				"친구들에게 이 QR 코드를 스캔하도록 요청하거나 링크를 공유하세요.",
			clickPlay: "그런 다음 플레이를 클릭하세요.",
			title: "데트락",
			joinMe: "🎲 데트락 게임에 함께 참여해요!",
			shareLink: "링크 공유하기",
			copyLink: "클립보드에 링크 복사하기",
		},
		shareJoin: {
			useCamera: "기기의 카메라로 게임의 QR 코드를 스캔하세요.",
			openGameLink: "또는 게임 링크를 열어주세요.",
			enterGameLink: "또는 아래에 게임 링크를 입력하고 플레이를 클릭하세요.",
		},
		stopGame: "게임 중단하기",
		title: {
			createGame: "게임 만들기",
			inviteToGame: "현재 게임에 사람들 초대하기",
			joinGame: "게임 참여하기",
			newGame: "새 게임",
			playWithFriends: "친구와 함께 플레이",
			welcomeToNewVersion: "데트락의 새로운 버전을 환영합니다!",
		},
		welcome: {
			intro: "플레이하는 두 가지 새로운 방법이 있습니다:",
			dailyGame: "데일리 게임",
			dailyGameDetails:
				"매일, 주사위가 그리는 기호의 순서는 모든 사람에게 동일합니다.",
			playWithFriends: "친구와 함께 플레이",
			playWithFriendsDetails:
				"게임을 만들고 사람들을 초대하세요. 여기서도 게임 중 주사위가 그리는 기호의 순서는 당신과 친구들에게 동일합니다. 인터넷 연결 없이도 작동합니다!",
			startPlaying: "플레이 시작하기!",
		},
		or: "또는",
	},

	themeSelector: {
		chooseTheme: "테마 선택",
		theme: "테마",
		sameAsDevice: "기기와 동일",
		light: "라이트",
		dark: "다크",
	},

	settingsDialog: {
		openSettingsDialog: "설정 대화상자 열기",
		settings: "설정",

		alwaysShowScore: {
			title: "항상 점수 표시",
			description: "게임 중 현재 점수를 표시합니다.",
		},

		showScoreWithContrast: {
			title: "색상 대신 명암으로 점수 표시",
			description: "빨강, 초록, 파랑 대신 회색 단계를 사용합니다.",
		},

		showScoreLegend: {
			title: "점수 범례 표시",
			description: "격자 위에 범례를 표시합니다.",
		},

		animateDice: {
			title: "주사위 굴리기 애니메이션",
			description: "3D 애니메이션으로 주사위를 굴립니다.",
		},

		autoRollDice: {
			title: "자동으로 주사위 굴리기",
			notAvailableDuringTheFirstGame: "(첫 번째 게임에서는 사용할 수 없음)",
			description:
				"두 기호가 격자에 배치되면 자동으로 주사위를 굴립니다. 두 번째 기호 배치를 취소할 수 없게 됩니다.",
		},

		showDiceMarker: {
			title: "주사위 마커 표시",
			description: "격자에 배치할 기호를 표시합니다.",
		},

		showConfetti: {
			title: "축하 폭죽 표시",
			description: "최고 점수를 갱신했을 때 축하 폭죽을 터뜨립니다!",
		},

		gridAtBottom: {
			title: "격자를 화면 하단에 배치",
			description: "모바일에서 한 손으로 플레이하기 편리합니다.",
		},

		enableWakeLock: {
			title: "플레이 중 화면 켜두기",
			description:
				"게임 플레이 중 5분 동안 기기 화면이 꺼지는 것을 방지합니다. 일부 애플 기기에서는 이 기능을 지원하지 않습니다.",
		},

		showNavigationAlert: {
			title: "게임을 나가기 전 확인 요청",
			description: "게임 중 페이지를 나갈 때 확인 대화상자를 표시합니다.",
		},
	},

	siteHeader: {
		detrak: "데트락",
	},
};
