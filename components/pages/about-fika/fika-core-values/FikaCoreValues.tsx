import isMobileDevice from '@helpers/isMobile';
import SvgAuth from '@svgs/Auth';
import SvgCore from '@svgs/Core';
import SvgEmpower from '@svgs/Empower';
import SvgGrowth from '@svgs/Growth';
import SectionTitle from '@utils/components/SectionTitle';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import CoreValueItem from './CoreValueItem';
import { FikaCoreValueContainer } from './CoreValueItemStyled';

const FikaCoreValues = () => {
	const mobile = isMobileDevice();
	const { t } = useTranslation('about-fika');
	return (
		<FikaCoreValueContainer>
			<SectionTitle marginBottom="40" title="fika's core values" icon={<SvgCore />} />
			<Row justify="center" gutter={[mobile ? 0 : 40, 20]}>
				<Col xs={24} sm={8} xl={6}>
					<CoreValueItem icon={<SvgGrowth />} title={t("core_value.growth.title")} description={t("core_value.growth.description")} />
				</Col>
				<Col xs={24} sm={8} xl={6}>
					<CoreValueItem icon={<SvgAuth />} title={t("core_value.empower.title")} description={t("core_value.empower.description")} />
				</Col>
				<Col xs={24} sm={8} xl={6}>
					<CoreValueItem icon={<SvgEmpower />} title={t("core_value.auth.title")} description={t("core_value.auth.description")} />
				</Col>
			</Row>
		</FikaCoreValueContainer>
	);
};

export default FikaCoreValues;