import { QuizResultItem, Trait } from '@interfaces/model';
import { getQuiz } from '@redux/slices/quiz';
import { RootState } from '@redux/store';
import { Col, Row, Space } from 'antd';
import { easeQuadInOut } from "d3-ease";
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import AnimatedProgressProvider from '../animated-progress-bar/AnimatedProgressProvider';
import TraitComparision from '../trait-comparison/TraitComparision';
import { TraitContainer, TraitExplaination, TraitName, TraitType, TypeDetailContainer } from './TypeDetailStyled';

export const getTrailColor = (type: Trait | string) => {
	switch (type) {
		case "Mind": {
			return "#00D2EB";
		}
		case "Energy":
			return "#FF99CC";
		case "Nature":
			return "#FFC322";
		case "Tactics":
			return "#67D75B";
		default: return "#000";
	}
}

export const getBiggerValue = (a: QuizResultItem, b: QuizResultItem) => {
	if (a && b)
		if (a.value > b.value)
			return a;
	return b;
}


const TypeDetail = () => {
	const mobile = useMediaQuery({ query: '(max-width: 767px)' });
	const { user_results } = useSelector((state: RootState) => state.quiz);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getQuiz());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<TypeDetailContainer>
			<Space style={{ width: "100%" }} size={mobile ? 20 : 60} direction="vertical">
				{user_results ? <Row justify="space-between" align="middle">
					{user_results.map((result, idx) => {
						let trait = getBiggerValue(result.results[0], result.results[1]);
						if (trait) {
							return (
								<Col xs={5} sm={4} key={idx}>
									<TraitContainer>
										<AnimatedProgressProvider
											valueStart={0}
											valueEnd={Math.round(trait.value * 100)}
											duration={2}
											easingFunction={easeQuadInOut}
										>
											{(value = trait.value * 100) => {
												const roundedValue = Math.round(value);
												return (
													<CircularProgressbar
														value={value}
														strokeWidth={4}
														text={`${roundedValue}%`}
														styles={buildStyles({
															pathTransition: "none",
															strokeLinecap: "round",
															textSize: mobile ? "1.5rem" : "16px",
															pathColor: getTrailColor(result.type),
															textColor: getTrailColor(result.type),
															trailColor: '#EDEDED',
														})}
													/>
												);
											}}
										</AnimatedProgressProvider>
										<TraitName color={getTrailColor(result.type)}>
											{result.type_name}
										</TraitName>
										<TraitType>
											{trait.key_name}
										</TraitType>
									</TraitContainer>
								</Col>
							)
						} else return null;
					})}
				</Row> : null}
				{user_results ? user_results.map(trait => {
					return (
						<TraitExplaination key={trait.type_key}>
							<TraitComparision trait={trait} />
						</TraitExplaination>
					)
				}) : null}
			</Space>
		</TypeDetailContainer>
	);
};

export default TypeDetail;