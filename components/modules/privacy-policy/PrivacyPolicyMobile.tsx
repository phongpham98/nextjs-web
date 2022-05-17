/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { useSelector } from 'react-redux';
import banner from '../../assets/images/logo/privacy_policy_Eng_Viet_mobile.jpg';
import { Policy } from './PrivacyPolicyDesktop';
import { PrivacePolictyItemContent, PrivacePolictyItemTitle, PrivacyPolicyMobileText } from './PrivacyPolicyStyled';

interface IPrivacyPolicyMobileProps {
}

const PrivacyPolicyMobile: React.FunctionComponent<IPrivacyPolicyMobileProps> = (props) => {
	const { t } = useTranslation('policy');
	const list: Policy[] = t('detail', { returnObjects: true })
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage layout='fill' objectFit='cover' width='1500' height='537' src={'/privacy_policy_Eng_Viet_mobile.jpg'} alt="Privacy - Policy" />
				</GeneralImageWrapper>
			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom={true} hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<PrivacyPolicyMobileText>
					{parse(t('header_mobile'))}
				</PrivacyPolicyMobileText>
				{
					list.map(item => {
						return (
							<React.Fragment key={item.id}>
								<PrivacePolictyItemTitle>
									{item.title}
								</PrivacePolictyItemTitle>
								<PrivacePolictyItemContent>
									{parse(item.content)}
								</PrivacePolictyItemContent>
							</React.Fragment>
						)
					})
				}

			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default PrivacyPolicyMobile;
