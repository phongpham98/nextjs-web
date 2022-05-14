import MenuMobile from '@components/mobile/menu-mobile/MenuMobile';
import Footer from '@components/modules/footer/Footer';
import FooterMobile from '@components/modules/footer/FooterMobile';
import isMobileDevice from '@helpers/isMobile';
import { wrapper } from '@redux/store';
import '@styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
const isMobile = isMobileDevice();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div id='side-main'>
				{isMobile ? <MenuMobile /> : null}
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default wrapper.withRedux(appWithTranslation(MyApp));
