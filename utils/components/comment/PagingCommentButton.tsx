import React from 'react';
import { PagingBtn } from './BlogCommentStyled';

interface PagingBtnWrapperProps {
	label: string;
}

const PagingCommentButton = ({ label }: PagingBtnWrapperProps) => {

	return (
		<PagingBtn>{label}</PagingBtn>
	);
};

export default PagingCommentButton;