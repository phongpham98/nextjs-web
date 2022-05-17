import FikaContact from '@components/pages/fika-team/contact/FikaContact';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { CareerContentContainer, ProfesstionalDevContainer, ProfesstionnalTextDiv, ReasonAnswer, ReasonContainer, ReasonTitle, SeeJoBtn, StickyButton } from './CareerContentStyled';
const CareerContent = () => {
	const { t } = useTranslation(['career', 'button']);
	const router = useRouter()
	return (
		<CareerContentContainer>
			<div style={{ position: 'absolute', top: "0%", height: "100%", left: "45%" }}>
				<StickyButton>
					<SeeJoBtn onClick={() => router.push(`/jobs`)}>{t('see_job', { ns: 'button' })}</SeeJoBtn>
				</StickyButton>
			</div>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<Row gutter={100}>
					<Col span={10}>
						<GeneralHeaderMobileContainer>
							<Image layout='fill' src={'/career-why.jpg'} alt="Fika is a female-focused dating app founded by two graduates from Europe’s top universities. With a strong background in mathematics, AI, finance." width={'100%'} />
						</GeneralHeaderMobileContainer>
					</Col>
					<Col span={14}>
						<ReasonContainer>
							<ReasonTitle>{t('reason_title')}</ReasonTitle>
							<ReasonAnswer>{t('reason_desc')}</ReasonAnswer>
						</ReasonContainer>
					</Col>
				</Row>


				<ProfesstionalDevContainer>
					<img
						// layout="fill"
						//  objectFit='cover'
						width={'100%'}
						src={'/1.jpg'}
						alt="fika career" />
					<ProfesstionnalTextDiv>
						{t('professional_development')}
					</ProfesstionnalTextDiv>
				</ProfesstionalDevContainer>
				<FikaContact />
			</Space>
		</CareerContentContainer>
	);
};

export default CareerContent;