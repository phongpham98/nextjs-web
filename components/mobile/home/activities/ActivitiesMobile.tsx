import { ActivitiesContent } from '@components/home/activities/ActivitiesStyled';
import YoutubePlayer from '@components/home/youtube/YoutubePalyer';
import { homepage } from '@configs/general';
import { clickVideoYoutube } from '@helpers/customGTM';
import SvgSmile from '@svgs/Smile';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
interface IActivitiesMobileProps {
}

const ActivitiesMobile: React.FunctionComponent<IActivitiesMobileProps> = (props) => {
	const {t} = useTranslation('home')
	return (
		<GeneralPaddingMobile>
			<div style={{ textAlign: "center" }}>
				<SectionTitle marginBottom="20" border={true} icon={<SvgSmile />} title={t('section_title.activity')} />
			</div>
			<ActivitiesContent>
				<YoutubePlayer onClick={() => {
					clickVideoYoutube('Activities Video - Homepage')
				}} id={homepage.activity_vid} title="Fika Activity Video" />
			</ActivitiesContent>
		</GeneralPaddingMobile>
	);
};

export default ActivitiesMobile;
