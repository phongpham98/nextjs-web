import $ from 'jquery';
import React, { useState } from 'react';
import { FaqAnswer, FaqItemContainer, FaqItemIconContainer, FaqItemTitle } from './FaqItemStyled';
import parse from 'html-react-parser';
import { PopularQuestion } from '@interfaces/model';
import SvgPlus from '@svgs/Plus';
import SvgMinus from '@svgs/Minus';

interface FaqItemProps {
	id: string;
}

const FaqItem = ({ answer, question, id }: FaqItemProps & PopularQuestion) => {
	const [open, setOpen] = useState<boolean>(false);
	const handleChangeTree = (): void => {
		setOpen(!open);
		if (!open) {
			$("#" + id).slideDown();
		} else {
			$("#" + id).slideUp();
		}
	}
	return (
		<FaqItemContainer>
			<div>
				<FaqItemTitle>
					{question}
				</FaqItemTitle>
				<FaqAnswer style={{ display: "none" }} id={id}>
					{parse(answer)}
				</FaqAnswer>
			</div>
			<FaqItemIconContainer onClick={handleChangeTree}>
				{!open ? <SvgPlus color="white" /> : <SvgMinus color="white" />}
			</FaqItemIconContainer>
		</FaqItemContainer>
	);
};

export default FaqItem;