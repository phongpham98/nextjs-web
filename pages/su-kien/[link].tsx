import { EventApi } from '@api'
import { fetchEventById } from '@api/_api/event'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { EventModel } from '@interfaces/model'
import { PostRequest } from '@interfaces/posts'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

const Desktop = dynamic(() => import('@components/modules/event-detail/EventDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/event-detail/EventDetailMobile'), { ssr: false })

const EventDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>{data ? data.name : "Fika Connects"}</title>
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
		const res = await fetchEventById(params.link, locale)
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
			const res = await EventApi.fetchAllEvents(q)
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

export default EventDetail