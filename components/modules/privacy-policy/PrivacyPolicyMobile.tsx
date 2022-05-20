/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { Policy } from './PrivacyPolicyDesktop';
import { PrivacePolictyItemContent, PrivacePolictyItemTitleH2, PrivacePolictyItemTitleH3, PrivacyPolicyMobileText } from './PrivacyPolicyStyled';

interface IPrivacyPolicyMobileProps {
}

const PrivacyPolicyMobile: React.FunctionComponent<IPrivacyPolicyMobileProps> = (props) => {
	const { t } = useTranslation('policy');
	const [list, setList] = React.useState<Policy[]>([])
	React.useEffect(() => {
		setList(t('detail', { returnObjects: true }))
	}, [])
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage src={'/privacy_policy_Eng_Viet_mobile.jpg'} alt="Privacy - Policy" />
				</GeneralImageWrapper>
			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom={true} hasSearchFirst={true} />
			<GeneralPaddingMobile>
				<PrivacyPolicyMobileText>
					{parse(t('header_mobile'))}
				</PrivacyPolicyMobileText>
				{
					list?.map(item => {
						return (
							<React.Fragment key={item.id}>
								{item.id === 1 || item.id === 2 || item.id === 14 ?
									<PrivacePolictyItemTitleH2 className={' big-title'} >
										{item.title}
									</PrivacePolictyItemTitleH2> : <PrivacePolictyItemTitleH3 >
										{item.title}
									</PrivacePolictyItemTitleH3>}
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
