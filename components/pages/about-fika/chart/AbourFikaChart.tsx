import React from 'react';
import GrowthArea from '../development/GrowthArea';
import { AbourFikaChartContainer, ChartImage } from './AboutFikaChartStyled';

const AbourFikaChart = () => {
	return (
		<AbourFikaChartContainer>
			<ChartImage width="100%" src={'/Vector.png'} alt="fika chart" />
			<GrowthArea />
		</AbourFikaChartContainer>
	);
};

export default AbourFikaChart;