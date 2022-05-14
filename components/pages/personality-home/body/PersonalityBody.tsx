import HrLine from '@utils/components/HrLine';
import StickyDownload from '@utils/components/StickyDownload';
import { Col, Row, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import PersonalityDifference from '../personality-difference/PersonalityDifference';
import Criteria from './Criteria';
import { PersonalityBodyContainer, TheDefferentText } from './PersonalityBodyStyled';

const PersonalityBody = () => {
	const { t } = useTranslation('personality-home');

	return (
		<PersonalityBodyContainer>
			<div style={{ position: "absolute", height: "100%", top: "15px", left: "0px" }}>
				<StickyDownload />
			</div>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<Row justify="center">
					<Col md={19} xs={16} lg={10} xl={13}>
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