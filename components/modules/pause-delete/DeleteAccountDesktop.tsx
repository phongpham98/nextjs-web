/* eslint-disable react-hooks/exhaustive-deps */
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralContentWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { PrivacyPolicyBodyContainer, PrivacyPolicyHeaderContainer } from '../privacy-policy/PrivacyPolicyStyled';
import { DeleteAccountTitle, StepCount, StepDetail } from './DeleteAccountStyled';
interface IDeleteAccountDesktopProps {
}

export type Step = {
	step: string
	step_title: string
	step_detail: string
}

const DeleteAccountDesktop: React.FunctionComponent<IDeleteAccountDesktopProps> = (props) => {
	const { t, i18n } = useTranslation('account');
	const [steps, setList] = React.useState<Step[]>([])
	React.useEffect(() => {
		setList(t('steps', { returnObjects: true }))
	}, [])

	return (
		<GeneralContentWrapper>
			<PrivacyPolicyHeaderContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage
						layout='fill'
						objectFit='cover'
						width='500'
						height='500'
						alt='Delete or Pause Fika Account'
						src={i18n.language === "en" ? '/delete_account_eng_web.jpg' : '/delete_account_Viet_web.jpg'} />
				</GeneralImageWrapper>
			</PrivacyPolicyHeaderContainer>
			<PrivacyPolicyBodyContainer>
				<DeleteAccountTitle>{t('title')}</DeleteAccountTitle>
				{steps?.map(s => {
					return (
						<React.Fragment key={s.step_title}>
							<StepCount>{s.step}: <span>{s.step_title}</span></StepCount>
							<StepDetail>{parse(s.step_detail)}</StepDetail>
						</React.Fragment>
					)
				})}
			</PrivacyPolicyBodyContainer>
		</GeneralContentWrapper>
	);
};

export default DeleteAccountDesktop;
