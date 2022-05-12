import TopicSlider from '@components/home/topics/TopicSlider';
import ActivitiesMobile from '@components/mobile/home/activities/ActivitiesMobile';
import CategoryMobile from '@components/mobile/home/category/CategoryMobile';
import DiscoverBlogsMobile from '@components/mobile/home/discover-blogs/DiscoverBlogsMobile';
import DiscoverMobile from '@components/mobile/home/discover/DiscoverMobile';
import InstagramMobile from '@components/mobile/home/instagram/InstagramMobile';
import MediaMobile from '@components/mobile/home/media/MediaMobile';
import PodCastMobile from '@components/mobile/home/podcast/PodCastMobile';
import StoryFeedMobile from '@components/mobile/story-feed/StoryFeedMobile';
import NavMobile from '@components/NavBar/nav-mobile/NavMobile';
import { clickDownloadEvent } from '@helpers/customGTM';
import DownloadFika from '@utils/components/DownloadFika';
import HrLine from '@utils/components/HrLine';
import { Space } from 'antd';
import * as React from 'react';
import { HomePageMobileContainer, TopicMobile } from './HomepageMobileStyled';

interface IHomePageMobileProps {
}

const HomePageMobile: React.FunctionComponent<IHomePageMobileProps> = (props) => {

	return (<>
		<HomePageMobileContainer>
			<NavMobile hasMarginBottom hasSearchFirst={true} />
			<Space style={{ width: "100%" }} size={20} direction="vertical">
				<TopicMobile>
					<TopicSlider />
				</TopicMobile>
				<CategoryMobile />
				<DiscoverMobile />
				<MediaMobile />
				<HrLine margin="0" />
				<StoryFeedMobile />
				<TopicMobile>
					<DownloadFika onClick={() => clickDownloadEvent('Home Page - Mobile')} />
				</TopicMobile>
				<DiscoverBlogsMobile />
				<HrLine margin="0" />
				<ActivitiesMobile />
				<HrLine margin="0" />
				<PodCastMobile />
				<HrLine margin="0" />
				<InstagramMobile />
			</Space>
		</HomePageMobileContainer>
	</>
	);
};

export default HomePageMobile;
