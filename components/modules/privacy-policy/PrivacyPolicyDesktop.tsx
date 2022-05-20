/* eslint-disable react-hooks/exhaustive-deps */
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralContentWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { PrivacePolictyItemContent, PrivacePolictyItemTitleH2, PrivacePolictyItemTitleH3, PrivacyPolicyBodyContainer, PrivacyPolicyHeaderContainer, PrivacyPolicyTextH1 } from './PrivacyPolicyStyled';

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
						<RenderSmoothNextImage src={'/privacy_policy_Eng_Viet_web.jpg'} alt="Privacy - Policy" />
					</GeneralImageWrapper>
				</PrivacyPolicyHeaderContainer>

				<PrivacyPolicyBodyContainer>
					<PrivacyPolicyTextH1>
						{parse(t('header'))}
					</PrivacyPolicyTextH1>
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
				</PrivacyPolicyBodyContainer>
			</GeneralContentWrapper>
		</React.Fragment>
	);
};

export default PrivacyPolicyDesktop;
