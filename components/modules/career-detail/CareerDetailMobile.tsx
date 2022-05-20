import JobMobile from '@components/pages/career-detail/content/JobMobile';
import { CareerDetailTitleWrapper, CareerSubTitleText } from '@components/pages/career-detail/header/CareerDetailHeaderStyled';
import { TitleTexth1 } from '@components/pages/career/header/CareerHeaderStyled';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
import LazyLoad from 'react-lazyload';
import jobBanner from '../../../assets/images/mobile/banner/jobs.jpg';

interface ICareerDetailProps {
}

const CareerDetail: React.FunctionComponent<ICareerDetailProps> = (props) => {
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage src={'/jobs.jpg'} alt="job at fika" />
				</GeneralImageWrapper>
				<CareerDetailTitleWrapper>
					<TitleTexth1 color="black">
						join us
					</TitleTexth1>
					<CareerSubTitleText color="black">
						We love passionate people who relish a challenge to join us and help drive success for the company and our clients.
					</CareerSubTitleText>
				</CareerDetailTitleWrapper>

			</GeneralHeaderMobileContainer>
			<JobMobile />
		</React.Fragment>
	)
};

export default CareerDetail;
