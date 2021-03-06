import LayoutDesktop from '@components/layout/LayoutDesktop'
import Footer from '@components/modules/footer/Footer'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/personality-quiz/PQuizMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/personality-quiz/PQuizDesktop'), { ssr: false })

const FreePersonalityQuiz = (props: Props) => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation('title')
	return (
		<>
			<Head>
				<title>{t('personality_free')}</title>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ['personality-quiz', "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}


export default FreePersonalityQuiz