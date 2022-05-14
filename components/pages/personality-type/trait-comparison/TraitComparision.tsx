import ProgressBar from '@components/pages/personality-quiz/progress-bar/ProgressBar';
import currentLocale from '@helpers/getCurrentLocale';
import { Trait, UserResult } from '@interfaces/model';
import React from 'react';
import { getBiggerValue, getTrailColor } from '../type-detail/TypeDetail';
import { BarContainer, ComparisionContainer, Explaination, PercentageLeft, PercentageNumber, PercentageRight, TagLine, TraitCaption, TraitTitle } from './TraitComparisionStyled';


const getDescriptionOfTrait = (type: Trait) => {
	switch (type) {
		case "Mind": {
			return {
				en: "This trait determines how we interact with our environment.",
				vi: "'Tâm trí' sẽ giúp bạn khám phá cách thức mà bạn tương tác tốt nhất với xung quanh.",
			}
		}
		case "Energy":
			return {
				en: "This trait shows where we direct our mental energy.",
				vi: '"Năng lượng" sẽ thể hiện nơi chúng ta điều hướng sức mạnh trí não.'
			}
		case "Nature":
			return {
				en: "This trait determines how we make decisions and cope with emotions.",
				vi: '"Cảm nhận" thể hiện cách chúng ta ra quyết định cũng như điều hướng cảm xúc.',
			}
		case "Tactics":
			return {
				en: "This trait reflects our approach to work, planning and decision-making.",
				vi: '"Chiến lược" sẽ thể hiện cách bạn tiếp cận công việc, lên kế hoạch hay ra quyết định.',
			}
		default: return {
			en: "",
			vi: "",
		}
	}
}

export interface TraitComparisionProps {
	trait: UserResult;
}

const TraitComparision = ({ trait }: TraitComparisionProps) => {
	const barPercentage = getBiggerValue(trait.results[0], trait.results[1]);
	return (
		<ComparisionContainer>
			<TraitCaption color={getTrailColor(trait.type)}>
				{trait.type_name}
			</TraitCaption>
			<TagLine>
				{getDescriptionOfTrait(trait.type)[currentLocale()]}
			</TagLine>

			<Explaination>
				<PercentageLeft>
					<PercentageNumber color={trait.results[0].value * 100 > 50 ? getTrailColor(trait.type) : "#61666D"}>
						{Math.round(trait.results[0].value * 100)}%
					</PercentageNumber>
					<TraitTitle>
						{trait.results[0].key_name}
					</TraitTitle>
				</PercentageLeft>
				<BarContainer>
					<ProgressBar value={Math.round(barPercentage.value * 100)} float={trait.results[0].value * 100 > 50 ? "left" : "right"} color={getTrailColor(trait.type)} />
				</BarContainer>
				<PercentageRight>
					<PercentageNumber color={trait.results[1].value * 100 > 50 ? getTrailColor(trait.type) : "#61666D"}>
						{Math.round(trait.results[1].value * 100)}%
					</PercentageNumber>
					<TraitTitle>
						{trait.results[1].key_name}
					</TraitTitle>
				</PercentageRight>
			</Explaination>
		</ComparisionContainer>
	);
};

export default TraitComparision;