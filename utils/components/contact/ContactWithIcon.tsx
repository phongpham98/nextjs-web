import React from 'react';
import { ActionTitle, ContactArea, ContactInforContainer, ContactInforDetail, IconContainer } from './FikaContactStyled';

interface ContactWithIconProps {
	icon?: any;
	title?: string;
	detail: any;
	onClick?: () => void;
}

const ContactWithIcon = ({ icon, title, detail }: ContactWithIconProps) => {

	return (
		<ContactInforContainer>
			<IconContainer>
				{icon}
			</IconContainer>
			<ContactArea>
				<ActionTitle>
					{title}
				</ActionTitle>
				<ContactInforDetail>
					{detail}
				</ContactInforDetail>
			</ContactArea>
		</ContactInforContainer>
	);
};

export default ContactWithIcon;