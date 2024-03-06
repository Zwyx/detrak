import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export const Error = () => {
	const { t } = useTranslation("error");

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
