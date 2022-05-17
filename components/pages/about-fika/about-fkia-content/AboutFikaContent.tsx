import { clickDownloadEvent } from '@helpers/customGTM';
import DownloadFika from '@utils/components/DownloadFika';
import { Space } from 'antd';
import React from 'react';
import LazyLoad from 'react-lazyload';
import AbourFikaChart from '../chart/AbourFikaChart';
import FikaCoreValues from '../fika-core-values/FikaCoreValues';
import Reason from '../reason/Reason';
import { AboutFikaContentContainer } from './AboutFikaContentStyled';

const AboutFikaContent = () => {

	return (
		<AboutFikaContentContainer>
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<Reason />
				<DownloadFika onClick={() => clickDownloadEvent('About Fika')} />
				<LazyLoad debounce={300} height={300} offset={[-200, 0]}>
					<AbourFikaChart />
				</LazyLoad>
				<FikaCoreValues />
			</Space>
		</AboutFikaContentContainer>
	);
};

export default AboutFikaContent;