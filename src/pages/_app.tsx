import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { SiteHeader } from "~/components/site-header";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<div
				className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
			>
				<SiteHeader />
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
