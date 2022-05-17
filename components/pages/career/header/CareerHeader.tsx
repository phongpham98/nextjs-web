import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CareerHeaderContainer, SubTitleText, TitleTexth1, TitleWrapper } from './CareerHeaderStyled';

const CareerHeader = () => {
	const { t } = useTranslation('career');
	return (
		<CareerHeaderContainer>
			<GeneralImageWrapper>
				<RenderSmoothNextImage layout='fill' objectFit='cover' width='1500' height='600' src={'/banner-career.jpg'} alt="FIKA is a private company whose values are grounded in creating the conditions for people to perform at their best and feel fulfilled and confident in their work." />
			</GeneralImageWrapper>
			<TitleWrapper>
				<TitleTexth1>
					{parse(t('header_title'))}
				</TitleTexth1>
				<SubTitleText>
					{parse(t('header_desc'))}
				</SubTitleText>
			</TitleWrapper>
		</CareerHeaderContainer>
	);
};

export default CareerHeader;