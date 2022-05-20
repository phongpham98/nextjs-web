import { HomeApi } from '@api'
import { fetchCategoryById } from '@api/_api/category'
import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { CategoryHome } from '@interfaces/model'
import { CategoryHomeRequest, CategoryRequest } from '@interfaces/request'
import SEO from '@utils/components/SEO/SEO'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
	data: CategoryHome
}

const Desktop = dynamic(() => import('@components/modules/category-detail/CategoryDetailDesktop'), { ssr: false })
const Mobile = dynamic(() => import('@components/modules/category-detail/CategoryDetailMobile'), { ssr: false })

const CategoryDetail: InferGetStaticPropsType<typeof getStaticProps> = ({ data }: Props) => {
	const isMobile = isMobileDevice();
	const router = useRouter();
	return (
		<>
			<SEO
				title={data?.name}
				description={data?.seo_description}
				imgSrc={data?.thumbnail}
				keywords={data?.seo_keywords?.join(',')}
				seo_title={data?.seo_title}
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
	let data: CategoryHome = {
		name: "Fika Connects",
		type: "",
		link: '',
		seo_title: 'string',
		seo_description: 'string',
		seo_keywords: [''],

	};
	const query: CategoryRequest = {
		language: locale,
		cate_id: params && typeof params.link === 'string' ? params.link : '',
		page: 1,
		limit: 1
	}
	const res = await fetchCategoryById(query)
	if (res) {
		data = res.category
		data.seo_description = 'phong',
			data.seo_title = 'category',
			data.seo_keywords = ['keywrod']
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
				deactivated: false,
				language: locale,
				type: 'Blog'
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