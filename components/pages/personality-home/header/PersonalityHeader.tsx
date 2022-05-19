import bannerEN from '@public/16banner.jpg';
import bannerVN from '@public/16bannerv.jpg';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useRouter } from 'next/router';
import React from 'react';
import { PeronslaityHomeHeaderContainer } from './PersonalityHeaderStyled';

const PersonalityHeader = () => {
	const router = useRouter()
	return (
		<PeronslaityHomeHeaderContainer>
			<GeneralImageWrapper>
				<RenderSmoothNextImage width='412' height='412' alt="fika personality quiz" src={router.locale === "vi" ? bannerVN.src : bannerEN.src} />
			</GeneralImageWrapper>
		</PeronslaityHomeHeaderContainer>
	);
};

export default PersonalityHeader;