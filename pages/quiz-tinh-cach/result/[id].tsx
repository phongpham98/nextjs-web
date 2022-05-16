import LayoutDesktop from '@components/layout/LayoutDesktop';
import Footer from '@components/modules/footer/Footer';
import FooterMobile from '@components/modules/footer/FooterMobile';
import isMobileDevice from '@helpers/isMobile';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/personality-result/PResultMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/personality-result/PResultDesktop'), { ssr: false })

const PersonalityResult = (props: Props) => {
	const isMobile = isMobileDevice();
	return (
		<>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["personality-type", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	// const res: ApiListResponse<Project> | void = await projectApi.getAllProjects()
	let paths: any[] = [];
	if (locales)
		['intp'].forEach(block => {
			for (const locale of locales) {
				paths.push({
					params: {
						id: block,
					},
					locale,
				});
			}
		})
	paths = paths.flat();
	return {
		paths,
		fallback: true
	}
}
export default PersonalityResult