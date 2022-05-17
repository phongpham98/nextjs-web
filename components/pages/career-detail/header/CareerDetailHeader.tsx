import { SubTitleText, TitleTexth1 } from '@components/pages/career/header/CareerHeaderStyled';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import { CareerDetailTitleWrapper } from './CareerDetailHeaderStyled';
const CareerDetailHeader = () => {

	return (
		<GeneralHeaderWrapper>

			{/* <GeneralImageWrapper> */}
			<RenderSmoothNextImage layout='fill' objectFit='cover' width='500' height='500' src={'/career-detail.jpg'} alt="We love passionate people who relish a challenge to join us and help drive success for the company and our clients." />
			{/* </GeneralImageWrapper> */}

			<CareerDetailTitleWrapper>
				<TitleTexth1 color="black">
					join us
				</TitleTexth1>
				<SubTitleText color="black">
					We love passionate people who relish a challenge to join us and help drive success for the company and our clients.
				</SubTitleText>
			</CareerDetailTitleWrapper>
		</GeneralHeaderWrapper>
	);
};

export default CareerDetailHeader;