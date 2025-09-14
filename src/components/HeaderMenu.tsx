import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { usePwaContext } from "@/lib/PwaContext.const";
import { useHistoryState } from "@/lib/useHistoryState.const";
import { LucideMenu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AlertFrame } from "./common/AlertFrame";
import { ButtonStatus } from "./common/ButtonStatus";
import { ExternalLink } from "./common/ExternalLink";

interface BeforeInstallPromptEvent extends Event {
	prompt(): Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const HeaderMenu = () => {
	const pwa = usePwaContext();
	const { t } = useTranslation("headerMenu");

	const { state, navigateBack, pushStateOrNavigateBack } = useHistoryState<{
		headerMenuOpen: boolean;
		rulesDialogOpen?: boolean;
		termsOfUseDialogOpen?: boolean;
		privacyPolicyDialogOpen?: boolean;
	}>();

	const [checkForUpdatesLoading, setCheckForUpdatesLoading] = useState(false);
	const [newFeaturesReloading, setNewFeaturesReloading] = useState(false);
	const [updateReloading, setUpdateReloading] = useState(false);
	const [pwaInstallPrompt, setPwaInstallPrompt] =
		useState<BeforeInstallPromptEvent>();

	const touchStartX = useRef(0);

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			// If we want to prevent the default install dialog
			// e.preventDefault();

			setPwaInstallPrompt(e as BeforeInstallPromptEvent);
		});
	}, []);

	const showNewFeaturesPing =
		pwa.newMajorVersionReady && !pwa.newMajorVersionAcknowledged;

	const triggerInstallPrompt = () =>
		pwaInstallPrompt?.prompt().finally(() => setPwaInstallPrompt(undefined));

	return (
		<Sheet
			open={!!state.headerMenuOpen}
			onOpenChange={(open) =>
				pushStateOrNavigateBack(open, { headerMenuOpen: true })
			}
		>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="relative"
					onClick={() => {
						if (showNewFeaturesPing) {
							pwa.setNewMajorVersionAcknowledged(true);
						}
					}}
				>
					<LucideMenu />
					<span className="sr-only">{t("openMenu")}</span>

					{showNewFeaturesPing && (
						<span className="absolute right-0 top-0 flex h-3 w-3">
							<span className="absolute h-full w-full animate-ping rounded-full bg-info opacity-75" />
							<span className="absolute left-[2px] top-[2px] h-2 w-2 rounded-full bg-info" />
						</span>
					)}
				</Button>
			</SheetTrigger>

			<SheetContent
				side="left"
				className="flex w-auto flex-col items-start gap-0 overflow-auto"
				onTouchStart={(e) => {
					touchStartX.current = e.changedTouches[0].screenX;
				}}
				onTouchEnd={(e) => {
					const rem = getComputedStyle(document.documentElement).fontSize;

					if (
						e.changedTouches[0].screenX <
						touchStartX.current - 2 * parseFloat(rem)
					) {
						navigateBack();
					}
				}}
				noDescription
			>
				<SheetHeader>
					<SheetTitle>
						<div className="mb-2 flex items-center gap-4">
							<img
								className="h-8 w-8"
								src="favicon-196.png"
								alt="Detrak logo"
							/>
							<span className="font-bold">{t("detrak")}</span>
						</div>
					</SheetTitle>
				</SheetHeader>

				{pwa.newMajorVersionReady && (
					<AlertFrame
						title={t("newFeatures.title")}
						description={t("newFeatures.description")}
					>
						<ButtonStatus
							size="sm"
							className="m-1"
							disabled={updateReloading}
							loading={newFeaturesReloading}
							onClick={() => {
								setNewFeaturesReloading(true);
								pwa.refresh?.();
							}}
						>
							{t("newFeatures.action")}
						</ButtonStatus>
					</AlertFrame>
				)}

				<div className="mt-4">
					{t("gigamicGame")}{" "}
					<ExternalLink href="https://www.gigamic.com/jeu/detrak" showIcon>
						{"Gigamic"}
					</ExternalLink>
					.
				</div>

				<div className="mt-4">
					{t("digitalVersion.madeBy")}{" "}
					<ExternalLink href="https://zwyx.dev" showIcon>
						{"Alex"}
					</ExternalLink>
					{t("digitalVersion.webDeveloper")}
				</div>

				<div className="mt-4">
					{t("writeToMe")}{" "}
					<ExternalLink href="mailto:alex@zwyx.dev" showIcon>
						{"alex@zwyx.dev"}
					</ExternalLink>
				</div>

				<Dialog
					open={!!state.rulesDialogOpen}
					onOpenChange={(open) =>
						pushStateOrNavigateBack(open, {
							headerMenuOpen: true,
							rulesDialogOpen: true,
						})
					}
				>
					<DialogTrigger asChild>
						<Button size="sm" className="mx-auto mt-6">
							{t("rules.readTheRules")}
						</Button>
					</DialogTrigger>

					<DialogContent
						className="max-h-full max-w-3xl overflow-auto"
						onTouchEnd={(e) => e.stopPropagation()}
						noDescription
					>
						<DialogHeader>
							<DialogTitle>{t("rules.rules")}</DialogTitle>
						</DialogHeader>

						<div className="flex flex-col gap-3">
							<p>{t("rules.part1")}</p>
							<p>{t("rules.part2")}</p>
							<ul className="list-disc pl-8">
								<li>{t("rules.points.part1")}</li>
								<li>{t("rules.points.part2")}</li>
								<li>{t("rules.points.part3")}</li>
								<li>{t("rules.points.part4")}</li>
								<li>{t("rules.points.part5")}</li>
							</ul>
							<p>{t("rules.part3")}</p>
							<p>{t("rules.part4")}</p>
						</div>

						<DialogFooter className="mt-1">
							<DialogClose asChild>
								<Button variant="secondary">
									{t("close", { ns: "common" })}
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				{pwaInstallPrompt && (
					<AlertFrame
						className="mt-8"
						title={t("install.installableWebApp")}
						description={t("install.description")}
					>
						<Button size="sm" className="m-1" onClick={triggerInstallPrompt}>
							{t("install.install")}
						</Button>
					</AlertFrame>
				)}

				<div className="flex-1" />

				<div className="mt-6 flex w-full items-center justify-center gap-2">
					<Dialog
						open={!!state.termsOfUseDialogOpen}
						onOpenChange={(open) =>
							pushStateOrNavigateBack(open, {
								headerMenuOpen: true,
								termsOfUseDialogOpen: true,
							})
						}
					>
						<DialogTrigger asChild>
							<Button
								variant="link"
								size="sm"
								className="mt-0.5 h-fit p-0 text-xs font-bold text-muted-foreground hover:no-underline"
							>
								{t("termsOfUse")}
							</Button>
						</DialogTrigger>

						<DialogContent
							className="max-h-full max-w-3xl overflow-auto"
							onTouchEnd={(e) => e.stopPropagation()}
							noDescription
						>
							<DialogHeader>
								<DialogTitle>{"Terms of use"}</DialogTitle>
							</DialogHeader>

							<div className="flex flex-col gap-3">
								<p>
									{
										'These Terms of Use ("Terms") govern your use of this application hosted and provided by Zwyx.dev ("we", "us", or "our"), ("Application") and any services offered through the Application ("Services").'
									}
								</p>

								<p>
									{
										"We may change these Terms or modify any features of the Application or the Services at any time. Any such change or modification will be effective immediately upon posting on our Application. You accept these Terms by using the Application and/or the Services, and you accept any changes to the Terms by continuing to use the Application and/or the Services after we post any such changes."
									}
								</p>

								<p>
									{
										"If you do not agree to these Terms, please do not access or use the Application."
									}
								</p>

								<h3 className="mt-2 font-semibold">{"Limits on liability"}</h3>

								<p>
									{
										'The Application and Services are provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. We make no guarantees that they always will be safe, secure, or error-free, that they will function without disruptions, delays, or imperfections or content will be accurate, current and complete.'
									}
								</p>

								<h3 className="mt-2 font-semibold">
									{"Links to third-party content"}
								</h3>

								<p>
									{
										"The Application or Services may contain links to third-party content, over which we have no control and for which we have no responsibility."
									}
								</p>
							</div>

							<DialogFooter className="mt-1">
								<DialogClose asChild>
									<Button variant="secondary">
										{t("close", { ns: "common" })}
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>

					<span className="font-bold text-muted-foreground">·</span>

					<Dialog
						open={!!state.privacyPolicyDialogOpen}
						onOpenChange={(open) =>
							pushStateOrNavigateBack(open, {
								headerMenuOpen: true,
								privacyPolicyDialogOpen: true,
							})
						}
					>
						<DialogTrigger asChild>
							<Button
								variant="link"
								size="sm"
								className="mt-0.5 h-fit p-0 text-xs font-bold text-muted-foreground hover:no-underline"
							>
								{t("privacyPolicy")}
							</Button>
						</DialogTrigger>

						<DialogContent
							className="max-h-full max-w-3xl overflow-auto"
							onTouchEnd={(e) => e.stopPropagation()}
							noDescription
						>
							<DialogHeader>
								<DialogTitle>{"Privacy policy"}</DialogTitle>
							</DialogHeader>

							<div className="flex flex-col gap-3">
								<p>
									{
										'This Privacy Policy describes Zwyx.dev ("we", "us", or "our") practices for handling your information in connection with this application ("Application") and any services offered through the Application ("Services"). This Privacy Policy describes the personal information we process to support our Services.'
									}
								</p>

								<p>
									{
										"We may change this Privacy Policy at any time. Any such change will be effective immediately upon posting on our Application. You accept this Privacy Policy by using the Application and/or the Services, and you accept any changes to the Privacy Policy by continuing to use the Application and/or the Services after we post any such changes."
									}
								</p>

								<p>
									{
										"If you do not agree to these Privacy Policy, please do not access or use the Application."
									}
								</p>

								<h3 className="mt-2 font-semibold">
									{"What kinds of information is collected?"}
								</h3>

								<p>
									{
										"Depending on the type of device you use and how you interact with us, we may collect certain information automatically when you use our Services, such as:"
									}
								</p>

								<ul className="list-disc pl-8">
									<li>
										{
											"Device attributes, including information such as the operating system, hardware and software versions, browser type."
										}
									</li>

									<li>
										{
											"Network and connections information, such as your IP address."
										}
									</li>

									<li>
										{
											"Browsing information, such as the referrer URL identifying the address of the web page which linked you to our Application."
										}
									</li>

									<li>
										{
											"Application performance information, such as software errors if they occur."
										}
									</li>
								</ul>

								<p>
									{
										"Our Application and Services are hosted by hosting providers, such as Amazon, Google, Microsoft. These hosting providers may also collect the information described above."
									}
								</p>

								<h3 className="mt-2 font-semibold">
									{"How do we use this information?"}
								</h3>

								<p>{"We use the information described above for:"}</p>

								<ul className="list-disc pl-8">
									<li>
										{
											"analytics purposes, such as knowing the number of users, and which features are the most popular;"
										}
									</li>

									<li>
										{
											"performance and error reporting purposes, such as being alerted if an error occurs in our Application."
										}
									</li>
								</ul>
							</div>

							<DialogFooter className="mt-1">
								<DialogClose asChild>
									<Button variant="secondary">
										{t("close", { ns: "common" })}
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>

				<div className="mt-2 w-full border-b" />

				<div className="mt-3 w-full text-xs text-muted-foreground">
					{t("copyright.originalGame")}
					{" © "}
					<ExternalLink href="https://www.gigamic.com" showIcon>
						{"Gigamic"}
					</ExternalLink>
				</div>

				<div className="mt-1 w-full text-xs text-muted-foreground">
					{t("copyright.digitalVersion")}
					{" © "}
					<ExternalLink href="https://zwyx.dev" showIcon>
						{"Zwyx.dev"}
					</ExternalLink>
				</div>

				<div className="mt-1 w-full text-xs text-muted-foreground">
					{t("sourceCodeAvailableAt")}{" "}
					<ExternalLink href="https://github.com/zwyx/detrak" showIcon>
						{"github.com/zwyx/detrak"}
					</ExternalLink>
				</div>

				<div className="mt-3 flex w-full items-center justify-end gap-2 text-xs text-muted-foreground">
					<span>
						{t("version")} <span className="font-bold">{pwa.version}</span>
					</span>

					<span className="font-bold text-muted-foreground">·</span>

					<ButtonStatus
						variant="link"
						size="sm"
						className="h-fit max-w-48 text-wrap p-0 text-xs font-bold text-muted-foreground hover:no-underline"
						disabled={newFeaturesReloading}
						loading={checkForUpdatesLoading || updateReloading}
						onClick={() => {
							if (pwa.refreshReady) {
								setUpdateReloading(true);
								pwa.refresh?.();
							} else {
								setCheckForUpdatesLoading(true);
								pwa.checkForNewVersion();
								setTimeout(() => setCheckForUpdatesLoading(false), 2500);
							}
						}}
					>
						{pwa.refreshReady ? t("updateAvailable") : t("checkForUpdates")}
					</ButtonStatus>
				</div>
			</SheetContent>
		</Sheet>
	);
};
