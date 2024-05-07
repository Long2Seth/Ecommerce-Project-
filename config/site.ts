export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/about",
		},
		{
			label: "Policy",
			href: "/policy",
		},
		{
			label: "My Shop",
			href: "/shop",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/about",
		},
		{
			label: "Policy",
			href: "/polyci",
		},
		{
			label: "My Shop",
			href: "/blog",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
