import { NewsApi } from '@api'
import { fetchNewsByLinkOrId } from '@api/_api/news'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { PostModel, PostRequest } from '@interfaces/posts'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {
	data: PostModel
}

const Desktop = dynamic(() => import('@components/modules/news-detail/NewsDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/news-detail/NewsDetailMobile'), { ssr: false })

const NewsDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>{data ? data.title : "Fika Connects"}</title>
			</Head>
			{isMobile ? <React.Fragment>
				<Mobile />
				<FooterMobile />
			</React.Fragment> :
				<React.Fragment>
					<LayoutDesktop>
						<Desktop />
					</LayoutDesktop>
				</React.Fragment>
			}

		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
	let data: any = '';
	if (params && typeof params.link === 'string') {
		const res = await fetchNewsByLinkOrId(params.link, undefined, locale)
		if (res) {
			data = res
		}
	}
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
			data
		},
		revalidate: 1
	};
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {

	let paths: any[] = [];
	if (locales)
		for (const locale of locales) {
			const q: PostRequest = {
				page: 1,
				limit: 300,
				language: locale
			};
			const res = await NewsApi.fetchListNews(q)
			if (res) {
				res.items.forEach(post => {
					paths.push({
						params: {
							link: post.link,
						},
						locale,
					});
				})
			}
		}
	paths = paths.flat();
	return {
		paths,
		fallback: true
	}
}

export default NewsDetail