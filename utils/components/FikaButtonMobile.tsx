import * as React from 'react';
import { FikaButtonMobileContainer } from './FikaButtonStyled';

interface IFikaButtonMobileProps {
	name?: string;
	onClick?: any;
	className?: any;
}

const FikaButtonMobile: React.FunctionComponent<IFikaButtonMobileProps> = ({ className, onClick, children }) => {
	return (
		<FikaButtonMobileContainer className={className} onClick={onClick} >
			{children}
		</FikaButtonMobileContainer>
	);
};

export default FikaButtonMobile;
