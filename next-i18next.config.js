module.exports = {
	i18n: {
		defaultLocale: "vi",
		locales: ["vi", "en"],
		localeDetection: false,
		localePath: "./public/locales",
	},
	reloadOnPrerender: process.env.NODE_ENV === 'development'
};