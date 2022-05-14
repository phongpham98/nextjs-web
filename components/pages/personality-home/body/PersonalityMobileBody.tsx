import HrLine from '@utils/components/HrLine';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import PersonalityDifference from '../personality-difference/PersonalityDifference';
import Criteria from './Criteria';
import { TheDefferentText } from './PersonalityBodyStyled';

interface IPersonalityMobileBodyProps {
}

const PersonalityMobileBody: React.FunctionComponent<IPersonalityMobileBodyProps> = (props) => {
	const { t } = useTranslation('personality-home');
	return (
		<React.Fragment>
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<Criteria />
					<HrLine margin='0' />
					<TheDefferentText>
						{t("different_type")}
					</TheDefferentText>
					<PersonalityDifference />
				</Space>
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default PersonalityMobileBody;
