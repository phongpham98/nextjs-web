import { TraitCardModel } from '@interfaces/model';
import SvgRelationship from '@svgs/Relationship';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CardContainer, CardDescription, CardHeader, CardTitle, DisplayCard, SuitableContainer, Suitablet768ext } from './ExplainationCardStyled';
import SuitableCard from './SuitableCard';

const RelationshipCard = ({ suitable_list, text }: TraitCardModel) => {
	const { t } = useTranslation('personality-type');

	return (
		<CardContainer backgroundColor="#FFEDF6">
			<CardHeader>
				<SvgRelationship fontSize="2rem" />
				<CardTitle>
					{t('quiz_result.card.relationship')}
				</CardTitle>
			</CardHeader>
			<CardDescription>
				{text}
			</CardDescription>
			<SuitableContainer>
				<Suitablet768ext>
					{t('quiz_result.suitableText')}
				</Suitablet768ext>
				<DisplayCard>
					{suitable_list.map((item, idx) => {
						return <SuitableCard type="letter" item={item} key={idx} />
					})}
				</DisplayCard>
			</SuitableContainer>
		</CardContainer>
	);
};

export default RelationshipCard;