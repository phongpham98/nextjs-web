import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { SubTitleText, TitleText, TitleWrapper } from './AboutFikaHeaderStyled';

const AboutFikaHeader = () => {
	const { t } = useTranslation('about-fika');
	return (
		<GeneralHeaderWrapper>
			<LazyLoad throttle={100} height={100} once>
				<GeneralImageWrapper>
					<RenderSmoothImage width='1500' height='600' src={'/about_banner.jpg'} alt={t("header")} />
				</GeneralImageWrapper>
			</LazyLoad>
			<TitleWrapper>
				<TitleText color="black">
					The female-focused
				</TitleText>
				<TitleText color="black">
					AI social & dating app
				</TitleText>
				<SubTitleText color="black">
					{t("header")}
				</SubTitleText>
			</TitleWrapper>
		</GeneralHeaderWrapper>
	);
};

export default AboutFikaHeader;