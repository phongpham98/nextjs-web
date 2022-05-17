import React from 'react';
import { CoreIconContainer, CoreValueDetail, CoreValueItemContainer, CoreValueTitle } from './CoreValueItemStyled';
interface CoreValueItemProps {
	icon: any;
	title: any;
	description: any;
}

const CoreValueItem = ({ icon, title, description }: CoreValueItemProps) => {

	return (
		<CoreValueItemContainer>
			<CoreIconContainer>
				{icon}
			</CoreIconContainer>
			<CoreValueTitle>{title}</CoreValueTitle>
			<CoreValueDetail>{description}</CoreValueDetail>
		</CoreValueItemContainer>
	);
};

export default CoreValueItem;