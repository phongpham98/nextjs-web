module.exports = {
	i18n: {
		defaultLocale: "vi",
		locales: ["vi", "en"],
		localeDetection: false,
		localePath: "./public/locales",
		pages:{
			"*": ["common", "footer", "title", "menu", "button", "routes"]
		}
	},
	reloadOnPrerender: process.env.NODE_ENV === 'development'
};