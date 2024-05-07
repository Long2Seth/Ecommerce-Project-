import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SessionWrapper from "../SessionProvider";
import StoreProvider from "../StoreProvider";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<SessionWrapper>
				<body
					className={clsx(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					<StoreProvider>
						<Providers>
							<div className="flex flex-col h-screen">
								<main>
									{children}
								</main>
								<footer>
								</footer>
							</div>
						</Providers>
					</StoreProvider>
				</body>
			</SessionWrapper>

		</html>
	);
}
