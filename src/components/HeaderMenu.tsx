// https://github.com/shadcn/ui/blob/main/apps/www/components/mobile-nav.tsx

import { LucideMenu } from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export const HeaderMenu = () => {
	const { t } = useTranslation("headerMenu");

	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" className="px-2">
					<LucideMenu className="h-6 w-6" />
					<span className="sr-only">{t("openMenu")}</span>
				</Button>
			</SheetTrigger>

			<SheetContent
				side="left"
				className="flex h-full w-auto flex-col items-start gap-0 overflow-auto"
			>
				<div className="flex items-center gap-4">
					<img className="w-8" src="favicon-196.png" alt="Detrak logo" />
					<span className="font-bold">{t("detrak")}</span>
				</div>

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

				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="link"
							size="sm"
							className="mt-2 h-fit p-0 text-right text-xs font-bold text-muted-foreground hover:no-underline"
						>
							{"Terms and conditions"}
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>{"Terms and conditions"}</DialogTitle>
						</DialogHeader>

						<div>
							{
								"This software is provided “as is”, without warranty of any kind. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software."
							}
						</div>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="link"
							size="sm"
							className="mt-2 h-fit p-0 text-right text-xs font-bold text-muted-foreground hover:no-underline"
						>
							{"Privacy policy"}
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>{"Privacy policy"}</DialogTitle>
						</DialogHeader>

						<div>
							{"No personal user data is collected by Detrak. "}
							<a
								href="https://sentry.io"
								target="_blank"
								rel="noreferrer nofollow"
								className="font-bold"
							>
								{"Sentry"}
							</a>
							{" and "}
							<a
								href="https://plausible.io"
								target="_blank"
								rel="noreferrer nofollow"
								className="font-bold"
							>
								{"Plausible"}
							</a>
							{
								" are used for error reporting and analytics. These two services are both GDPR and CCPA compliant — they don't store cookies and respect user privacy."
							}
						</div>
					</DialogContent>
				</Dialog>

				<div className="mt-4 w-full border" />

				<div className="mt-4 w-full text-xs text-muted-foreground">
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
