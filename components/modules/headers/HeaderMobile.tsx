import SvgFacebookRound from '@svgs/FacebookRound';
import SvgInstagramRound from '@svgs/InstagramRound';
import SvgLinkedinRound from '@svgs/LinkedinRound';
import SvgTiktokRound from '@svgs/TiktokRound';
import SvgYoutubeRound from '@svgs/YoutubeRound';
import { GeneralImage } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
import { ConnectionIconMobile, HeaderHomeMobileContainer, HeaderMobileContent, MobileDownImage, MobileDownload, MobileIconConnection } from './HeaderMobileStyled';
interface IHeaderMobileProps {
}

const HeaderMobile: React.FunctionComponent<IHeaderMobileProps> = (props) => {
	return (
		<HeaderHomeMobileContainer>
			<GeneralImage src={'/banner-homepage-mobile.jpg'} alt="download fika" />
			<HeaderMobileContent>
				<MobileDownload>
					<MobileDownImage onClick={() => window.open("https://apps.apple.com/app/id1528449006?mt=8")} >
						<img src={'/app-store.png'} width='100' height='60' alt="" />
					</MobileDownImage>
					<MobileDownImage onClick={() => window.open("https://play.google.com/store/apps/details?id=com.meetai.dating.android&hl=en&gl=US")} >
						<img src={'/play-store.png'} width='100' height='60' alt="" />
					</MobileDownImage>
				</MobileDownload>
				<ConnectionIconMobile>
					<MobileIconConnection aria-label='contact us' rel="noreferrer nofollow" href="https://www.facebook.com/fikaconnects" target="_blank" >
						<SvgFacebookRound />
					</MobileIconConnection>
					<MobileIconConnection aria-label='contact us' rel="noreferrer nofollow" href="https://instagram.com/fikaconnects?utm_medium=copy_link" target="_blank">
						<SvgInstagramRound />
					</MobileIconConnection>
					<MobileIconConnection aria-label='contact us' rel="noreferrer nofollow" href="https://www.linkedin.com/company/keepfika/mycompany/" target="_blank">
						<SvgLinkedinRound />
					</MobileIconConnection>
					<MobileIconConnection aria-label='contact us' rel="noreferrer nofollow" href="https://www.youtube.com/channel/UCtmcZ0-sPoePSt74hWP2Jtg" target="_blank">
						<SvgYoutubeRound />
					</MobileIconConnection>
					<MobileIconConnection aria-label='contact us' rel="noreferrer nofollow" href="https://www.tiktok.com/@fikaconnects?" target="_blank">
						<SvgTiktokRound />
					</MobileIconConnection>
				</ConnectionIconMobile>

			</HeaderMobileContent>
		</HeaderHomeMobileContainer>
	);
};

export default HeaderMobile;
