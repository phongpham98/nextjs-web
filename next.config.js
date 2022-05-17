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
			{
				source: '/en/news',
				destination: '/en/tin-tuc',
				locale: false
			},
			{
				source: '/en/news/detail/:link',
				destination: '/en/tin-tuc/chi-tiet/:link',
				locale: false
			},
			{
				source: '/en/connected-story',
				destination: '/en/cau-chuyen-ket-noi',
				locale: false
			},
			{
				source: '/en/connected-story/:link',
				destination: '/en/cau-chuyen-ket-noi/:link',
				locale: false
			},
			{
				source: '/en/social-spot',
				destination: '/en/dia-diem-gap-go',
				locale: false
			},
			{
				source: '/en/event',
				destination: '/en/su-kien',
				locale: false
			},
			{
				source: '/en/event/:link',
				destination: '/en/su-kien/:link',
				locale: false
			},
			{
				source: '/en/fika-in-the-press',
				destination: '/en/tin-tuc-ve-fika',
				locale: false
			},
			{
				source: '/en/investor-relations',
				destination: '/en/hop-tac-va-dau-tu',
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
			{
				source: '/en/news',
				destination: '/en/tin-tuc',
				permanent: true,
			},
			{
				source: '/en/connected-story',
				destination: '/en/cau-chuyen-ket-noi',
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
