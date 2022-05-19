import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { SubTitleText, TitleText, TitleWrapper } from './AboutFikaHeaderStyled';

const AboutFikaHeader = () => {
	const { t } = useTranslation('about-fika');
	return (
		<GeneralHeaderWrapper>
			<GeneralImageWrapper>
				<RenderSmoothNextImage width='1500' height='400' src={'/about_banner.jpg'} alt={t("header")} />
			</GeneralImageWrapper>
			<TitleWrapper>
				<TitleText color="black">
					The female-focused
					<br />
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