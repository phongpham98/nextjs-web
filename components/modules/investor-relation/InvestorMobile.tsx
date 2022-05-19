/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import InvestorContentMobile from '@components/pages/investor-relations/content/InvestorContentMobile';
import { InvestorHeaderContainer, InvestorHeaderDescriptionP, InvestorHeaderTitleH1 } from '@components/pages/investor-relations/header/InvestorHeaderStyled';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import { GeneralHeaderMobileContainer } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
interface IInvestorMobileProps {
}

const InvestorMobile: React.FunctionComponent<IInvestorMobileProps> = (props) => {
	const { t } = useTranslation('investor');
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<RenderSmoothNextImage src={'/banner-investor.jpg'} alt="fika investor" />
				<InvestorHeaderContainer>
					<InvestorHeaderTitleH1>
						{parse(t('title'))}
					</InvestorHeaderTitleH1>
					<InvestorHeaderDescriptionP>
						{t('description')}
					</InvestorHeaderDescriptionP>
				</InvestorHeaderContainer>
			</GeneralHeaderMobileContainer>
			<NavMobile hasSearchFirst={true} />
			<InvestorContentMobile />
		</React.Fragment>
	)
};

export default InvestorMobile;
