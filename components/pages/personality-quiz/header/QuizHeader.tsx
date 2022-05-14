import React from 'react';
import { useSelector } from 'react-redux';
import { Description, PartText, ProgressbarQuiz, QuizHeaderContainer } from './QuizHeaderStyled';
import parse from 'html-react-parser';
import isMobileDevice from '@helpers/isMobile';
import { RootState } from '@redux/store';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ProgressBar from '../progress-bar/ProgressBar';
const getPercentage = (part: number | undefined) => {
	if (part === 1) {
		return 0;
	}
	if (part === 2) {
		return 25;
	}
	if (part === 3)
		return 50
	if (part === 4)
		return 75;
	return 0;

}

const QuizHeader = () => {
	const mobile = isMobileDevice()
	const { current_part } = useSelector((state: RootState) => state.quiz);
	const { t } = useTranslation('personality-quiz');
	const router = useRouter();
	if (mobile)
		return (
			<React.Fragment>
				<QuizHeaderContainer id="scroll" backgroundColor="#e1f0ff">
					<GeneralPaddingMobile>
						<PartText>{router.locale === "en" ? "part" : "Phần"} {current_part?.part_number}: <span style={{ color: "#c30564" }}>{current_part?.type}</span></PartText>
						<Description>
							{parse(t('part_text'))}
							<br />
							<span style={{ color: "#c30564" }}>{t('trait')}</span>

						</Description>
						<ProgressbarQuiz>
							<span>
								{getPercentage(current_part?.part_number)}%
							</span>
							<ProgressBar strokeWith={7} value={getPercentage(current_part?.part_number)} trailColor="white" color="#9AAEF6" />
						</ProgressbarQuiz>
					</GeneralPaddingMobile>
				</QuizHeaderContainer>
			</React.Fragment>
		)

	return (
		<QuizHeaderContainer backgroundColor="#e1f0ff">
			<PartText>{router.locale === "en" ? "part" : "Phần"} {current_part?.part_number}: <span style={{ color: "#c30564" }}>{current_part?.type}</span></PartText>
			<Description>
				{parse(t('part_text'))}
				<br />
				<span style={{ color: "#c30564" }}>{t('trait')}</span>

			</Description>
			<ProgressbarQuiz>
				<span id="scroll">
					{getPercentage(current_part?.part_number)}%</span><ProgressBar strokeWith={7} value={getPercentage(current_part?.part_number)} trailColor="white" color="#9AAEF6" />
			</ProgressbarQuiz>
		</QuizHeaderContainer>
	);
};

export default QuizHeader;