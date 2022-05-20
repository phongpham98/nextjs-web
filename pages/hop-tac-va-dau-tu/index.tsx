import Footer from '@components/modules/footer/Footer'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import SEO from '@utils/components/SEO/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/investor-relation/InvestorMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/investor-relation/InvestorDesktop'), { ssr: false })

const InvestorRelations: InferGetStaticPropsType<typeof getStaticProps> = (props: Props) => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation(['investor', 'title'])
	const router = useRouter();
	return (
		<>
			<SEO
				title={t('investor', { ns: 'title' })}
				description={t('seo.description')}
				imgSrc='/seo_image/investor.jpg'
				keywords={t('seo.keywords')}
				seo_title={t('seo.title')}
				url={`https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}${router.asPath}`}
			/>
			{isMobile ? <React.Fragment>
				<Mobile />
				<FooterMobile />
			</React.Fragment> :
				<React.Fragment>
					{/* <LayoutDesktop> */}
					<Desktop />
					<Footer />
					{/* </LayoutDesktop> */}
				</React.Fragment>
			}

		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["investor", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
	};
}

export default InvestorRelations