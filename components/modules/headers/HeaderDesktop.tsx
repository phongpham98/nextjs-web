import { colors } from '@configs/globalStyles';
import SvgLogoNeonHorizontal from '@svgs/LogoNeonHorizontalLowHigh';
import ConnectionIcons from '@utils/components/ConnectionIcons';
import * as React from 'react';
import { AppContainer, AppImage, DownloadArea, DownloadHomeContainer, LogoContainer, QRCodeContainer, QrCodeImage, Title } from './HeaderStyled';

interface IHeaderDesktopProps {
}

const HeaderDesktop: React.FunctionComponent<IHeaderDesktopProps> = (props) => {
	return (
		<React.Fragment>
			<img width='100%' src={'/banner-homepage.jpg'} alt="download fika" />
			{/* <RenderSmoothImage width='1920' height='600' src={'/banner-homepage.jpg'} alt="fikaconnects" /> */}
			<DownloadHomeContainer>
				<LogoContainer>
					<SvgLogoNeonHorizontal />
				</LogoContainer>
				<Title>
					The female-focused <br />AI social & dating app
				</Title>
				<DownloadArea >
					<QRCodeContainer>
						<QrCodeImage width={'100'} height='100' src={'/QR_code.png'} alt="download fika" />
					</QRCodeContainer>
					<AppContainer>
						<a aria-label={'download fika'} href="https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US" target="_blank" rel="noreferrer nofollow">
							<AppImage>
								<img width='100%' src={'/play-store.png'} alt="download fika" />
							</AppImage>
						</a>
						<a aria-label={'download fika'} href="https://apps.apple.com/app/id1528449006?mt=8" rel="noreferrer nofollow" target="_blank" >
							<AppImage>
								<img width='100' height='50' src={'/app-store.png'} alt="download fika" />
							</AppImage>
						</a>
					</AppContainer>
				</DownloadArea>
				<ConnectionIcons backgroundColor={colors.primary} />
			</DownloadHomeContainer>
		</React.Fragment>
	);
};

export default HeaderDesktop;
