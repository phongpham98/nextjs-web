import { HomeApi } from '@api'
import { fetchCategoryById } from '@api/_api/category'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { CategoryHome } from '@interfaces/model'
import { CategoryResponse } from '@interfaces/posts'
import { CategoryHomeRequest, CategoryRequest } from '@interfaces/request'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {
	// data: CategoryHome
}

const Desktop = dynamic(() => import('@components/modules/category-detail/CategoryDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/category-detail/CategoryDetailMobile'), { ssr: false })

const CategoryDetail = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>{data ? data.name : 'Fika Connects'}</title>
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
	let data: CategoryHome = {
		name: "Fika Connects",
		type: "",
		link: ''
	};
	if (params && typeof params.link === 'string') {
		const query: CategoryRequest = {
			language: locale,
			cate_id: params.link,
			page: 1,
			limit: 1
		}
		const res = await fetchCategoryById(query)
		if (res) {
			data = res.category
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
			const query: CategoryHomeRequest = {
				homepage: true,
				deactivated: false,
				language: locale
			};
			const res = await HomeApi.getCategories(query)
			if (res) {
				res.forEach(blog => {
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

export default CategoryDetail