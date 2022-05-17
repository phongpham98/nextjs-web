/* eslint-disable react-hooks/exhaustive-deps */
import InvestorContent from '@components/pages/investor-relations/content/InvestorContent';
import InvestorHeader from '@components/pages/investor-relations/header/InvestorHeader';
import SvgHomePage from '@svgs/HomePage';
import Link from 'next/link';
import * as React from 'react';
import { ContactContainer, ContactItem, IconMenu, InvestorContainer, NavBarInvestor, VerticalLogo } from './InvestorStyled';
interface IInvestorDesktopProps {
}

const InvestorDesktop: React.FunctionComponent<IInvestorDesktopProps> = (props) => {

	return (
		<React.Fragment>
			<InvestorContainer>
				<NavBarInvestor>
					<ContactContainer>
						<Link href={'/'}>
							<a>
								<IconMenu>
									<SvgHomePage />
								</IconMenu>
							</a>
						</Link>

						<ContactItem>
							+84944798739 <br />
							info@fikaconnects.com
						</ContactItem>
					</ContactContainer>
					<Link href={'/'}>
						<a>
							<VerticalLogo src={'/logo-neon-vertical.png'} alt="keep fika logo" />
						</a>
					</Link>
				</NavBarInvestor>
				<div style={{ flex: 1 }}>
					<InvestorHeader />
					<InvestorContent />
				</div>
			</InvestorContainer>
		</React.Fragment>
	);
};

export default InvestorDesktop;
