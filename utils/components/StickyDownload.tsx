import i18next from 'i18next';
import React from 'react';
import appStore from '@public/app-store-icon.png';
import playStore from '@public/play-store-icon.png';
import { Caption, DownloadText, StickDownloadLink, StickyDownloadContainer } from './StickyDownloadStyled';

const StickyDownload = () => {

	return (
		<StickyDownloadContainer id="social-float">
			<Caption>{i18next.language === "en" ? "download fika" : "tải fika"}</Caption>
			<a aria-label={'download fika'} onClick={() => {
			}} href="https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US" rel="noreferrer nofollow" target="_blank" >
				<StickDownloadLink>
					<img width='20' height='20' src={playStore.src} alt="download" />
					<DownloadText >google play</DownloadText>
				</StickDownloadLink>
			</a>
			<a aria-label={'download fika'} onClick={() => {
			}} href="https://apps.apple.com/app/id1528449006?mt=8" rel="noreferrer nofollow" target="_blank" >
				<StickDownloadLink style={{ borderBottom: 0 }}>
					<img width='20' height='20' src={appStore.src} alt="download" />
					<DownloadText >app store</DownloadText>
				</StickDownloadLink>
			</a>
		</StickyDownloadContainer>
	);
};

export default StickyDownload;