/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import AboutMobileContent from '@components/pages/about-fika/about-fkia-content/AboutMobileContent';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { HeaderMobileContent, HeaderTitle, SubTitle } from './AboutFikaMobileStyled';
interface IAboutFikaMobileProps {
}

const AboutFikaMobile: React.FunctionComponent<IAboutFikaMobileProps> = (props) => {
	const { t } = useTranslation('about-fika');
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage width='412' height='412' src={'/about-fka.jpg'} alt="about fika" />
				</GeneralImageWrapper>
				<HeaderMobileContent>
					<HeaderTitle>
						The female-focused
						<br />
						AI social & dating app
					</HeaderTitle>
					<SubTitle>
						{t("header")}
					</SubTitle>
				</HeaderMobileContent>
			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom hasSearchFirst={true} />
			<AboutMobileContent />
		</React.Fragment>
	)
};

export default AboutFikaMobile;
