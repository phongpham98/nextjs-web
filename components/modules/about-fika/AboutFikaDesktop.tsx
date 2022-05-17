/* eslint-disable react-hooks/exhaustive-deps */
import AboutFikaHeader from '@components/pages/about-fika/about-fika-header/AboutFikaHeader';
import AboutFikaContent from '@components/pages/about-fika/about-fkia-content/AboutFikaContent';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
interface IAboutFikaDesktopProps {
}

const AboutFikaDesktop: React.FunctionComponent<IAboutFikaDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<AboutFikaHeader />
			<AboutFikaContent />
		</GeneralContentWrapper>
	);
};

export default AboutFikaDesktop;
