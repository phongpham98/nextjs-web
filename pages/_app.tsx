import MenuMobile from '@components/mobile/menu-mobile/MenuMobile';
import isMobileDevice from '@helpers/isMobile';
import { wrapper } from '@redux/store';
import '@styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
const isMobile = isMobileDevice();

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="/logo-fika.ico" />
				<meta content="article" property="og:type" />
				<meta property="og:site_name" content="Fika Connects" />
				<meta content="summary_large_image" property="twitter:card" />
			</Head>
			<GlobalStyle />
			<div id='side-main'>
				{isMobile ? <MenuMobile /> : null}
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default wrapper.withRedux(appWithTranslation(MyApp));
