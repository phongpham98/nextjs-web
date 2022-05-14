import Footer from '@components/modules/footer/Footer'
import FooterMobile from '@components/modules/footer/FooterMobile'
import isMobileDevice from '@helpers/isMobile'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/personality-quiz/PQuizMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/personality-quiz/PQuizDesktop'), { ssr: false })

const FreePersonalityQuiz = (props: Props) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>Personality</title>
			</Head>
			{isMobile ? <React.Fragment>
				<Mobile />
				<FooterMobile />
			</React.Fragment> :
				<React.Fragment>
					<Desktop />
					<Footer />
				</React.Fragment>
			}

		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["title", "button", 'footer', 'common', 'menu', 'routes', 'personality-quiz'])),
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}


export default FreePersonalityQuiz