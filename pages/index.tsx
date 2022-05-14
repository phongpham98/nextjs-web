import Footer from '@components/modules/footer/Footer';
import FooterMobile from '@components/modules/footer/FooterMobile';
import HeaderDesktop from '@components/modules/headers/HeaderDesktop';
import HeaderMobile from '@components/modules/headers/HeaderMobile';
import { HeaderContainer } from '@components/modules/headers/HeaderStyled';
import NavBarDesktop from '@components/navbar/nav-desktop/NavbarDesktop';
import isMobileDevice from '@helpers/isMobile';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const HomePageMobile = dynamic(() => import('@components/modules/home/HomePageMobile'), { ssr: false })
const HomePageDesktop = dynamic(() => import('@components/modules/home/HomepageDesktop'), { ssr: false })

const IndexPage = ({ }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	return (
		<>
			<Head>
				<title>Fika Connects</title>
			</Head>
			{isMobile ? <React.Fragment>
				<HeaderContainer>
					<HeaderMobile />
				</HeaderContainer>
				<HomePageMobile />
				<FooterMobile />
			</React.Fragment> :
				<React.Fragment>
					<HeaderContainer>
						<HeaderDesktop />
					</HeaderContainer>
					<NavBarDesktop />
					<HomePageDesktop />
					<Footer />
				</React.Fragment>
			}
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ? locale : 'vi', ["home", "common", "footer", "title", "menu", "button", "routes"])),
			// Will be passed to the page component as props
		},
		revalidate: 1
	};
}

export default IndexPage
