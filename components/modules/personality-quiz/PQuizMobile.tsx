/* eslint-disable react-hooks/exhaustive-deps */
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import QuizBody from '@components/pages/personality-quiz/body/QuizBody';
import QuizHeader from '@components/pages/personality-quiz/header/QuizHeader';
import { doPersonalityTest } from '@helpers/customGTM';
import { getQuiz } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import { useTranslation } from 'next-i18next';
import React from 'react';;
import { useDispatch, useSelector } from 'react-redux';
interface IPQuizMoibleProps {
}

const PQuizMoible: React.FunctionComponent<IPQuizMoibleProps> = (props) => {
	const dispatch = useDispatch();
	const { questions } = useSelector((state: RootState) => state.quiz);
	React.useEffect(() => {
		let oldId = sessionStorage.getItem("session_id");
		if (!oldId) {
			let id = Math.random().toString(36).substr(2, 20) + '_' + Math.random().toString(36).substr(2, 20);
			sessionStorage.setItem('session_id', id);
		}
		dispatch(getQuiz());
		return () => {
			sessionStorage.removeItem("session_id");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		doPersonalityTest();
	}, []);

	React.useEffect(() => {
		window.addEventListener("beforeunload", (event: any) => {
			sessionStorage.removeItem("session_id");
		});
		return () => {
			window.removeEventListener("beforeunload", () => { });
		};
	}, []);
	return (
		<React.Fragment>
			<NavMobile hasSearchFirst={true} />
			<QuizHeader />
			{questions.length > 0 ? <QuizBody /> : null}
		</React.Fragment>
	)
};

export default PQuizMoible;
