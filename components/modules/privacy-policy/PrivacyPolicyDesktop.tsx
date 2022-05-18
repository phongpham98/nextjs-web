/* eslint-disable react-hooks/exhaustive-deps */
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralContentWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { PrivacePolictyItemContent, PrivacePolictyItemTitle, PrivacyPolicyBodyContainer, PrivacyPolicyHeaderContainer, PrivacyPolicyText } from './PrivacyPolicyStyled';

export type Policy = {
	id: number,
	title: string,
	content: string
}

interface IPrivacyPolicyDesktopProps {
}

const PrivacyPolicyDesktop: React.FunctionComponent<IPrivacyPolicyDesktopProps> = (props) => {
	const { t } = useTranslation('policy');
	const [list, setList] = React.useState<Policy[]>([])
	React.useEffect(() => {
		setList(t('detail', { returnObjects: true }))
	}, [])
	return (
		<React.Fragment>
			<GeneralContentWrapper>
				<PrivacyPolicyHeaderContainer>
					<GeneralImageWrapper>
						<RenderSmoothNextImage layout='fill' objectFit='cover' width='1500' height='537' src={'/privacy_policy_Eng_Viet_web.jpg'} alt="Privacy - Policy" />
					</GeneralImageWrapper>
					{/* <PrivacyPolicyContent>
						<PrivacyPolicyText>
							{parse(t('privacy_policy.header'))}
						</PrivacyPolicyText>
					</PrivacyPolicyContent> */}
				</PrivacyPolicyHeaderContainer>

				<PrivacyPolicyBodyContainer>
					<PrivacyPolicyText>
						{parse(t('header'))}
					</PrivacyPolicyText>
					{
						list?.map(item => {
							return (
								<React.Fragment key={item.id}>
									<PrivacePolictyItemTitle className={item.id === 1 || item.id === 2 || item.id === 14 ? ' big-title' : ''} >
										{item.title}
									</PrivacePolictyItemTitle>
									<PrivacePolictyItemContent>
										{parse(item.content)}
									</PrivacePolictyItemContent>
								</React.Fragment>
							)
						})
					}
				</PrivacyPolicyBodyContainer>
			</GeneralContentWrapper>
		</React.Fragment>
	);
};

export default PrivacyPolicyDesktop;
