import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePwaContext } from "@/lib/PwaContext.const";
import { LucideMenu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const HeaderMenu = () => {
	const {
		refreshNeeded,
		refreshNeededAcknowledged,
		setRefreshNeededAcknowledged,
		refresh,
	} = usePwaContext();
	const { t } = useTranslation("headerMenu");

	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					className="relative"
					variant="ghost"
					size="icon"
					onClick={() => {
						if (refreshNeeded && !refreshNeededAcknowledged) {
							setRefreshNeededAcknowledged(true);
						}
					}}
				>
					<LucideMenu />
					<span className="sr-only">{t("openMenu")}</span>

					{refreshNeeded && !refreshNeededAcknowledged && (
						<span className="absolute right-0 top-0 flex h-3 w-3">
							<span className="absolute h-full w-full animate-ping rounded-full bg-info opacity-75" />
							<span className="absolute left-[2px] top-[2px] h-2 w-2 rounded-full bg-info" />
						</span>
					)}
				</Button>
			</SheetTrigger>

			<SheetContent
				side="left"
				className="flex  w-auto flex-col items-start gap-0 overflow-auto"
			>
				<div className="mb-2 flex items-center gap-4">
					<img className="h-8 w-8" src="favicon-196.png" alt="Detrak logo" />
					<span className="font-bold">{t("detrak")}</span>
				</div>

				{refreshNeeded && (
					<div className="mt-2 flex w-full flex-col items-center gap-1 rounded-md border border-info bg-info/10 p-2">
						<div className="w-full">{t("newVersion.title")}</div>
						<div className="w-full text-sm text-muted-foreground">
							{t("newVersion.description")}
						</div>
						<Button className="m-1" size="sm" onClick={refresh}>
							{t("newVersion.action")}
						</Button>
					</div>
				)}

				<div className="mt-4">
					{t("gigamicGame")}
					<a
						href="https://www.gigamic.com/jeu/detrak"
						target="_blank"
						rel="noreferrer nofollow"
						className="font-bold"
					>
						{"Gigamic"}
					</a>
					.
				</div>

				<div className="mt-4">
					{t("digitalVersion.madeBy")}
					<a
						href="https://zwyx.dev"
						target="_blank"
						rel="noreferrer"
						className="font-bold"
					>
						{"Alex"}
					</a>
					{t("digitalVersion.webDeveloper")}
				</div>

				<div className="mt-4">
					{t("writeToMe")}
					<a href="mailto:alex@zwyx.dev" className="font-bold">
						{"alex@zwyx.dev"}
					</a>
				</div>

				<div className="flex-1" />

				<div className="mt-6 flex w-full items-center justify-center gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="link"
								size="sm"
								className="mt-0.5 h-fit p-0 text-right text-xs font-bold text-muted-foreground hover:no-underline"
							>
								{"Terms of use"}
							</Button>
						</DialogTrigger>

						<DialogContent className="max-h-full max-w-3xl overflow-auto">
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
						</DialogContent>
					</Dialog>

					<span className="font-bold text-muted-foreground">·</span>

					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="link"
								size="sm"
								className="mt-0.5 h-fit p-0 text-right text-xs font-bold text-muted-foreground hover:no-underline"
							>
								{"Privacy policy"}
							</Button>
						</DialogTrigger>

						<DialogContent className="max-h-full max-w-3xl overflow-auto">
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

								<ul className="ml-4 list-inside list-disc pl-4 indent-[-1.35rem]">
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

								<ul className="ml-4 list-inside list-disc pl-4 indent-[-1.35rem]">
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
						</DialogContent>
					</Dialog>
				</div>

				<div className="mt-2 w-full border-b" />

				<div className="mt-3 w-full text-xs text-muted-foreground">
					{"Original game © "}
					<a
						href="https://www.gigamic.com"
						target="_blank"
						rel="noreferrer nofollow"
						className="font-bold"
					>
						{"Gigamic"}
					</a>
				</div>

				<div className="mt-1 w-full text-xs text-muted-foreground">
					{"Digital version © "}
					<a
						href="https://zwyx.dev"
						target="_blank"
						rel="noreferrer"
						className="font-bold"
					>
						{"Zwyx.dev"}
					</a>
				</div>

				<div className="mt-1 w-full text-xs text-muted-foreground">
					{"Source code available at "}
					<a
						href="https://github.com/zwyx/detrak"
						target="_blank"
						rel="noreferrer"
						className="font-bold"
					>
						{"github.com/zwyx/detrak"}
					</a>
				</div>

				<div className="mt-2 w-full text-right text-xs text-muted-foreground">
					{t("version")}{" "}
					<span className="font-bold">{import.meta.env.VITE_APP_VERSION}</span>
				</div>
			</SheetContent>
		</Sheet>
	);
};
