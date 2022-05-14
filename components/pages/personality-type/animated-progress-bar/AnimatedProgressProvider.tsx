/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Animate } from 'react-move';

interface AnimatedProgressProviderProps {
	valueStart?: number;
	valueEnd?: number;
	repeat?: boolean;
	duration: number;
	easingFunction?: any;
	children?: any;
}

const AnimatedProgressProvider = (props: AnimatedProgressProviderProps) => {
	const [isAnimated, setIsAnimated] = useState<boolean>(false);

	useEffect(() => {
		setIsAnimated(!isAnimated);
	}, []);

	return (
		<Animate
			start={() => ({
				value: props.valueStart
			})}
			update={() => ({
				value: [
					isAnimated ? props.valueEnd : props.valueStart
				],
				timing: {
					duration: props.duration * 1000,
					ease: props.easingFunction
				}
			})}
		>
			{({ value }) => props.children(value)}
		</Animate>
	);
};

export default AnimatedProgressProvider;
