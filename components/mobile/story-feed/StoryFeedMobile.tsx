import NewsHighLight from '@components/home/news-feed/NewsHighLight';
import SelfDevelopmentHighLight from '@components/home/news-feed/SelfDevelopmentHighLight';
import SexAndLoveHighlight from '@components/home/news-feed/SexAndLove';
import ZodiacHighlight from '@components/home/news-feed/ZodiacHighlight';
import SvgStar from '@svgs/Star';
import SectionTitle from '@utils/components/SectionTitle';
import { Space } from 'antd';
import * as React from 'react';
import { StoryFeedMobileContainer } from './StoryFeedMobileStyled';

interface IStoryFeedMobileProps {
}

const StoryFeedMobile: React.FunctionComponent<IStoryFeedMobileProps> = (props) => {
	return (
		<StoryFeedMobileContainer>
			<SectionTitle marginBottom="20" icon={<SvgStar />} title={"Story Feed"} />
			<Space style={{ width: "100%" }} size={30} direction="vertical">
				<ZodiacHighlight />
				<NewsHighLight />
				<SelfDevelopmentHighLight />
				<SexAndLoveHighlight />
			</Space>
		</StoryFeedMobileContainer>
	);
};

export default StoryFeedMobile;
