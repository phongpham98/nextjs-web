import { useTranslation } from 'next-i18next';
import React from 'react';
import { ReadMoreContainer } from './ReadMoreStyled';

interface ReadMoreProps {
	text?: string;
	onClick?: () => void;
}

const ReadMore = ({ text, onClick }: ReadMoreProps) => {
	const { t } = useTranslation('button');

	return (
		<ReadMoreContainer onClick={onClick}>
			{"<"}<span style={{ textDecoration: "underline" }}> {text ? text : t('read_more')} </span>{">"}
		</ReadMoreContainer>
	);
};

export default ReadMore;