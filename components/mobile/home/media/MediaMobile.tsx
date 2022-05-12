import YoutubePlayer from '@components/home/youtube/YoutubePalyer';
import { homepage } from '@configs/general';
import { clickVideoYoutube } from '@helpers/customGTM';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { ButtonDisContainer } from '../discover/DiscoverMobileStyled';
import { MediaMobileContainer, MediaMobileDescription } from './MediaMobileStyled';
interface IMediaMobileProps {
}

const MediaMobile: React.FunctionComponent<IMediaMobileProps> = (props) => {
	const { t } = useTranslation(['home', 'button']);
	return (
		<MediaMobileContainer>
			<YoutubePlayer onClick={() => {
				clickVideoYoutube('TVC video - Homepage')
			}} id={homepage.youtube.id} title="Fika TVC video" />
			<MediaMobileDescription>
				<h1 onClick={() => window.open(homepage.youtube.link)}>{t("youtube.title")}</h1>
				<span className="detail-desc">
					{parse(t("youtube.description"))}
				</span>
			</MediaMobileDescription>
			<ButtonDisContainer>
				<FikaButtonMobile onClick={() => window.open(homepage.youtube.link)}>{t("view_youtube", { ns: 'button' })}</FikaButtonMobile>
			</ButtonDisContainer>
		</MediaMobileContainer>
	);
};

export default MediaMobile;
