import SvgArrowRight from '@svgs/ArrowRight';
import React from 'react';
import { FaqItemIconContainer, FaqItemTitle, SupportCentreItemContainer } from '../faq-item/FaqItemStyled';
interface SupportCentreProps {
	onClick: any;
	title: string;
}

const SupportCentreItem = ({ title, onClick }: SupportCentreProps) => {
	return (
		<SupportCentreItemContainer>
			<FaqItemTitle>
				{title}
			</FaqItemTitle>
			<FaqItemIconContainer onClick={onClick}>
				<SvgArrowRight />
			</FaqItemIconContainer>
		</SupportCentreItemContainer>
	);
};

export default SupportCentreItem;