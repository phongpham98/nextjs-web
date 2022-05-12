import { homepage } from '@configs/general';
import { clickVideoYoutube } from '@helpers/customGTM';
import SvgSmile from '@svgs/Smile';
import HrLine from '@utils/components/HrLine';
import SectionTitle from '@utils/components/SectionTitle';
import { useTranslation } from 'next-i18next';
import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import smile from '../../../../assets/svg-icon/smile.svg';
import YoutubePlayer from '../youtube/YoutubePalyer';
import { ActivitiesContainer, ActivitiesContent } from './ActivitiesStyled';

const Activities = () => {
	const { t } = useTranslation('home');

	return (
		<ActivitiesContainer>
			<SectionTitle border={true} icon={<SvgSmile />} title={t('section_title.activity')} />
			<ActivitiesContent>
				<YoutubePlayer onClick={() => {
					clickVideoYoutube('Activities Video - Homepage')
				}} id={homepage.activity_vid} title="Fika Activity Video" />
			</ActivitiesContent>
			{/* <ActivityContent /> */}
			<HrLine />
		</ActivitiesContainer>
	);
};

export default Activities;