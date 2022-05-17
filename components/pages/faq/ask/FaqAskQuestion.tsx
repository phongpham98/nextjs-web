import { toggle_modal } from '@redux/slices/qna';
import FikaButton from '@utils/components/FikaButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DescriptionText, FaqAskQuestionContainer } from './FaqAskQuestionStyled';

const FaqAskQuestion = () => {
	const dispatch = useDispatch();
	return (
		<FaqAskQuestionContainer>

			<DescriptionText>
				Fika Team is here to answer all of your questions, don’t hesitate and let us know what is on your mind!
			</DescriptionText>
			<FikaButton onClick={() => dispatch(toggle_modal())} name="Ask us" />
		</FaqAskQuestionContainer>
	);
};

export default FaqAskQuestion;