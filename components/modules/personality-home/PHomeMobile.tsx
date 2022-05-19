/* eslint-disable react-hooks/exhaustive-deps */
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import bannerEN from '@public/16banner-mobile.jpg';
import bannerVN from '@public/16banner-vn-mobile.jpg';
import { useRouter } from 'next/router';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import PersonalityMobileBody from '@components/pages/personality-home/body/PersonalityMobileBody';
import LazyLoad from 'react-lazyload';
import TookQuizBanner from '@components/pages/personality-home/people-took-quiz/TookQuizBanner';


interface IPHomeMobileProps {
}

const PHomeMobile: React.FunctionComponent<IPHomeMobileProps> = (props) => {
	const router = useRouter();
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothImage width='412' height='412' alt="" src={router.locale === "en" ? bannerEN.src : bannerVN.src} />
				</GeneralImageWrapper>
			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom={true} hasSearchFirst={true} />
			<PersonalityMobileBody />
			<LazyLoad offset={300} height={200}>
				<TookQuizBanner />
			</LazyLoad>
		</React.Fragment>
	)
};

export default PHomeMobile;
