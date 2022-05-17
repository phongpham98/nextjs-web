import CareerDetailContent from '@components/pages/career-detail/content/CareerDetailContent';
import CareerDetailHeader from '@components/pages/career-detail/header/CareerDetailHeader';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';

interface ICareerDetailDesktopProps {
}

const CareerDetailDesktop: React.FunctionComponent<ICareerDetailDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<CareerDetailHeader />
			<CareerDetailContent />
		</GeneralContentWrapper>
	);
};

export default CareerDetailDesktop;
