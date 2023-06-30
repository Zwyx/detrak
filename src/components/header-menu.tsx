// https://github.com/shadcn/ui/blob/main/apps/www/components/mobile-nav.tsx

import { LucideMenu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

export function HeaderMenu() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 flex-1 justify-start px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
				>
					<LucideMenu className="h-6 w-6" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>

			<SheetContent size="content" position="left">
				<MobileLink
					href="/"
					className="flex items-center"
					onOpenChange={setOpen}
				>
					<span className="font-bold">Detrak</span>
				</MobileLink>

				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					{/* <RulesDialog /> */}

					<div className="flex flex-col space-y-3">
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
								Go to the editor&apos;s website
							</a>
						</Button>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}
