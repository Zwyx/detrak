import { captureException } from "@sentry/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router";
import { Button } from "../ui/button";

export const RouteErrorElement = () => {
	const { t } = useTranslation("error");

	const routeError = useRouteError() as Error;

	useEffect(() => {
		captureException(routeError);
	}, [routeError]);

	return (
		<div className="mt-8 text-center">
			<h1 className="font-semibold">{t("oops")}</h1>

			<p className="mt-4">{t("error")}</p>

			<Button className="mt-6" onClick={() => location.reload()}>
				{t("reload")}
			</Button>
		</div>
	);
};
