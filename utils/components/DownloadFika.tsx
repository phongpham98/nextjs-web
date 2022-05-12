import { getMobileOperatingSystem } from '@helpers/detectMobilePlatform';
import SvgPointRightFill from '@svgs/PointRightFill';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { isMobile } from 'react-device-detect';
import DownloadButton from './DownloadButton';
import { DownloadFikaContainer, DownloadFikaContent, DownloadGuideText, HandpointContainer } from './DownloadFikaStyled';
const download = {
	en: "EXPERIENCE THE BEST DATING APP, CLICK TO DOWNLOAD FIKA",
	vi: "TRẢI NGHIỆM NGAY APP HẸN HÒ PHIÊN BẢN TỐT NHẤT! ẤN ĐỂ TẢI FIKA",
}

interface IDownloadFikaProps {
	onClick: () => void;
}


const DownloadFika: React.FunctionComponent<IDownloadFikaProps> = ({ onClick }) => {
	const {t} = useTranslation('common')
	return (
		<DownloadFikaContainer >
			<DownloadFikaContent>
				<HandpointContainer>
					<SvgPointRightFill />
				</HandpointContainer>
				<DownloadGuideText>
					{t('download_fika')}
				</DownloadGuideText>
				<DownloadButton onClick={() => {
					onClick();
				}} href={getMobileOperatingSystem()}
					size={isMobile ? "small" : "medium"} />
			</DownloadFikaContent>
		</DownloadFikaContainer>
	);
};

export default DownloadFika;