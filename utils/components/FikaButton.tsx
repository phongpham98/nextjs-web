import React from 'react';
import { FikaButtonContainer } from './FikaButtonStyled';
interface FikaButtonProps {
	name?: string;
	onClick?: any;
}

const FikaButton = ({ name, onClick }: FikaButtonProps) => {

	return (
		<FikaButtonContainer aria-label={name} onClick={onClick} >
			{name}
		</FikaButtonContainer>
	)
}

export default FikaButton;