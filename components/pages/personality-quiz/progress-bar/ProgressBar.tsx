import isMobileDevice from '@helpers/isMobile';
import React from 'react';
import { Percentage, ProgressBarContainer } from './ProgressBarStyled';

export interface ProgressBarProps {
	value: number;
	float?: string;
	color?: string;
	trailColor?: string;
	strokeWith?: number;
}

const ProgressBar = ({ value, float = "left", color, trailColor, strokeWith = 10 }: ProgressBarProps) => {
	const mobile = isMobileDevice()

	return (
		<ProgressBarContainer trailColor={trailColor} strokeWith={mobile ? 5 : strokeWith} >
			<Percentage color={color} float={float} width={value}></Percentage>
		</ProgressBarContainer>
	);
};

export default ProgressBar;