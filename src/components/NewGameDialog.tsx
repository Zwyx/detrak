import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Calendar } from "@/components/ui/calendar";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	NUMBER_OF_GAMES_KEY,
	VERSION_2_WELCOME_SHOWN_KEY,
} from "@/lib/local-storage-keys";
import { GAME_ID_ALPHABET_REGEX, getRandomId } from "@/lib/prng";
import { formatDate, usePrevious } from "@/lib/utils";
import { CalendarIcon, LucideArrowLeft } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const DOMAIN = import.meta.env.VITE_DOMAIN;

export const NewGameDialog = ({
	open,
	currentGameId,
	onNewGame,
	onClearGame,
	onOpenChange,
}: {
	open: boolean;
	currentGameId: string | undefined;
	onNewGame: (gameId: string) => void;
	onClearGame: () => void;
	onOpenChange: (open: boolean) => void;
}) => {
	const { t } = useTranslation("newGameDialog");

	const prevCurrentGameId = usePrevious(currentGameId);

	const [view, setView] = useState<
		"welcome" | "new_game" | "share" | "share_create" | "share_join"
	>(
		localStorage.getItem(NUMBER_OF_GAMES_KEY) &&
			!localStorage.getItem(VERSION_2_WELCOME_SHOWN_KEY)
			? "welcome"
			: "new_game",
	);

	const [date, setDate] = useState<Date>();
	const [randomGameId, setRandomGameId] = useState<string>(getRandomId(8));
	const [joinGameId, setJoinGameId] = useState<string>("");

	const shareGameLink = `${DOMAIN}/${currentGameId || randomGameId}`;
	const shareGameLinkHttps = `https://${shareGameLink}`;

	const joinGameIdValid = !!joinGameId.match(GAME_ID_ALPHABET_REGEX);

	useEffect(() => {
		if (currentGameId) {
			setView("share_create");
		} else if (prevCurrentGameId) {
			setView("new_game");
			setRandomGameId(getRandomId(8));
		}
	}, [currentGameId, prevCurrentGameId]);

	return (
		<Dialog open={open} onOpenChange={currentGameId ? onOpenChange : undefined}>
			{/* <DialogTrigger asChild>
				<Button variant="ghost" size="sm" className="w-9 px-0">
					<LucideSettings />
					<span className="sr-only">{t("openSettingsDialog")}</span>
				</Button>
			</DialogTrigger> */}

			<DialogContent
				className="flex max-h-full flex-col items-center overflow-auto"
				notClosable={!currentGameId}
			>
				<DialogHeader className="w-full">
					<DialogTitle className="flex items-center gap-4">
						{!currentGameId &&
							(view === "share" ||
								view === "share_create" ||
								view === "share_join") && (
								<Button
									variant="secondary"
									size="icon"
									onClick={() =>
										setView((prev) =>
											prev === "share_create" || prev === "share_join"
												? "share"
												: "new_game",
										)
									}
								>
									<LucideArrowLeft />
								</Button>
							)}

						{currentGameId
							? "Invite people to the current game"
							: view === "welcome"
							? "Welcome to the new version of Detrak!"
							: view === "share"
							? "Play with friends"
							: view === "share_create"
							? "Create a game"
							: view === "share_join"
							? "Join a game"
							: t("newGame")}
					</DialogTitle>
					{/* <DialogDescription></DialogDescription> */}
				</DialogHeader>

				{view === "welcome" && (
					<div className="mt-2 flex flex-col gap-4 text-left">
						<div>There are two new ways of playing:</div>

						<div>
							<span className="pl-4 font-medium">• The daily game</span> – every
							day, the game of the day will have the same sequence of symbols
							drawn by the dice for everyone.
						</div>

						<div>
							<span className="pl-4 font-medium">• Play with friends</span> –
							you can now create a game and invite people to join. Here too, the
							sequence of symbols drawn during the game will be the same for
							your friends and you. It even works without internet connection.
						</div>

						<Button
							className="mt-2 h-12 w-full text-wrap"
							onClick={() => setView("new_game")}
						>
							Start playing!
						</Button>
					</div>
				)}

				{view === "new_game" && (
					<>
						<Button
							className="h-16 w-full text-wrap"
							onClick={() => onNewGame(formatDate("today"))}
						>
							Play today's game
						</Button>

						<OrSeparator />

						<Popover>
							<PopoverTrigger asChild>
								<Button
									className="w-full text-wrap font-normal text-muted-foreground"
									variant="outline"
								>
									<CalendarIcon />
									Pick another day
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								{!date && (
									<Calendar
										mode="single"
										initialFocus
										onSelect={(newDate) => {
											if (newDate) {
												setDate(newDate);
												onNewGame(formatDate(newDate));
											}
										}}
									/>
								)}
							</PopoverContent>
						</Popover>

						<OrSeparator />

						<div className="flex w-full gap-2">
							<Button
								className="h-12 flex-1 text-wrap"
								onClick={() => onNewGame(randomGameId)}
							>
								Play a random game
							</Button>

							<Button
								className="h-12 flex-1 text-wrap"
								onClick={() => setView("share")}
							>
								Play with friends
							</Button>
						</div>
					</>
				)}

				{view === "share" && (
					<>
						<Button
							className="h-12 w-full text-wrap"
							onClick={() => setView("share_create")}
						>
							Create a game
						</Button>

						<OrSeparator />

						<Button
							className="h-12 w-full text-wrap"
							onClick={() => setView("share_join")}
						>
							Join a game
						</Button>
					</>
				)}

				{view === "share_create" && (
					<>
						<span className="text-center font-medium">
							Ask your friends to scan this QR code, or share the link with
							them. {!currentGameId && "Then click Play."}
						</span>

						<div className="rounded-md border bg-white p-4">
							<QRCodeSVG value={shareGameLinkHttps} />
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							<code className="flex items-center rounded-md border px-3 py-1">
								{shareGameLink}
							</code>

							<Button
								size="sm"
								onClick={() => {
									if (navigator.share) {
										navigator.share({
											title: "Detrak",
											text: "Play this game with me on Detrak",
											url: shareGameLinkHttps,
										});
									} else {
										navigator.clipboard.writeText(shareGameLinkHttps);
									}
								}}
							>
								{navigator["share"] ? "Share link" : "Copy link to clipboard"}
							</Button>
						</div>

						{currentGameId ? (
							<div className="flex w-full justify-between">
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button
											variant="outline"
											className="border-destructive text-destructive hover:bg-background hover:text-destructive"
										>
											Stop this game
										</Button>
									</AlertDialogTrigger>

									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogTitle>Are you sure?</AlertDialogTitle>

											<AlertDialogDescription>
												Please confirm that you want to stop the current game.
											</AlertDialogDescription>
										</AlertDialogHeader>

										<AlertDialogFooter>
											<AlertDialogCancel>Keep playing</AlertDialogCancel>

											<Button variant="destructive" onClick={onClearGame}>
												Stop this game
											</Button>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>

								<Button variant="outline" onClick={() => onOpenChange(false)}>
									Close
								</Button>
							</div>
						) : (
							<Button
								className="h-12 w-full text-wrap"
								onClick={() => onNewGame(randomGameId)}
							>
								Play
							</Button>
						)}
					</>
				)}

				{view === "share_join" && (
					<>
						<ul className="list-disc font-medium">
							<li>Use your device's camera to scan a game's QR code.</li>
							<li>Or, open a game's link.</li>
							<li>Or, enter a game's link below and click Play.</li>
						</ul>

						<div className="flex h-10 items-center gap-0.5 rounded-md border border-input bg-background pl-3 pr-1 font-mono text-base ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 md:text-sm">
							<label htmlFor="game_id">{DOMAIN}/</label>

							<input
								id="game_id"
								className="h-9 flex-1 bg-background font-semibold outline-none"
								spellCheck={false}
								autoComplete="off"
								value={joinGameId}
								onChange={(e) => {
									const newValue = e.target.value;

									const prefixes = [
										`${DOMAIN}/`,
										`http://${DOMAIN}/`,
										`https://${DOMAIN}/`,
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
							Play
						</Button>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
};

const OrSeparator = () => (
	<div className="flex w-full items-center gap-2">
		<div className="h-0 flex-1 border-t" />
		<span className="text-xs font-medium">OR</span>
		<div className="h-0 flex-1 border-t" />
	</div>
);
