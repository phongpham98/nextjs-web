import LayoutDesktop from '@components/layout/LayoutDesktop';
import Footer from '@components/modules/footer/Footer';
import FooterMobile from '@components/modules/footer/FooterMobile';
import NavBarDesktop from '@components/navbar/nav-desktop/NavbarDesktop';
import isMobileDevice from '@helpers/isMobile';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'

type Props = {}

const Mobile = dynamic(() => import('@components/modules/personality-home/PHomeMobile'), { ssr: false })
const Desktop = dynamic(() => import('@components/modules/personality-home/PHomeDesktop'), { ssr: false })

const PersonalityHome = (props: Props) => {
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
			...(await serverSideTranslations(locale ? locale : 'vi', ["personality-home", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}


export default PersonalityHome