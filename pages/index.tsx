import HeaderDesktop from '@components/modules/headers/HeaderDesktop';
import HeaderMobile from '@components/modules/headers/HeaderMobile';
import { HeaderContainer } from '@components/modules/headers/HeaderStyled';
import NavBarDesktop from '@components/NavBar/nav-desktop/NavbarDesktop';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { BrowserView, MobileView } from 'react-device-detect';

const HomePageMobile = dynamic(() => import('@components/modules/home/HomePageMobile'))
const HomePageDesktop = dynamic(() => import('@components/modules/home/HomepageDesktop'))

const IndexPage = () => {

	return (
		<>
			<Head>
				<title>Fika Connects</title>
			</Head>
			<MobileView>
				<HeaderContainer>
					<HeaderMobile />
				</HeaderContainer>
				<HomePageMobile />
			</MobileView>
			<BrowserView>
				<HeaderContainer>
					<HeaderDesktop />
				</HeaderContainer>
				<NavBarDesktop />
				<HomePageDesktop />
			</BrowserView>


		</>
	)
}

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["title", "home", "button", 'footer', 'common'])),
			// Will be passed to the page component as props
		},
	};
}

export default IndexPage
