import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useSettingsContext } from "@/lib/SettingsContext.const";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { BlockerFunction, useBeforeUnload, useBlocker } from "react-router";
import { SettingCheckbox } from "./SettingsDialog";
import { Button } from "./ui/button";

export const NavigationBlocker = ({
	shouldBlock,
}: {
	shouldBlock: boolean;
}) => {
	const { settings } = useSettingsContext();
	const { t } = useTranslation("navigationBlocker");

	const blockRequired = shouldBlock && settings.showNavigationAlert;

	useBeforeUnload(
		useCallback(
			(e) => {
				if (blockRequired) {
					e.preventDefault();
				}
			},
			[blockRequired],
		),
	);

	const blocker = useBlocker(
		useCallback(
			({ currentLocation, nextLocation }) => {
				return (
					currentLocation.pathname !== nextLocation.pathname && blockRequired
				);
			},
			[blockRequired],
		) as BlockerFunction,
	);

	return (
		<AlertDialog open={blocker.state === "blocked"}>
			<AlertDialogContent className="gap-6">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-left">
						{t("title")}
					</AlertDialogTitle>

					<AlertDialogDescription className="text-left">
						<div className="mb-6 mt-2">{t("description")}</div>

						<SettingCheckbox
							name="showNavigationAlert"
							title={t("confirmationCheckbox")}
						/>
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => blocker.reset?.()}>
						{t("keepPlaying")}
					</AlertDialogCancel>

					<Button variant="destructive" onClick={() => blocker.proceed?.()}>
						{t("stopGame")}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
