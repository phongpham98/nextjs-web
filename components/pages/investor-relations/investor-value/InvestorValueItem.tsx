import * as React from 'react';
import { InvestorIconValue, InvestorTextValue, InvestorValueItemContainer, ValueItem } from './InvestorValueItemStyled';

interface IInvestorValueItemProps {
	icon: any;
	text: string;
}

const InvestorValueItem: React.FunctionComponent<IInvestorValueItemProps> = ({ icon, text }) => {
	return (
		<InvestorValueItemContainer>
			<ValueItem>
				<InvestorIconValue>
					{icon}
				</InvestorIconValue>
				<InvestorTextValue>
					{text}
				</InvestorTextValue>
			</ValueItem>
		</InvestorValueItemContainer>
	);
};

export default InvestorValueItem;
