/* eslint-disable react-hooks/exhaustive-deps */
import CareerContent from '@components/pages/career/content/CareerContent';
import CareerHeader from '@components/pages/career/header/CareerHeader';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';;
interface ICareerDesktopProps {
}

const CareerDesktop: React.FunctionComponent<ICareerDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<CareerHeader />
			<CareerContent />
		</GeneralContentWrapper>
	);
};

export default CareerDesktop;
