import { RootState } from '@redux/store';
import SvgStar from '@svgs/Star';
import SectionTitle from '@utils/components/SectionTitle';
import SVGIcon from '@utils/components/SVGIcon';
import { Space } from 'antd';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import NewsHighLight from './NewsHighLight';
import ZodiacHighlight from './ZodiacHighlight';
import SelfDevelopmentHighLight from './SelfDevelopmentHighLight';
import SexAndLoveHighlight from './SexAndLove';

const NewsFeed = () => {
	const { zodiacHighlight, highlightNews, selfDevelopmentHighlight, sexAndLoveHighlight } = useSelector((state: RootState) => state.home);
	const { t } = useTranslation('home');

	return (
		<div>
			<React.Fragment>
				{selfDevelopmentHighlight || sexAndLoveHighlight || highlightNews || zodiacHighlight ? (
					<SectionTitle icon={<SvgStar />} title={t("section_title.story_feed")} />) : null}
				<Space style={{ width: "100%", marginBottom: "40px" }} size={60} direction="vertical">
					<ZodiacHighlight />
					<NewsHighLight />
					<SelfDevelopmentHighLight />
					<SexAndLoveHighlight />
				</Space>
			</React.Fragment>
		</div>
	);
};

export default NewsFeed;