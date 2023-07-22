// https://github.com/shadcn/ui/blob/main/apps/www/components/mobile-nav.tsx

import { LucideMenu } from "lucide-react";
import * as React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import {
	Dialog,
	DialogContent,
	DialogHeader,
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

			<SheetContent side="left" className="w-auto">
				<span className="font-bold">{t("detrak")}</span>

				<ScrollArea className="my-4 h-[calc(100dvh-8rem)] pb-10 pl-6">
					<div className="flex h-full flex-col items-start gap-3">
						<Button
							variant="link"
							size="sm"
							className="hover:no-underline"
							asChild
						>
							<a
								href="https://www.gigamic.com/jeu/detrak"
								target="_blank"
								rel="noreferrer nofollow"
								className="text-sm font-medium"
							>
								{t("goToEditorWebsite")}
							</a>
						</Button>

						<Dialog>
							<DialogTrigger asChild>
								<Button variant="link" size="sm" className="hover:no-underline">
									{t("aboutTheDeveloper")}
								</Button>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader />

								<div>
									{t("heyImAlex1")}
									<a
										href="https://zwyx.dev"
										target="_blank"
										rel="noreferrer nofollow"
									>
										{t("heyImAlex2")}
									</a>
									{t("heyImAlex3")}
								</div>

								{t("hopeEnjoyDetrak")}

								<div>
									{t("writeToMe")}
									<a href="mailto:alex@detrak.net">{"alex@detrak.net"}</a>.
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</ScrollArea>

				<div className="text-right text-xs font-bold text-muted-foreground">
					{import.meta.env.VITE_APP_VERSION}
				</div>
			</SheetContent>
		</Sheet>
	);
}
