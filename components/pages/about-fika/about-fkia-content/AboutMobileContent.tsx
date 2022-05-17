import { clickDownloadEvent } from '@helpers/customGTM';
import DownloadFika from '@utils/components/DownloadFika';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import AbourFikaChart from '../chart/AbourFikaChart';
import FikaCoreValues from '../fika-core-values/FikaCoreValues';
import Reason from '../reason/Reason';

interface IAboutMobileContentProps {
}

const AboutMobileContent: React.FunctionComponent<IAboutMobileContentProps> = (props) => {
	return (
		<React.Fragment>
			<GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					<Reason />
					<DownloadFika onClick={() => clickDownloadEvent('About Fika')} />
					<LazyLoad debounce={300} height={300} offset={[-200, 0]}>
						<AbourFikaChart />
					</LazyLoad>
					<FikaCoreValues />
				</Space>
			</GeneralPaddingMobile>
		</React.Fragment>
	);
};

export default AboutMobileContent;
