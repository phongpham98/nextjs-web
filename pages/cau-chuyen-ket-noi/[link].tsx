import { ConnectedStoryApi } from '@api'
import { fetchStoryById } from '@api/_api/loveStory'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { StoryModel } from '@interfaces/model'
import { PostRequest } from '@interfaces/posts'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {
	data: StoryModel
}

const Desktop = dynamic(() => import('@components/modules/connected-story-detail/LoveStoryDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/connected-story-detail/StoryDetailMobile'), { ssr: false })

const ConnectedStoryDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>{data ? data.title : 'Fika Connects'}</title>
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
		const res = await fetchStoryById(params.link, undefined, locale)
		if (res) {
			data = res
		}
	}
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["story", "common", "footer", "title", "menu", "button", "routes"])),
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
				limit: 100,
				language: locale,
				deactivated: false,
			};
			const res = await ConnectedStoryApi.fetchConnectedStories(q)
			if (res) {
				res.items.forEach(blog => {
					paths.push({
						params: {
							link: blog.link,
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

export default ConnectedStoryDetail