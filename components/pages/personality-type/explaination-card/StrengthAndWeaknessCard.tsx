import SvgStregth from '@svgs/Stregth';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CardContainer, CardHeader, CardTitle } from './ExplainationCardStyled';
const splitTitle = (text: string) => {
	let t = text
	for (let i = 0; i < 4; i++) {
		if (i % 2 === 0) {
			t = t.replace("@", "<b>");
		} else {
			t = t.replace("@", "</b>");
		}

	}
	t = t.replace("\n\n", "<br />");
	return t;
}

interface Props {
	text: string;
}

const StrengthAndWeaknessCard = ({ text }: Props) => {

	const { t } = useTranslation('personality-type');
	return (
		<CardContainer backgroundColor="#EBEFFF">
			<CardHeader>
				<SvgStregth fontSize="2rem" />
				<CardTitle>
					{t('quiz_result.card.strength_weakness')}
				</CardTitle>
			</CardHeader>
			<div style={{ lineHeight: "1.8rem" }}>{parse(splitTitle(text))}</div>
		</CardContainer>
	);
};

export default StrengthAndWeaknessCard;