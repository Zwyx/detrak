import { I18nLocale } from "./en";

export const vi: I18nLocale = {
	common: {
		close: "Đóng",
		symbolNames: {
			bar: "thanh",
			cross: "chữ thập",
			tripleBar: "ba thanh",
			sharp: "thăng",
			triangle: "tam giác",
			circle: "hình tròn",
		},
	},

	app: {
		bestScore: "điểm cao nhất:",
		endOnGame: "Hoàn thành! Điểm của bạn là",
		endOnGameWithNewScore: "Tuyệt vời! Kỷ lục mới:",
		numberOfGames_other: "{{count}} trò chơi",
		rollDice: "tung xúc xắc",
		rollDice1: {
			part1: "Ký hiệu bạn đã chọn đã được đặt vào lưới bên dưới.",
			part2: "Bây giờ, hãy tung xúc xắc!",
		},
		settingsChangeDice:
			"Xúc xắc giờ đây không có hoạt ảnh và được tung tự động để bạn có thể chơi nhanh hơn. Bạn có thể thay đổi điều này trong cài đặt.",
		share: {
			shareYourScore: "Chia sẻ điểm số",
			sendScore: "Gửi điểm số của bạn cho bạn bè!",
			inviteFriends:
				"Và mời họ thách thức bạn trong cùng một trò chơi (các ký hiệu rút ra trong trò chơi của họ sẽ giống như của bạn).",
			title: "Detrak",
			text: "🎲 Vừa đạt {{count}} điểm trong Detrak! Bạn có thể làm tốt hơn không? 🤞",
		},
		sr: {
			selectSymbol: "Chọn một trong sáu ký hiệu để bắt đầu.",
			newDraw: "Lượt rút mới:",
			gameFinished: "Trò chơi kết thúc! Điểm số:",
			gameFinishedNewHighestScore: "Trò chơi kết thúc! Kỷ lục mới!",
		},
		replayGame: "Chơi lại trò chơi này",
		startNewGame: "Bắt đầu trò chơi mới",
		welcome: {
			title: "Chào mừng đến với Detrak!",
			text: "Bắt đầu bằng cách chọn một trong sáu ký hiệu ở trên.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "cột",
			empty: "trống",
			row: "hàng",
		},
		clickGrid1: {
			part1: "Chọn một ô trống trong lưới để đặt ký hiệu từ xúc xắc đầu tiên.",
			part2: "Mục tiêu là nhóm các ký hiệu giống nhau lại với nhau.",
		},
		clickGrid2: {
			part1: "Chọn một ô trống khác cho ký hiệu thứ hai.",
			part2: "Nó phải ở ngay cạnh ô đầu tiên.",
		},
		rollDice2: {
			left: "Điểm số sẽ được hiển thị ở cột ngoài cùng bên phải và hàng dưới cùng.",
			legend:
				"Đây là chú giải cho điểm số. Ví dụ, năm ký hiệu giống nhau trên một hàng, một cột hoặc đường chéo sẽ cho 10 điểm.",
			right: {
				part1:
					"Điểm của đường chéo xuất hiện ở cả hai đầu, vì vậy nó được tính hai lần!",
				part2: "Tung xúc xắc lại để tiếp tục trò chơi.",
			},
		},
		settingsChangeScore:
			"Ngoài ra, điểm số giờ đây luôn được hiển thị, để bạn có thể nhanh chóng thấy những hàng/cột nào cần chú ý.",
	},

	error: {
		oops: "Ối, có gì đó không ổn.",
		error:
			"Đã xảy ra lỗi không mong muốn, vui lòng tải lại trang. Xin lỗi vì sự bất tiện.",
		googleTranslateNote:
			"Lưu ý: nếu bạn đang sử dụng tính năng dịch của Google Chrome để dịch trang này, thì tính năng này có thể là nguyên nhân gây ra lỗi này.",
		reload: "Tải lại",
	},

	headerMenu: {
		openMenu: "Mở menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Có tính năng mới!",
			description: "Hoàn thành trò chơi và tải lại ứng dụng.",
			action: "Tải lại ứng dụng",
		},
		install: {
			installableWebApp: "Detrak là một ứng dụng web có thể cài đặt!",
			description:
				"Bạn có thể thêm nó vào màn hình chính và chơi ngay cả khi ngoại tuyến.",
			install: "Cài đặt Detrak",
		},
		gigamicGame: "Detrak là trò chơi có bản quyền được xuất bản bởi",
		digitalVersion: {
			madeBy: "Phiên bản số này được tạo bởi tôi,",
			webDeveloper:
				", một nhà phát triển web độc lập, với sự chấp thuận của Gigamic. Cảm ơn một lần nữa, Gigamic!",
		},
		writeToMe: "Tôi hy vọng bạn thích nó! Hãy thoải mái viết cho tôi tại",
		rules: {
			readTheRules: "Đọc luật chơi",
			rules: "Luật chơi",
			part1:
				"Tung xúc xắc và đặt các ký hiệu thu được vào lưới để ghi càng nhiều điểm càng tốt.",
			part2:
				"Bạn ghi điểm khi đặt các ký hiệu giống nhau cạnh nhau, trong một hàng, một cột hoặc đường chéo từ dưới trái lên trên phải:",
			points: {
				part1: "2 ký hiệu: +2 điểm,",
				part2: "3 ký hiệu: +3 điểm,",
				part3: "4 ký hiệu: +8 điểm,",
				part4: "5 ký hiệu: +10 điểm,",
				part5: "không có ký hiệu: -5 điểm.",
			},
			part3:
				"Hai ký hiệu từ xúc xắc phải được đặt trên các ô trống liền kề (theo chiều ngang hoặc dọc).",
			part4:
				"Không thể chỉ đặt một trong hai ký hiệu. Do đó, để tránh trò chơi kết thúc sớm, hãy tránh cô lập các ô.",
		},
		termsOfUse: "Điều khoản sử dụng",
		privacyPolicy: "Chính sách bảo mật",
		copyright: {
			originalGame: "Trò chơi gốc",
			digitalVersion: "Phiên bản số",
		},
		sourceCodeAvailableAt: "Mã nguồn có sẵn tại",
		version: "Phiên bản",
		checkForUpdates: "Kiểm tra cập nhật",
		updateAvailable:
			"Có cập nhật, hoàn thành trò chơi và nhấp vào đây để cập nhật",
	},

	languageSelector: {
		chooseLanguage: "Chọn ngôn ngữ",
		language: "Ngôn ngữ",
		changeLanguageOffline:
			"Không thể tải bản dịch: thiết bị của bạn dường như đang ngoại tuyến. Vui lòng đảm bảo thiết bị của bạn có kết nối Internet và thử lại.",
		changeLanguageError:
			"Đã xảy ra lỗi khi thiết lập ngôn ngữ mới. Vui lòng khởi động lại ứng dụng và thử lại.",
	},

	navigationBlocker: {
		title: "Điều này sẽ dừng trò chơi hiện tại, bạn có chắc không?",
		description: "Vui lòng xác nhận rằng bạn muốn dừng trò chơi hiện tại.",
		confirmationCheckbox: "Luôn yêu cầu xác nhận trước khi ngắt trò chơi",
		keepPlaying: "Tiếp tục chơi",
		stopGame: "Dừng trò chơi này",
	},

	newGameDialog: {
		close: "Đóng",
		createGame: "Tạo trò chơi",
		joinGame: "Tham gia trò chơi",
		pickAnotherDay: "Chọn ngày khác",
		play: "Chơi",
		playRandomGame: "Chơi trò chơi ngẫu nhiên",
		playTodayGame: "Chơi trò chơi hôm nay",
		playWithFriends: "Chơi với bạn bè",
		shareCreate: {
			scanQrCode: "Yêu cầu bạn bè quét mã QR này hoặc chia sẻ liên kết với họ.",
			clickPlay: "Sau đó nhấp Chơi.",
			title: "Detrak",
			joinMe: "🎲 Tham gia cùng tôi trong trò chơi Detrak này!",
			shareLink: "Chia sẻ liên kết",
			copyLink: "Sao chép liên kết vào clipboard",
		},
		shareJoin: {
			useCamera: "Sử dụng camera của thiết bị để quét mã QR của trò chơi.",
			openGameLink: "Hoặc mở liên kết của trò chơi.",
			enterGameLink: "Hoặc nhập liên kết trò chơi bên dưới và nhấp Chơi.",
		},
		stopGame: "Dừng trò chơi này",
		title: {
			createGame: "Tạo trò chơi",
			inviteToGame: "Mời mọi người vào trò chơi hiện tại",
			joinGame: "Tham gia trò chơi",
			newGame: "Trò chơi mới",
			playWithFriends: "Chơi với bạn bè",
			welcomeToNewVersion: "Chào mừng đến với phiên bản mới của Detrak!",
		},
		welcome: {
			intro: "Có hai cách chơi mới:",
			dailyGame: "Trò chơi hàng ngày",
			dailyGameDetails:
				"mỗi ngày, chuỗi ký hiệu được rút bởi xúc xắc sẽ giống nhau cho tất cả mọi người.",
			playWithFriends: "Chơi với bạn bè",
			playWithFriendsDetails:
				"tạo một trò chơi và mời mọi người tham gia. Ở đây cũng vậy, chuỗi ký hiệu được rút trong trò chơi sẽ giống nhau cho bạn bè và bạn. Nó hoạt động ngay cả khi không có kết nối internet!",
			startPlaying: "Bắt đầu chơi!",
		},
		or: "hoặc",
	},

	themeSelector: {
		chooseTheme: "Chọn chủ đề",
		theme: "Chủ đề",
		sameAsDevice: "Giống như thiết bị",
		light: "Sáng",
		dark: "Tối",
	},

	settingsDialog: {
		openSettingsDialog: "Mở hộp thoại cài đặt",
		settings: "Cài đặt",

		alwaysShowScore: {
			title: "Luôn hiển thị điểm số",
			description: "Hiển thị điểm số hiện tại của bạn trong trò chơi.",
		},

		showScoreWithContrast: {
			title: "Hiển thị điểm số với độ tương phản thay vì màu sắc",
			description: "Sử dụng các mức độ xám thay vì đỏ, xanh lá và xanh dương.",
		},

		showScoreLegend: {
			title: "Hiển thị chú giải điểm số",
			description: "Hiển thị chú giải được đặt phía trên lưới.",
		},

		animateDice: {
			title: "Tạo hoạt ảnh tung xúc xắc",
			description: "Tung xúc xắc với hoạt ảnh 3D.",
		},

		autoRollDice: {
			title: "Tự động tung xúc xắc",
			notAvailableDuringTheFirstGame:
				"(không khả dụng trong trò chơi đầu tiên)",
			description:
				"Tự động tung xúc xắc sau khi đặt hai ký hiệu vào lưới. Điều này loại bỏ khả năng hoàn tác việc đặt ký hiệu thứ hai.",
		},

		showDiceMarker: {
			title: "Hiển thị dấu hiệu xúc xắc",
			description: "Hiển thị ký hiệu nào sẽ được đặt trên lưới.",
		},

		showConfetti: {
			title: "Hiển thị pháo giấy",
			description: "Tung pháo giấy khi bạn phá kỷ lục cao nhất!",
		},

		gridAtBottom: {
			title: "Đặt lưới ở dưới cùng màn hình",
			description: "Hữu ích để chơi bằng một tay trên di động.",
		},

		enableWakeLock: {
			title: "Giữ màn hình sáng khi chơi",
			description:
				"Ngăn màn hình thiết bị tắt trong năm phút khi đang chơi trò chơi. Lưu ý rằng một số thiết bị Apple không hỗ trợ tính năng này.",
		},

		showNavigationAlert: {
			title: "Yêu cầu xác nhận trước khi rời khỏi trò chơi",
			description:
				"Hiển thị hộp thoại xác nhận khi điều hướng đi nơi khác trong trò chơi.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
