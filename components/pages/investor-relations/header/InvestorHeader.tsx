import * as React from 'react';
import header from '../../../../assets/images/news/banner-investor.jpg';
import { HeaderContainer, InvestorHeaderContainer, InvestorHeaderDescriptionP, InvestorHeaderTitleH1 } from './InvestorHeaderStyled';
import parse from 'html-react-parser';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { useTranslation } from 'next-i18next';
interface IInvestorHeaderProps {
}

const InvestorHeader: React.FunctionComponent<IInvestorHeaderProps> = (props) => {
	const { t } = useTranslation('investor');
	return (
		<HeaderContainer>
			{/* <GeneralImage src={header} alt="fika investor" /> */}
			<GeneralImageWrapper>
				<RenderSmoothImage width='1920' height='600' src={'/banner-investor.jpg'} alt={'investor'} />
			</GeneralImageWrapper>
			<InvestorHeaderContainer>
				<InvestorHeaderTitleH1>
					{parse(t('title'))}
				</InvestorHeaderTitleH1>
				<InvestorHeaderDescriptionP>
					{t('description')}
				</InvestorHeaderDescriptionP>
			</InvestorHeaderContainer>
		</HeaderContainer>
	);
};

export default InvestorHeader;
