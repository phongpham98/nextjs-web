import { getCurrentUser } from '@redux/slices/authSlice';
import { wrapper } from '@redux/store';
import '@styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Router, { useRouter } from 'next/router';
import Footer from '@components/modules/footer/Footer';
import { isMobile } from 'react-device-detect';
import FooterMobile from '@components/modules/footer/FooterMobile';

function MyApp({ Component, pageProps }: AppProps) {
	const dispatch = useDispatch();
	// const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), []);

	// useEffect(() => {
	// 	Router.events.on("routeChangeComplete", resetWindowScrollPosition);

	// 	return () => {
	// 		Router.events.off("routeChangeComplete", resetWindowScrollPosition);
	// 	};
	// }, []);
	useEffect(() => {
		dispatch(getCurrentUser())
	}, []);
	return (
		<>
			<Component {...pageProps} />
			{isMobile ? <FooterMobile /> : <Footer />}
		</>
	)
}

export default wrapper.withRedux(appWithTranslation(MyApp));
