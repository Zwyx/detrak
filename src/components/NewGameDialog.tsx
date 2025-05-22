import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	NUMBER_OF_GAMES_KEY,
	VERSION_2_WELCOME_SHOWN_KEY,
} from "@/lib/local-storage-keys";
import { GAME_ID_REGEX, getRandomId } from "@/lib/prng";
import { useHistoryState } from "@/lib/useHistoryState.const";
import { formatDate } from "@/lib/utils";
import { fr } from "date-fns/locale";
import { CalendarIcon, LucideArrowLeft, LucideLoader2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonStatus } from "./common/ButtonStatus";
import { Button } from "./ui/button";

export const NewGameDialog = ({
	open,
	currentGameId,
	pwaRefreshing,
	onNewGame,
	onStopGame,
	onOpenChange,
}: {
	open: boolean;
	currentGameId: string | undefined;
	pwaRefreshing: boolean;
	onNewGame: (gameId: string) => void;
	onStopGame: () => void;
	onOpenChange: (open: boolean) => void;
}) => {
	const { t, i18n } = useTranslation("newGameDialog");

	const { state, navigateBack, pushState, replaceState } = useHistoryState<{
		newGameDialogView:
			| "welcome"
			| "new_game"
			| "share"
			| "share_create"
			| "share_join"
			| "pwa_refreshing";
	}>();

	const [date, setDate] = useState<Date>();
	const [randomGameId, setRandomGameId] = useState<string>(getRandomId(8));
	const [joinGameId, setJoinGameId] = useState<string>("");
	const [showShareSuccess, setShowShareSuccess] = useState<boolean>(false);

	const shareGameLink = `${location.host}/${currentGameId || randomGameId}`;
	const shareGameLinkHttps = `https://${shareGameLink}`;

	const joinGameIdValid = !!joinGameId.match(GAME_ID_REGEX);

	useEffect(() => {
		if (pwaRefreshing) {
			replaceState({ newGameDialogView: "pwa_refreshing" });
		} else if (currentGameId) {
			replaceState({ newGameDialogView: "share_create" });
		} else {
			replaceState({
				newGameDialogView:
					(
						localStorage.getItem(NUMBER_OF_GAMES_KEY) &&
						!localStorage.getItem(VERSION_2_WELCOME_SHOWN_KEY)
					) ?
						"welcome"
					:	"new_game",
			});
			setRandomGameId(getRandomId(8));
		}
	}, [pwaRefreshing, currentGameId, replaceState]);

	return (
		<Dialog open={open} onOpenChange={currentGameId ? onOpenChange : undefined}>
			<DialogContent
				className="flex max-h-full flex-col items-center overflow-auto"
				notClosable={!currentGameId}
				noDescription
			>
				<DialogHeader className="w-full">
					<DialogTitle className="flex items-center gap-4">
						{!currentGameId &&
							(state.newGameDialogView === "share" ||
								state.newGameDialogView === "share_create" ||
								state.newGameDialogView === "share_join") && (
								<Button
									variant="secondary"
									size="icon"
									onClick={() => navigateBack()}
								>
									<LucideArrowLeft />
								</Button>
							)}

						{state.newGameDialogView === "pwa_refreshing" ?
							""
						: currentGameId ?
							t("title.inviteToGame")
						: state.newGameDialogView === "welcome" ?
							t("title.welcomeToNewVersion")
						: state.newGameDialogView === "share" ?
							t("title.playWithFriends")
						: state.newGameDialogView === "share_create" ?
							t("title.createGame")
						: state.newGameDialogView === "share_join" ?
							t("title.joinGame")
						:	t("title.newGame")}
					</DialogTitle>
				</DialogHeader>

				{state.newGameDialogView === "welcome" && (
					<div className="mt-2 flex flex-col gap-4 text-left">
						<div>{t("welcome.intro")}</div>

						<div>
							<span className="pl-4 font-medium">
								• {t("welcome.dailyGame")}
							</span>
							{" – "}
							{t("welcome.dailyGameDetails")}
						</div>

						<div>
							<span className="pl-4 font-medium">
								• {t("welcome.playWithFriends")}
							</span>
							{" – "}
							{t("welcome.playWithFriendsDetails")}
						</div>

						<Button
							className="mt-2 h-12 w-full text-wrap"
							onClick={() => pushState({ newGameDialogView: "new_game" })}
						>
							{t("welcome.startPlaying")}
						</Button>
					</div>
				)}

				{state.newGameDialogView === "new_game" && (
					<>
						<Button
							className="h-16 w-full text-wrap"
							onClick={() => onNewGame(formatDate("today"))}
						>
							{t("playTodayGame")}
						</Button>

						<OrSeparator />

						<Dialog>
							<DialogTrigger asChild>
								<Button
									className="w-full text-wrap font-normal text-muted-foreground"
									variant="outline"
								>
									<CalendarIcon />
									{t("pickAnotherDay")}
								</Button>
							</DialogTrigger>
							<DialogContent
								// Overriding `translate` to prevent shift as some months have 5 rows and others 6
								className="w-fit translate-y-[-150px] rounded-lg p-1"
								notClosable
							>
								{!date && (
									<Calendar
										locale={i18n.language === "fr" ? fr : undefined}
										mode="single"
										initialFocus
										onSelect={(newDate) => {
											if (newDate) {
												setDate(newDate);
												onNewGame(formatDate(newDate));
												setTimeout(() => setDate(undefined), 500);
											}
										}}
									/>
								)}
							</DialogContent>
						</Dialog>

						<OrSeparator />

						<div className="flex w-full gap-2">
							<Button
								className="h-12 flex-1 text-wrap"
								onClick={() => onNewGame(randomGameId)}
							>
								{t("playRandomGame")}
							</Button>

							<Button
								className="h-12 flex-1 text-wrap"
								onClick={() => pushState({ newGameDialogView: "share" })}
							>
								{t("playWithFriends")}
							</Button>
						</div>
					</>
				)}

				{state.newGameDialogView === "share" && (
					<>
						<Button
							className="h-12 w-full text-wrap"
							onClick={() => pushState({ newGameDialogView: "share_create" })}
						>
							{t("createGame")}
						</Button>

						<OrSeparator />

						<Button
							className="h-12 w-full text-wrap"
							onClick={() => pushState({ newGameDialogView: "share_join" })}
						>
							{t("joinGame")}
						</Button>
					</>
				)}

				{state.newGameDialogView === "share_create" && (
					<>
						<span className="text-center">
							{t("shareCreate.scanQrCode")}{" "}
							{!currentGameId && t("shareCreate.clickPlay")}
						</span>

						<div className="rounded-md border bg-white p-4">
							<QRCodeSVG value={shareGameLinkHttps} />
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							<code className="flex items-center rounded-md border px-3 py-1">
								{shareGameLink}
							</code>

							<ButtonStatus
								size="sm"
								success={showShareSuccess}
								onClick={() =>
									(navigator.share ?
										navigator.share({
											title: t("shareCreate.title"),
											text: t("shareCreate.joinMe"),
											url: shareGameLinkHttps,
										})
									:	navigator.clipboard.writeText(
											`${t("shareCreate.joinMe")} ${shareGameLinkHttps}`,
										)
									)
										.then(() => {
											if (!showShareSuccess) {
												setShowShareSuccess(true);
												setTimeout(() => setShowShareSuccess(false), 2000);
											}
										})
										.catch(() => {})
								}
							>
								{navigator["share"] ?
									t("shareCreate.shareLink")
								:	t("shareCreate.copyLink")}
							</ButtonStatus>
						</div>

						{currentGameId ?
							<div className="flex w-full justify-between">
								<Button
									variant="outline"
									className="border-destructive text-destructive hover:bg-background hover:text-destructive"
									onClick={() => {
										pushState({ newGameDialogView: "new_game" });
										onStopGame();
									}}
								>
									{t("stopGame")}
								</Button>

								<Button variant="outline" onClick={() => onOpenChange(false)}>
									{t("close")}
								</Button>
							</div>
						:	<Button
								className="h-12 w-full text-wrap"
								onClick={() => onNewGame(randomGameId)}
							>
								{t("play")}
							</Button>
						}
					</>
				)}

				{state.newGameDialogView === "share_join" && (
					<>
						<ul className="list-disc pl-8 font-medium">
							<li>{t("shareJoin.useCamera")}</li>
							<li>{t("shareJoin.openGameLink")}</li>
							<li>{t("shareJoin.enterGameLink")}</li>
						</ul>

						<div className="flex h-10 items-center gap-0.5 rounded-md border border-input bg-background pl-3 pr-1 font-mono text-base ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 md:text-sm">
							<label htmlFor="game_id">{location.host}/</label>

							<input
								id="game_id"
								className="h-9 flex-1 bg-background font-bold outline-none"
								spellCheck={false}
								autoComplete="off"
								value={joinGameId}
								onChange={(e) => {
									const newValue = e.target.value;

									const prefixes = [
										`${location.host}/`,
										`http://${location.host}/`,
										`https://${location.host}/`,
									];

									for (const prefix of prefixes) {
										if (
											newValue.startsWith(prefix) &&
											newValue.length > prefix.length
										) {
											setJoinGameId(newValue.slice(prefix.length));
											return;
										}
									}

									setJoinGameId(newValue);
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();

										if (joinGameIdValid) {
											onNewGame(joinGameId);
										}
									}
								}}
							/>
						</div>

						<Button
							className="h-12 w-full text-wrap"
							disabled={!joinGameIdValid}
							onClick={() => onNewGame(joinGameId)}
						>
							{t("play")}
						</Button>
					</>
				)}

				{state.newGameDialogView === "pwa_refreshing" && (
					<LucideLoader2 className="h-8 w-8 animate-spin" />
				)}
			</DialogContent>
		</Dialog>
	);
};

const OrSeparator = () => {
	const { t } = useTranslation("newGameDialog");

	return (
		<div className="flex w-full items-center gap-2">
			<div className="h-0 flex-1 border-t" />
			<span className="text-xs font-medium uppercase">{t("or")}</span>
			<div className="h-0 flex-1 border-t" />
		</div>
	);
};
