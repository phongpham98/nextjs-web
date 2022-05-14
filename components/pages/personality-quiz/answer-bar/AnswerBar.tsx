import { sendAnswer } from '@redux/slices/quiz';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnswerBarContainer } from './AnswerBarStyled';
import LevelItem from './LevelItem';

interface Props {
	nextQuestion: () => void;
	question_id: string;
	disabled: boolean;
}

const AnswerBar = ({ nextQuestion, question_id, disabled }: Props) => {
	const [itemChosen, setItemChosen] = useState<number>(0);
	const dispatch = useDispatch();
	function onChooseAnswer(item: number) {
		dispatch(sendAnswer(item, question_id))
		nextQuestion();
		setItemChosen(item);
	}

	return (
		<AnswerBarContainer>
			{[-1, -0.9, -0.8, -0.7, - 0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((item, idx) => {
				return (
					<LevelItem disabled={disabled} key={idx} itemChosen={itemChosen} onClick={() => {
						if (!disabled)
							onChooseAnswer(item)
					}} item={item} />
				)
			})}
		</AnswerBarContainer>
	);
};

export default AnswerBar;