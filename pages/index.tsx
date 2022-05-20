import Footer from '@components/modules/footer/Footer';
import FooterMobile from '@components/modules/footer/FooterMobile';
import HeaderDesktop from '@components/modules/headers/HeaderDesktop';
import HeaderMobile from '@components/modules/headers/HeaderMobile';
import { HeaderContainer } from '@components/modules/headers/HeaderStyled';
import NavBarDesktop from '@components/navbar/nav-desktop/NavbarDesktop';
import isMobileDevice from '@helpers/isMobile';
import SEO from '@utils/components/SEO/SEO';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const HomePageMobile = dynamic(() => import('@components/modules/home/HomePageMobile'), { ssr: false })
const HomePageDesktop = dynamic(() => import('@components/modules/home/HomepageDesktop'), { ssr: false })

const IndexPage = ({ }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const isMobile = isMobileDevice();
	const { t } = useTranslation('home')
	const router = useRouter();
	return (
		<>
			<SEO
				title='Fika Connects'
				description={t('seo.description')}
				imgSrc='/seo_image/home.jpg'
				keywords={t('seo.keywords')}
				seo_title={t('seo.title')}
				url={`https://${process.env.NEXT_PUBLIC_REACT_APP_DOMAIN}${router.locale === "en" ? "/en" : ""}${router.asPath}`}
			/>
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
