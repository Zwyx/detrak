import { I18nLocale } from "./en";

export const tr: I18nLocale = {
	common: {
		close: "Kapat",
		symbolNames: {
			bar: "çubuk",
			cross: "artı",
			tripleBar: "üçlü çubuk",
			sharp: "kare",
			triangle: "üçgen",
			circle: "daire",
		},
	},

	app: {
		bestScore: "en yüksek skor:",
		endOnGame: "Bitti! Skorunuz",
		endOnGameWithNewScore: "Aferin! Yeni en yüksek skor:",
		numberOfGames_zero: "0 oyun",
		numberOfGames_one: "1 oyun",
		numberOfGames_other: "{{count}} oyun",
		rollDice: "zar at",
		rollDice1: {
			part1: "Seçtiğiniz sembol aşağıdaki ızgaraya yerleştirildi.",
			part2: "Şimdi zarları atın!",
		},
		settingsChangeDice:
			"Zarlar artık animasyonsuz ve otomatik olarak atılıyor, böylece daha hızlı oynayabilirsiniz. Bunu ayarlardan değiştirebilirsiniz.",
		share: {
			shareYourScore: "Skorunuzu paylaşın",
			sendScore: "Skorunuzu arkadaşlarınıza gönderin!",
			inviteFriends:
				"Ve onları aynı oyunda size meydan okumaya davet edin (oyunları sırasında çıkan semboller sizinkilerle aynı olacak).",
			title: "Detrak",
			text: "🎲 Detrak'ta {{count}} yaptım! Daha iyisini yapabilir misin? 🤞",
		},
		sr: {
			selectSymbol: "Başlamak için altı sembolden birini seçin.",
			newDraw: "Yeni çekiliş:",
			gameFinished: "Oyun bitti! Skor:",
			gameFinishedNewHighestScore: "Oyun bitti! Yeni en yüksek skor!",
		},
		replayGame: "Bu oyunu tekrarla",
		startNewGame: "Yeni oyun başlat",
		welcome: {
			title: "Detrak'a hoş geldiniz!",
			text: "Yukarıdaki altı sembolden birini seçerek başlayın.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "sütun",
			empty: "boş",
			row: "satır",
		},
		clickGrid1: {
			part1:
				"İlk zarın sembolünü yerleştirmek için ızgarada boş bir hücre seçin.",
			part2: "Amaç aynı sembolleri bir araya getirmektir.",
		},
		clickGrid2: {
			part1: "İkinci sembol için başka bir boş hücre seçin.",
			part2: "Birincinin hemen yanında olmalı.",
		},
		rollDice2: {
			left: "Skorlar en sağdaki sütunda ve en alttaki satırda görüntülenecek.",
			legend:
				"Bu skor açıklamasıdır. Örneğin bir satır, sütun veya çaprazda beş aynı sembol 10 puan verir.",
			right: {
				part1:
					"Çaprazın skoru her iki uçta da görünür, bu yüzden iki kez sayılır!",
				part2: "Oyuna devam etmek için zarları tekrar atın.",
			},
		},
		settingsChangeScore:
			"Ayrıca skor artık her zaman gösteriliyor, böylece hangi satır/sütunların dikkat gerektirdiğini hızlıca görebilirsiniz.",
	},

	error: {
		oops: "Oops, bir şeyler ters gitti.",
		error:
			"Beklenmeyen bir hata oluştu, lütfen sayfayı yenileyin. Rahatsızlık için özür dileriz.",
		googleTranslateNote:
			"Not: Bu sayfayı çevirmek için Google Chrome'un çeviri özelliğini kullanıyorsanız, bu özellik muhtemelen bu hatanın nedenidir.",
		reload: "Yenile",
	},

	headerMenu: {
		openMenu: "Menüyü aç",
		detrak: "Detrak",
		newFeatures: {
			title: "Yeni özellikler mevcut!",
			description: "Oyununuzu bitirin ve uygulamayı yenileyin.",
			action: "Uygulamayı yenile",
		},
		install: {
			installableWebApp: "Detrak kurulabilir bir web uygulamasıdır!",
			description:
				"Ana ekranınıza ekleyebilir ve çevrimdışıyken bile oynayabilirsiniz.",
			install: "Detrak'ı kur",
		},
		gigamicGame:
			"Detrak, şu şirket tarafından yayınlanan telif hakkıyla korunan bir oyundur:",
		digitalVersion: {
			madeBy: "Bu dijital sürüm benim tarafımdan yapıldı,",
			webDeveloper:
				", bağımsız bir web geliştirici, Gigamic'in onayıyla. Tekrar teşekkürler, Gigamic!",
		},
		writeToMe: "Umarım beğenirsiniz! Bana şu adresten yazabilirsiniz:",
		rules: {
			readTheRules: "Kuralları oku",
			rules: "Oyun kuralları",
			part1:
				"Zarları atın ve elde edilen sembolleri ızgaraya yerleştirerek mümkün olduğunca çok puan alın.",
			part2:
				"Aynı sembolleri yan yana, bir satırda, sütunda veya sol alttan sağ üste çaprazda yerleştirdiğinizde puan alırsınız:",
			points: {
				part1: "2 sembol: +2 puan,",
				part2: "3 sembol: +3 puan,",
				part3: "4 sembol: +8 puan,",
				part4: "5 sembol: +10 puan,",
				part5: "sembol yok: -5 puan.",
			},
			part3:
				"Zarlardan gelen iki sembol bitişik boş hücrelere yerleştirilmelidir (yatay veya dikey).",
			part4:
				"İki sembolden sadece birini yerleştirmek imkansızdır. Bu nedenle oyunun erken bitmesini önlemek için hücreleri izole etmekten kaçının.",
		},
		termsOfUse: "Kullanım şartları",
		privacyPolicy: "Gizlilik politikası",
		copyright: {
			originalGame: "Orijinal oyun",
			digitalVersion: "Dijital sürüm",
		},
		sourceCodeAvailableAt: "Kaynak kod şu adreste mevcut:",
		version: "Sürüm",
		checkForUpdates: "Güncellemeleri kontrol et",
		updateAvailable:
			"Güncelleme mevcut, oyununuzu bitirin ve güncellemek için buraya tıklayın",
	},

	languageSelector: {
		chooseLanguage: "Dil seç",
		language: "Dil",
	},

	navigationBlocker: {
		title: "Bu mevcut oyunu durduracak, emin misiniz?",
		description: "Lütfen mevcut oyunu durdurmak istediğinizi onaylayın.",
		confirmationCheckbox:
			"Bir oyunu kesintiye uğratmadan önce her zaman onay iste",
		keepPlaying: "Oynamaya devam et",
		stopGame: "Bu oyunu durdur",
	},

	newGameDialog: {
		close: "Kapat",
		createGame: "Oyun oluştur",
		joinGame: "Oyuna katıl",
		pickAnotherDay: "Başka bir gün seç",
		play: "Oyna",
		playRandomGame: "Rastgele oyun oyna",
		playTodayGame: "Bugünün oyununu oyna",
		playWithFriends: "Arkadaşlarla oyna",
		shareCreate: {
			scanQrCode:
				"Arkadaşlarınızdan bu QR kodunu taramasını isteyin veya bağlantıyı onlarla paylaşın.",
			clickPlay: "Sonra Oyna'ya tıklayın.",
			title: "Detrak",
			joinMe: "🎲 Bu Detrak oyununda bana katıl!",
			shareLink: "Bağlantıyı paylaş",
			copyLink: "Bağlantıyı panoya kopyala",
		},
		shareJoin: {
			useCamera:
				"Bir oyunun QR kodunu taramak için cihazınızın kamerasını kullanın.",
			openGameLink: "Veya bir oyun bağlantısını açın.",
			enterGameLink:
				"Veya aşağıya bir oyun bağlantısı girin ve Oyna'ya tıklayın.",
		},
		stopGame: "Bu oyunu durdur",
		title: {
			createGame: "Oyun oluştur",
			inviteToGame: "İnsanları mevcut oyuna davet et",
			joinGame: "Oyuna katıl",
			newGame: "Yeni oyun",
			playWithFriends: "Arkadaşlarla oyna",
			welcomeToNewVersion: "Detrak'ın yeni sürümüne hoş geldiniz!",
		},
		welcome: {
			intro: "İki yeni oyun yolu var:",
			dailyGame: "Günlük oyun",
			dailyGameDetails:
				"her gün zarlar tarafından çıkarılan sembollerin sırası herkes için aynı olacak.",
			playWithFriends: "Arkadaşlarla oyna",
			playWithFriendsDetails:
				"bir oyun oluşturun ve insanları katılmaya davet edin. Burada da oyun sırasında çıkan sembollerin sırası arkadaşlarınız ve siz için aynı. İnternet bağlantısı olmadan bile çalışır!",
			startPlaying: "Oynamaya başla!",
		},
		or: "veya",
	},

	themeSelector: {
		chooseTheme: "Tema seç",
		theme: "Tema",
		sameAsDevice: "Cihazla aynı",
		light: "Açık",
		dark: "Koyu",
	},

	settingsDialog: {
		openSettingsDialog: "Ayarlar penceresini aç",
		settings: "Ayarlar",

		alwaysShowScore: {
			title: "Her zaman skoru göster",
			description: "Oyun sırasında mevcut skorunuzu gösterir.",
		},

		showScoreWithContrast: {
			title: "Skoru renk yerine kontrast ile göster",
			description: "Kırmızı, yeşil ve mavi yerine gri tonları kullanır.",
		},

		showScoreLegend: {
			title: "Skor açıklamasını göster",
			description: "Izgaranın üstüne yerleştirilen açıklamayı gösterir.",
		},

		animateDice: {
			title: "Zar atışını animasyonla göster",
			description: "Zarları 3D animasyonla atar.",
		},

		autoRollDice: {
			title: "Zarları otomatik at",
			notAvailableDuringTheFirstGame: "(ilk oyunda mevcut değil)",
			description:
				"İki sembol ızgaraya yerleştirildiğinde zarları otomatik olarak atar. Bu, ikinci sembol yerleştirmeyi geri alma yeteneğini kaldırır.",
		},

		showDiceMarker: {
			title: "Zar işaretçisini göster",
			description: "Hangi sembolün ızgaraya yerleştirileceğini gösterir.",
		},

		showConfetti: {
			title: "Konfeti göster",
			description: "En yüksek skorunuzu geçtiğinizde konfeti patlaması atar!",
		},

		gridAtBottom: {
			title: "Izgarayı ekranın altına yerleştir",
			description: "Mobilde tek elle oynamak için yararlı.",
		},

		enableWakeLock: {
			title: "Oynarken ekranı açık tut",
			description:
				"Oyun oynanırken cihazınızın ekranının beş dakika boyunca kapanmasını engeller. Bazı Apple cihazlarının bu özelliği desteklemediğini unutmayın.",
		},

		showNavigationAlert: {
			title: "Oyundan ayrılmadan önce onay iste",
			description:
				"Oyun sırasında başka yere giderken onay penceresi gösterir.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
