/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
	reactStrictMode: true,
	i18n,
	// ssr and displayName are configured by default
	async rewrites() {
		return [
			{
				source: '/en/about',
				destination: '/en/ve-fika',
				locale: false
			},
			{
				source: '/en/personality',
				destination: '/en/quiz-tinh-cach',
				locale: false
			},
			{
				source: '/en/personality/:type',
				destination: '/en/quiz-tinh-cach/:type',
				locale: false
			},
			{
				source: '/en/personality/result/:id',
				destination: '/en/quiz-tinh-cach/result/:id',
				locale: false
			},
			{
				source: '/en/personality/quiz/free-personality-test',
				destination: '/en/quiz-tinh-cach/quiz/lam-trac-nghiem-mien-phi',
				locale: false
			},
		]
	},
	async redirects() {
		return [
			{
				source: '/en/quiz-tinh-cach',
				destination: '/en/personality',
				permanent: true,
			},
			{
				source: '/en/ve-fika',
				destination: '/en/about',
				permanent: true,
			},
		]
	},
	images: {
		domains: ['static-assets.keepfika.com'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
}
