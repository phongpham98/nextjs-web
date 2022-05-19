import { BlogApi } from '@api'
import { fetchByLinkorId } from '@api/_api/blog'
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

const Desktop = dynamic(() => import('@components/modules/blog-detail/BlogDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/blog-detail/BlogDetailMoible'), { ssr: false })

const BlogDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
		const res = await fetchByLinkorId(params.link, undefined, locale)
		if (res) {
			data = res
		}
	}
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["blog", "common", "footer", "title", "menu", "button", "routes"])),
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
			const res = await BlogApi.fetchBlogs(q)
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


export default BlogDetail