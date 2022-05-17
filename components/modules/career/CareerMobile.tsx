/* eslint-disable react-hooks/exhaustive-deps */
import CareerContentMobile from '@components/pages/career/content/CareerContentMobile';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CareerHeaderContent, HeaderTitleH1, SubTitle } from './CareerMobileStyled';

interface ICareerMobileProps {
}

const CareerMobile: React.FunctionComponent<ICareerMobileProps> = (props) => {
	const { t } = useTranslation('career');
  return (
	<React.Fragment>
		<GeneralHeaderMobileContainer>
			<CareerHeaderContent>
				<HeaderTitleH1>
					Work
					<br />
					With us
				</HeaderTitleH1>
				<SubTitle>
					{parse(t('header_desc'))}
				</SubTitle>
			</CareerHeaderContent>
		</GeneralHeaderMobileContainer>
		<CareerContentMobile />
	</React.Fragment>
);
};

export default CareerMobile;
