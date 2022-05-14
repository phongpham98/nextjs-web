import HrLine from '@utils/components/HrLine';
import StickyDownload from '@utils/components/StickyDownload';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PersonalityDifference from '../personality-difference/PersonalityDifference';
import Criteria from './Criteria';
import { PersonalityBodyContainer, TheDefferentText } from './PersonalityBodyStyled';

const PersonalityBody = () => {
	const laptop1600 = useMediaQuery({ query: '(min-width: 1556px)' });
	const laptop1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const laptop1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const { t } = useTranslation('personality-home');

	return (
		<PersonalityBodyContainer>
			<div style={{ position: "absolute", height: "100%", top: "15px", left: "0px" }}>
				<StickyDownload />
			</div>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<Row justify="center">
					<Col span={laptop1600 ? 13 : laptop1440 ? 10 : laptop1024 ? 19 : 16}>
						<Criteria />
					</Col>
				</Row>
				<HrLine margin="20" />
				<TheDefferentText>
					{t("different_type")}
				</TheDefferentText>
				<div>
					<PersonalityDifference />
				</div>
			</Space>
		</PersonalityBodyContainer>
	);
};

export default PersonalityBody;