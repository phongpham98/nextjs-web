import { useTranslation } from 'next-i18next';
import React from 'react';
import FaqItem from '../faq-item/FaqItem';
import { FaqGeneralContainer } from './FaqPopularQuestionStyled';

interface popular_question {
	question: string;
	answer: string;
}

const FaqPopularQuestion = () => {
	const { t } = useTranslation('faq');
	let questions: popular_question[] = t('popular_questions', { returnObjects: true });

	return (
		<FaqGeneralContainer>
			{questions.map((q, idx) => {
				return (
					<FaqItem id={"p" + idx} key={idx} answer={q.answer} question={q.question} />
				)
			})}
		</FaqGeneralContainer>
	);
};

export default FaqPopularQuestion;

