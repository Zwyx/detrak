import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

import { SiteHeader } from "~/components/site-header";
import { SettingsContextProvider } from "~/lib/settings-context";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Detrak</title>

				<link rel="icon" href="/dices.png" type="image/png" />

				<meta property="og:title" content="Detrak" />
				<meta property="og:description" content="The Detrak dice game" />
				<meta property="og:image" content="/dices.png" />
			</Head>

			<ThemeProvider attribute="class">
				<SettingsContextProvider>
					<div
						className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
					>
						<SiteHeader />
						<Component {...pageProps} />
					</div>
				</SettingsContextProvider>
			</ThemeProvider>
		</div>
	);
}
