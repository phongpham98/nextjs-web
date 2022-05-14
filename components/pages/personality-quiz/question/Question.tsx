import { QuizQuestion } from '@interfaces/model';
import { getPartQuestion, updatePart } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import LazyLoad from "react-lazyload";
import { useDispatch, useSelector } from 'react-redux';
import SliderBar from "../answer-bar/SliderBar";
import { AnswerContainer, Caption, ClickToChoose, DecistionContainer, ImageContainer, QuestionContainer, QuizDetailContainer } from './QuestionStyled';
interface QuestionProps {
	question: QuizQuestion;
}

const Question = ({ question }: QuestionProps) => {
	const dispatch = useDispatch();
	const { t } = useTranslation(['personality-quiz', 'routes']);
	const router = useRouter();
	const { current_part, part } = useSelector((state: RootState) => state.quiz);
	const nextQuestion = () => {

		if (question.question_number === current_part?.items.length) {
			if (current_part?.part_number === 4) {
				let resultID = sessionStorage.getItem("session_id");
				if (resultID)
					router.push(`/${t('personality', { ns: 'routes' })}/result/${resultID}`)
			} else {
				dispatch(getPartQuestion(part.next_part_number))
				dispatch(updatePart());
			}

		} else {
			// dispatch(updateCurrentQuestion(question.question_number + 1))
		}
	}
	const { current_question_number } = part;

	return (
		<QuestionContainer disabled={current_question_number < question.question_number} isDoing={current_question_number === question.question_number} className="question">
			<ImageContainer>
				<LazyLoad throttle={100} height={100} once>
					<img width={"100%"} src={question.image_url} alt={question.question} />
				</LazyLoad>
			</ImageContainer>
			<QuizDetailContainer>
				<Caption>
					{question.question}
				</Caption>
				<AnswerContainer>
					<SliderBar disabled={current_question_number < question.question_number} question_id={question.question_id} nextQuestion={nextQuestion} />
					{/* <AnswerBar disabled={current_question_number < question.question_number} question_id={question.question_id} nextQuestion={nextQuestion} /> */}
					<DecistionContainer>
						<span style={{ color: "#6666FF", width: "100px", textAlign: "start" }}>{t('option.disagree')}</span>
						<span style={{ color: "#61666D" }}>{t('option.neutral')}</span>
						<span style={{ color: "#EB539F", width: "100px", textAlign: "end" }}>{t('option.agree')}</span>
					</DecistionContainer>
					<ClickToChoose>
						{t('option.click_to_choose')}
					</ClickToChoose>
				</AnswerContainer>
			</QuizDetailContainer>
		</QuestionContainer>
	);
};

export default Question;