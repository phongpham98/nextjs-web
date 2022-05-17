import React from 'react';
import { DevelopmentContainer, DevelopmentText, LineContainer, NumberContainer } from './DevelopmentStyled';
import CountUp from 'react-countup';
import SvgCircleSolid from '@svgs/CircleSolid';

interface DevelopmentProps {
	unit?: "k" | "#" | "M" | "%";
	number: number;
	typeText: string;
	style?: any;
}

const Development = ({ unit, number, typeText, style }: DevelopmentProps) => {

	return (
		<DevelopmentContainer style={style}>
			<NumberContainer>
				{unit === "k" ? <><CountUp
					end={number}
					duration={1.5}
					suffix="k+" /></> : unit === "M" ? <><CountUp
						end={number}
						duration={1.7}
						separator=" "
						decimals={1}
						decimal="." />M+</> : unit === "%" ? <><CountUp
							end={number}
							duration={1.7}
							decimal="." />%</> : <>#<CountUp
								end={number}
								duration={0.7} /></>}

			</NumberContainer>
			<SvgCircleSolid />
			<LineContainer
			>
				<img width="100%" src={'/Line.png'} alt={typeText} />
			</LineContainer>
			<DevelopmentText>{typeText}</DevelopmentText>
		</DevelopmentContainer>
	);
};

export default Development;