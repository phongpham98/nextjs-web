import { getMobileOperatingSystem } from '@helpers/detectMobilePlatform';
import isMobileDevice from '@helpers/isMobile';
import { Space } from 'antd';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import FikaButton from '../FikaButton';
import { CountDownContainer, CountDownDescription, DownloadButton, LauchingText, StayTundText } from './CountDownStyled';
interface Props {
	description?: string;
}

const CountDown = ({ description }: Props) => {
	const mobile = isMobileDevice();
	const { t } = useTranslation('button');

	return (
		<CountDownContainer>
			<StayTundText>
				Stay tuned
			</StayTundText>
			<Space style={{ width: "100%" }} size={mobile ? 20 : 40} direction="vertical">
				<LauchingText>
					coming soon
				</LauchingText>
				{description ? <CountDownDescription>
					{parse(description)}
				</CountDownDescription> : null}
				<div>
					{mobile ? <a aria-label={t('download')} href={getMobileOperatingSystem()} ><FikaButton name={t('download')} /></a> : <DownloadButton href={getMobileOperatingSystem()} rel="noreferrer nofollow" target="_blank">
						download fika
					</DownloadButton>}

				</div>
			</Space>
		</CountDownContainer>
	);
};

export default CountDown;