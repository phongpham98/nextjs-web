/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { Step } from './DeleteAccountDesktop';
import { StepCount, StepDetail } from './DeleteAccountStyled';
interface IDeleteAccountMobileProps {
}

const DeleteAccountMobile: React.FunctionComponent<IDeleteAccountMobileProps> = (props) => {
	const { t, i18n } = useTranslation('account');;
	const [steps, setList] = React.useState<Step[]>([])
	React.useEffect(() => {
		setList(t('steps', { returnObjects: true }))
	}, [])

	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothNextImage
						layout='fill'
						objectFit='cover'
						width='500'
						height='500'
						alt='Delete or Pause Fika Account'
						src={i18n.language === "en" ? '/banner_delete_account_eng_mobile.jpg' : '/banner_delete_account_viet_mobile.jpg'} />
				</GeneralImageWrapper>
			</GeneralHeaderMobileContainer>
			<NavMobile hasMarginBottom={true} hasSearchFirst={true} />
			<GeneralPaddingMobile>
				{steps.map(s => {
					return (
						<React.Fragment key={s.step_title}>
							<StepCount>{s.step}: <span>{s.step_title}</span></StepCount>
							<StepDetail>{parse(s.step_detail)}</StepDetail>
						</React.Fragment>
					)
				})}
			</GeneralPaddingMobile>
		</React.Fragment>
	)
};

export default DeleteAccountMobile;
