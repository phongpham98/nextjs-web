import isMobileDevice from '@helpers/isMobile';
import { getPartQuestion } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import StickyDownload from '@utils/components/StickyDownload';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../question/Question';
import { QuizBodyContainer } from './QuizBodyStyled';
const QuizBody = () => {
	const mobile = isMobileDevice();
	const dispatch = useDispatch();
	const { current_part } = useSelector((state: RootState) => state.quiz);

	useEffect(() => {
		dispatch(getPartQuestion(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (current_part && current_part.part_number !== 1) {
			document.getElementById("scroll")?.scrollIntoView({
				behavior: 'smooth',
				inline: "start",
			});
		}
	}, [current_part])
	return (
		<QuizBodyContainer>
			{!mobile ? <div style={{ position: "absolute", height: "100%", top: "20px", left: "75px" }}>
				<StickyDownload />
			</div> : null}

			<div style={{ position: "absolute", height: "100%", top: "20px", right: mobile ? "10px" : "0px" }}>
				{/* <ProgressBarTest /> */}
			</div>
			{current_part?.items?.map(item => {
				return <Question key={item.question_id} question={item} />
			})}
		</QuizBodyContainer>
	);
};

export default QuizBody;