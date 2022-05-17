import { SeeBtn, SeeJobButton } from '@components/modules/career/CareerMobileStyled';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import FikaContactMobile from '@components/pages/fika-team/contact/FikaContactMobile';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { ProfesstionalDevContainer, ProfesstionnalTextDiv, ReasonAnswer, ReasonContainer, ReasonTitle, SeeJoBtn } from './CareerContentStyled';
;
interface ICareerContentMobileProps {
}

const CareerContentMobile: React.FunctionComponent<ICareerContentMobileProps> = (props) => {
	const { t } = useTranslation(['career', 'button', 'routes']);
	const router = useRouter();
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<Space style={{ width: "100%" }} size={20} direction="vertical">
				<GeneralPaddingMobile>
					<GeneralHeaderMobileContainer>
						<GeneralImageWrapper>
							<RenderSmoothNextImage layout='fill' objectFit='contain' src={'/career-why.jpg'} alt="Why you'll love working at fika?" />
						</GeneralImageWrapper>
					</GeneralHeaderMobileContainer>
					<ReasonContainer>
						<ReasonTitle>{t('reason_title')}</ReasonTitle>
						<ReasonAnswer>{t('reason_desc')}</ReasonAnswer>
					</ReasonContainer>
					<SeeJobButton>
						<SeeJoBtn onClick={() => router.push(`/${t('job', { ns: 'routes' })}`)}>
							{t('see_job', { ns: 'button' })}
						</SeeJoBtn>
					</SeeJobButton>
				</GeneralPaddingMobile>
				<ProfesstionalDevContainer>
					<LazyLoad throttle={100} height={100} once>
						<img width={'100%'} src={'/1.jpg'} alt="professional develop fika" />
					</LazyLoad>
					<ProfesstionnalTextDiv>
						{t('professional_development')}
					</ProfesstionnalTextDiv>
				</ProfesstionalDevContainer>
				<GeneralPaddingMobile>
					<FikaContactMobile />
				</GeneralPaddingMobile>
			</Space>
		</React.Fragment>
	);
};

export default CareerContentMobile;
