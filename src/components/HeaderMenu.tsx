// https://github.com/shadcn/ui/blob/main/apps/www/components/mobile-nav.tsx

import { LucideMenu } from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

export function HeaderMenu() {
	const { t } = useTranslation(["headerMenu"]);

	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 flex-1 justify-start px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<LucideMenu className="h-6 w-6" />
					<span className="sr-only">{t("toggleMenu")}</span>
				</Button>
			</SheetTrigger>

			<SheetContent
				side="left"
				className="flex h-full w-auto flex-col items-start gap-0 overflow-auto"
			>
				<span className="font-bold">{t("detrak")}</span>

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
						rel="noreferrer nofollow"
						className="font-bold"
					>
						{"Alex"}
					</a>
					{t("digitalVersion.webDeveloper")}
				</div>

				<div className="mt-4">
					{t("writeToMe")}
					<a href="mailto:alex@detrak.net" className="font-bold">
						{"alex@detrak.net"}
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
							{t("privacyPolicy.title")}
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>{t("privacyPolicy.title")}</DialogTitle>
						</DialogHeader>

						<div>{t("privacyPolicy.content")}</div>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="link"
							size="sm"
							className="mt-2 h-fit p-0 text-right text-xs font-bold text-muted-foreground hover:no-underline"
						>
							{t("termsAndConditions.title")}
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader>
							<DialogTitle>{t("termsAndConditions.title")}</DialogTitle>
						</DialogHeader>

						<div>{t("termsAndConditions.content")}</div>
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
						rel="noreferrer nofollow"
						className="font-bold"
					>
						{"Zwyx.dev"}
					</a>
				</div>

				<div className="mt-1 w-full text-right text-xs text-muted-foreground">
					{t("version")}{" "}
					<span className="font-bold">{import.meta.env.VITE_APP_VERSION}</span>
				</div>
			</SheetContent>
		</Sheet>
	);
}
