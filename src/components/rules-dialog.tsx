import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "./ui/button";

export function RulesDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="link" size="sm" className="hover:no-underline">
					Read the rules
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Detrak&apos;s rules</DialogTitle>

					<DialogDescription>
						Rules are probably not necessary actually...
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
