import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import FaqPopularQuestion from '@components/pages/faq/faq-popular-question/FaqPopularQuestion';
import SupportCentre from '@components/pages/faq/support-centre/SupportCentre';
import SvgQuestionRound from '@svgs/QuestionRound';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';

interface IFAQPageMobileProps {
}

const FAQPageMobile: React.FunctionComponent<IFAQPageMobileProps> = (props) => {
	const { t } = useTranslation('faq');
	return (
		<React.Fragment>
			<NavMobile hasMarginBottom hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={40} direction="vertical" >
					<div>
						<SectionTitle title={t('faqs.popular_question_title')} icon={<SvgQuestionRound />} />
						<FaqPopularQuestion />
					</div>
					<div>
						<SectionTitle title={t('faqs.support_centre_title')} icon={<SvgQuestionRound />} />
						<SupportCentre />
					</div>
				</Space>
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default FAQPageMobile;
