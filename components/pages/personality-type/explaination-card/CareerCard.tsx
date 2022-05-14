import { TraitCardModel } from '@interfaces/model';
import SvgCareer from '@svgs/Career';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { CardContainer, CardDescription, CardHeader, CardTitle, DisplayCard, SuitableContainer, Suitablet768ext } from './ExplainationCardStyled';
import SuitableCard from './SuitableCard';


const CareerCard = ({ suitable_list, text }: TraitCardModel) => {
	const { t } = useTranslation('personality-type');

	return (
		<CardContainer backgroundColor="#EBEFFF">
			<React.Fragment>
				<CardHeader>
					<SvgCareer fontSize="2rem" />
					<CardTitle>
						{t('quiz_result.card.career')}
					</CardTitle>
				</CardHeader>
				<CardDescription>
					{text}
				</CardDescription>
				<SuitableContainer>
					<Suitablet768ext>
						{t('quiz_result.suitableText')}:
					</Suitablet768ext>
					<DisplayCard>
						{suitable_list.map((item, idx) => {
							return <SuitableCard type="emoji" item={item} key={idx} />
						})}
					</DisplayCard>
				</SuitableContainer>
			</React.Fragment>

		</CardContainer>
	);
};

export default CareerCard;