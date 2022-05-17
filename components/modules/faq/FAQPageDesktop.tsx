import FaqPopularQuestion from '@components/pages/faq/faq-popular-question/FaqPopularQuestion';
import SupportCentre from '@components/pages/faq/support-centre/SupportCentre';
import SvgQuestionRound from '@svgs/QuestionRound';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { FaqContainer } from './FAQStyled';

interface IFAQPageDesktopProps {
}

const FAQPageDesktop: React.FunctionComponent<IFAQPageDesktopProps> = (props) => {
	const { t } = useTranslation('faq');
	return (
		<GeneralContentWrapper>
			<FaqContainer>
				<Space style={{ width: "100%" }} size={60} direction="vertical" >
					<div>
						<SectionTitle title={t('popular_question_title')} icon={<SvgQuestionRound />} />
						<FaqPopularQuestion />
					</div>
					{/* <FaqAskQuestion />

				<SendQaModal /> */}
					<div>
						<SectionTitle title={t('support_centre_title')} icon={<SvgQuestionRound />} />
						<SupportCentre />
					</div>
				</Space>
			</FaqContainer>
		</GeneralContentWrapper>
	);;
};

export default FAQPageDesktop;
