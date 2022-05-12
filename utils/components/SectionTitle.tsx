import React from 'react';
import { SectionTitleContainer, TitleText } from './SectionTitleStyled';

interface SectionTitleProps {
	icon?: any;
	title?: string;
	border?: boolean;
	marginBottom?: string;
}

const SectionTitle = ({ icon, title, border = false, marginBottom = "60" }: SectionTitleProps) => {

	return (
		<SectionTitleContainer border={border} marginBottom={marginBottom}>
			{icon}
			<TitleText>{title}</TitleText>
			{icon}
		</SectionTitleContainer>
	);
};

export default SectionTitle;