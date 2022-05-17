import SvgPersonCheck from '@svgs/PersonCheck';
import SvgPhoneVibrate from '@svgs/PhoneVibrate';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import GrowthRate from '../components/GrowthRate';
import TextItem from '../components/TechItem';
import { IntroductionContainer, IntroductionTitle } from './InvestorContentStyled';

interface IInvestorContentProps {
}

const InvestorContent: React.FunctionComponent<IInvestorContentProps> = (props) => {
	const { t } = useTranslation('investor');
	return (
		<React.Fragment>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<IntroductionContainer>
					<IntroductionTitle>
						{t('header')}
					</IntroductionTitle>
					<div>
						<Row gutter={20}>
							<Col span={12}>
								<TextItem icon={<SvgPersonCheck />} title={t('focus_on_female_title')} description={t('focus_on_female')} image={'/focus.png'} />
							</Col>
							<Col span={12}>
								<TextItem icon={<SvgPhoneVibrate />} title={t('ai_tech_title')} description={t('ai_tech')} image={'/tech.png'} />
							</Col>
						</Row>
					</div>
				</IntroductionContainer>
				<GrowthRate />
			</Space>
		</React.Fragment>
	);
};

export default InvestorContent;
