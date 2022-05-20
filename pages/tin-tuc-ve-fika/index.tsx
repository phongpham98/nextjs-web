import LayoutDesktop from '@components/layout/LayoutDesktop'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import SEO from '@utils/components/SEO/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/fika-in-the-press/PressFikaMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/fika-in-the-press/PressFikaDesktop'), { ssr: false })

const FikaInThePress: InferGetStaticPropsType<typeof getStaticProps> = (props: Props) => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation(['press', 'title'])
	const router = useRouter();
	return (
		<>
			<SEO
				title={t('fika_in_the_press', { ns: 'title' })}
				description={t('seo.description')}
				imgSrc='/seo_image/home.jpg'
				keywords={t('seo.keywords')}
				seo_title={t('seo.title')}
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

	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["press", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
	};
}
export default FikaInThePress