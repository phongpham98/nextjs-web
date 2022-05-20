import { NewsApi } from '@api'
import { fetchNewsByLinkOrId } from '@api/_api/news'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage'
import { PostModel, PostRequest } from '@interfaces/posts'
import SEO from '@utils/components/SEO/SEO'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
	data: PostModel
}

const Desktop = dynamic(() => import('@components/modules/news-detail/NewsDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/news-detail/NewsDetailMobile'), { ssr: false })

const NewsDetail: InferGetStaticPropsType<typeof getStaticProps> = ({ data }: Props) => {
	const isMobile = isMobileDevice();
	const router = useRouter();
	const { t } = useTranslation(['title', 'routes'])
	return (
		<>
			<SEO
				title={data.title}
				description={data?.short_description}
				imgSrc={data.thumbnail}
				keywords={data.seo_keywords?.join(',')}
				seo_title={data.title}
				hasBreadCrumb={true}
				public_date={renderDateFollowLanguage(data.public_date ? data.public_date : data.created_at, router)}
				updated_at={renderDateFollowLanguage(data.updated_at ? data.updated_at : data.created_at, router)}
				parent_name={t('news')}
				parent_url={`https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}${t('news', { ns: 'routes' })}`}
				url={`https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}${router.asPath}`}
			/>
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
	let data: PostModel = {
		id: 'string',
		title: 'string',
		banner: 'string',
		comments: 0,
		contents: 'string',
		author: {
			id: '',
			name: '',
			username: ''
		},
		tags: [],
		likes: 0,
		link: 'string',
		created_at: 0,
		category: {}
	};
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