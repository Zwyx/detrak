import { I18nLocale } from "./en";

export const id: I18nLocale = {
	common: {
		close: "Tutup",
		symbolNames: {
			bar: "garis",
			cross: "silang",
			tripleBar: "tiga garis",
			sharp: "pagar",
			triangle: "segitiga",
			circle: "lingkaran",
		},
	},

	app: {
		bestScore: "skor terbaik:",
		endOnGame: "Selesai! Skor Anda adalah",
		endOnGameWithNewScore: "Bagus sekali! Skor tertinggi baru:",
		numberOfGames_other: "{{count}} permainan",
		rollDice: "lempar dadu",
		rollDice1: {
			part1: "Simbol yang Anda pilih telah dimasukkan ke dalam kisi di bawah.",
			part2: "Sekarang, lempar dadu!",
		},
		settingsChangeDice:
			"Dadu sekarang tidak beranimasi dan dilempar secara otomatis agar Anda bisa bermain lebih cepat. Anda dapat mengubah ini di pengaturan.",
		share: {
			shareYourScore: "Bagikan skor Anda",
			sendScore: "Kirim skor Anda ke teman-teman!",
			inviteFriends:
				"Dan ajak mereka untuk menantang Anda pada permainan yang sama (simbol yang ditarik selama permainan mereka akan sama dengan milik Anda).",
			title: "Detrak",
			text: "🎲 Baru saja mendapat {{count}} di Detrak! Bisakah kamu lebih baik? 🤞",
		},
		sr: {
			selectSymbol: "Pilih salah satu dari enam simbol untuk memulai.",
			newDraw: "Tarikan baru:",
			gameFinished: "Permainan selesai! Skor:",
			gameFinishedNewHighestScore: "Permainan selesai! Skor tertinggi baru!",
		},
		replayGame: "Ulang permainan ini",
		startNewGame: "Mulai permainan baru",
		welcome: {
			title: "Selamat datang di Detrak!",
			text: "Mulai dengan memilih salah satu dari enam simbol di atas.",
		},
	},

	detrak: {
		ariaLabel: {
			column: "kolom",
			empty: "kosong",
			row: "baris",
		},
		clickGrid1: {
			part1:
				"Pilih sel kosong di kisi untuk memasukkan simbol dari dadu pertama.",
			part2: "Tujuannya adalah mengelompokkan simbol yang sama bersama-sama.",
		},
		clickGrid2: {
			part1: "Pilih sel kosong lain untuk simbol kedua.",
			part2: "Harus berada tepat di sebelah yang pertama.",
		},
		rollDice2: {
			left: "Skor akan ditampilkan di kolom paling kanan, dan baris paling bawah.",
			legend:
				"Ini adalah legenda untuk skor. Misalnya, lima simbol identik pada baris, kolom, atau diagonal, memberikan 10 poin.",
			right: {
				part1: "Skor diagonal muncul di kedua ujung, jadi dihitung dua kali!",
				part2: "Lempar dadu lagi untuk melanjutkan permainan.",
			},
		},
		settingsChangeScore:
			"Selain itu, skor sekarang selalu ditampilkan, jadi Anda dapat dengan cepat melihat baris/kolom mana yang perlu perhatian.",
	},

	error: {
		oops: "Ups, ada yang salah.",
		error:
			"Terjadi kesalahan yang tidak terduga, silakan muat ulang halaman. Maaf atas ketidaknyamanannya.",
		googleTranslateNote:
			"Catatan: jika Anda menggunakan fitur terjemahan Google Chrome untuk menerjemahkan halaman ini, maka fitur ini mungkin penyebab kesalahan ini.",
		reload: "Muat ulang",
	},

	headerMenu: {
		openMenu: "Buka menu",
		detrak: "Detrak",
		newFeatures: {
			title: "Fitur baru tersedia!",
			description: "Selesaikan permainan Anda dan muat ulang aplikasi.",
			action: "Muat ulang aplikasi",
		},
		install: {
			installableWebApp: "Detrak adalah aplikasi web yang dapat diinstal!",
			description:
				"Anda dapat menambahkannya ke layar beranda dan bermain bahkan saat offline.",
			install: "Instal Detrak",
		},
		gigamicGame: "Detrak adalah permainan berlisensi yang diterbitkan oleh",
		digitalVersion: {
			madeBy: "Versi digital ini telah dibuat oleh saya,",
			webDeveloper:
				", seorang pengembang web independen, dengan persetujuan Gigamic. Terima kasih lagi, Gigamic!",
		},
		writeToMe:
			"Saya harap Anda menikmatinya! Jangan ragu untuk menulis kepada saya di",
		rules: {
			readTheRules: "Baca aturan",
			rules: "Aturan permainan",
			part1:
				"Lempar dadu dan tempatkan simbol yang diperoleh di kisi untuk mencetak sebanyak mungkin poin.",
			part2:
				"Anda mencetak poin ketika menempatkan simbol identik bersebelahan, dalam baris, kolom, atau diagonal dari kiri bawah ke kanan atas:",
			points: {
				part1: "2 simbol: +2 poin,",
				part2: "3 simbol: +3 poin,",
				part3: "4 simbol: +8 poin,",
				part4: "5 simbol: +10 poin,",
				part5: "tidak ada simbol: -5 poin.",
			},
			part3:
				"Kedua simbol dari dadu harus ditempatkan pada sel kosong yang bersebelahan (horizontal atau vertikal).",
			part4:
				"Tidak mungkin menempatkan hanya salah satu dari dua simbol. Oleh karena itu, untuk mencegah permainan berakhir prematur, hindari mengisolasi sel.",
		},
		termsOfUse: "Syarat penggunaan",
		privacyPolicy: "Kebijakan privasi",
		copyright: {
			originalGame: "Permainan asli",
			digitalVersion: "Versi digital",
		},
		sourceCodeAvailableAt: "Kode sumber tersedia di",
		version: "Versi",
		checkForUpdates: "Periksa pembaruan",
		updateAvailable:
			"Pembaruan tersedia, selesaikan permainan Anda dan klik di sini untuk memperbarui",
	},

	languageSelector: {
		chooseLanguage: "Pilih bahasa",
		language: "Bahasa",
		changeLanguageError:
			"Terjadi kesalahan saat mengatur bahasa baru. Silakan pastikan perangkat Anda terhubung ke internet, mulai ulang aplikasi, dan coba lagi.",
	},

	navigationBlocker: {
		title: "Ini akan menghentikan permainan saat ini, apakah Anda yakin?",
		description:
			"Silakan konfirmasi bahwa Anda ingin menghentikan permainan saat ini.",
		confirmationCheckbox:
			"Selalu minta konfirmasi sebelum mengganggu permainan",
		keepPlaying: "Terus bermain",
		stopGame: "Hentikan permainan ini",
	},

	newGameDialog: {
		close: "Tutup",
		createGame: "Buat permainan",
		joinGame: "Bergabung dalam permainan",
		pickAnotherDay: "Pilih hari lain",
		play: "Bermain",
		playRandomGame: "Bermain permainan acak",
		playTodayGame: "Bermain permainan hari ini",
		playWithFriends: "Bermain dengan teman",
		shareCreate: {
			scanQrCode:
				"Minta teman Anda untuk memindai kode QR ini, atau bagikan tautan dengan mereka.",
			clickPlay: "Lalu klik Bermain.",
			title: "Detrak",
			joinMe: "🎲 Bergabunglah dengan saya untuk permainan Detrak ini!",
			shareLink: "Bagikan tautan",
			copyLink: "Salin tautan ke clipboard",
		},
		shareJoin: {
			useCamera:
				"Gunakan kamera perangkat Anda untuk memindai kode QR permainan.",
			openGameLink: "Atau, buka tautan permainan.",
			enterGameLink:
				"Atau, masukkan tautan permainan di bawah dan klik Bermain.",
		},
		stopGame: "Hentikan permainan ini",
		title: {
			createGame: "Buat permainan",
			inviteToGame: "Undang orang ke permainan saat ini",
			joinGame: "Bergabung dalam permainan",
			newGame: "Permainan baru",
			playWithFriends: "Bermain dengan teman",
			welcomeToNewVersion: "Selamat datang di versi baru Detrak!",
		},
		welcome: {
			intro: "Ada dua cara bermain baru:",
			dailyGame: "Permainan harian",
			dailyGameDetails:
				"setiap hari, urutan simbol yang ditarik oleh dadu akan sama untuk semua orang.",
			playWithFriends: "Bermain dengan teman",
			playWithFriendsDetails:
				"buat permainan dan undang orang untuk bergabung. Di sini juga, urutan simbol yang ditarik selama permainan sama untuk teman dan Anda. Ini bekerja bahkan tanpa koneksi internet!",
			startPlaying: "Mulai bermain!",
		},
		or: "atau",
	},

	themeSelector: {
		chooseTheme: "Pilih tema",
		theme: "Tema",
		sameAsDevice: "Sama dengan perangkat",
		light: "Terang",
		dark: "Gelap",
	},

	settingsDialog: {
		openSettingsDialog: "Buka dialog pengaturan",
		settings: "Pengaturan",

		alwaysShowScore: {
			title: "Selalu tampilkan skor",
			description: "Menampilkan skor Anda saat ini selama permainan.",
		},

		showScoreWithContrast: {
			title: "Tampilkan skor dengan kontras alih-alih warna",
			description:
				"Menggunakan tingkat abu-abu alih-alih merah, hijau, dan biru.",
		},

		showScoreLegend: {
			title: "Tampilkan legenda skor",
			description: "Menampilkan legenda yang ditempatkan di atas kisi.",
		},

		animateDice: {
			title: "Animasi dadu berputar",
			description: "Memutar dadu dengan animasi 3D.",
		},

		autoRollDice: {
			title: "Otomatis melempar dadu",
			notAvailableDuringTheFirstGame:
				"(tidak tersedia selama permainan pertama)",
			description:
				"Melempar dadu secara otomatis setelah kedua simbol ditempatkan di kisi. Ini menghilangkan kemampuan untuk membatalkan penempatan simbol kedua.",
		},

		showDiceMarker: {
			title: "Tampilkan penanda dadu",
			description: "Menampilkan simbol mana yang akan ditempatkan di kisi.",
		},

		showConfetti: {
			title: "Tampilkan confetti",
			description:
				"Melempar ledakan confetti ketika Anda mengalahkan skor tertinggi Anda!",
		},

		gridAtBottom: {
			title: "Tempatkan kisi di bagian bawah layar",
			description: "Berguna untuk bermain dengan satu tangan di ponsel.",
		},

		enableWakeLock: {
			title: "Jaga layar tetap menyala saat bermain",
			description:
				"Mencegah layar perangkat Anda mati, selama lima menit, saat permainan sedang dimainkan. Perhatikan bahwa beberapa perangkat Apple tidak mendukung fitur ini.",
		},

		showNavigationAlert: {
			title: "Minta konfirmasi sebelum meninggalkan permainan",
			description:
				"Menampilkan dialog konfirmasi saat bernavigasi pergi selama permainan.",
		},
	},

	siteHeader: {
		detrak: "Detrak",
	},
};
