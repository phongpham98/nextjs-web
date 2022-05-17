/* eslint-disable react-hooks/exhaustive-deps */
import { ButtonDisContainer } from '@components/mobile/home/discover/DiscoverMobileStyled';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { PostRequest } from '@interfaces/posts';
import { clear, getConnectedStories, update_query } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoveItem from '../item/LoveItem';
import { StoryConentMobileContainer } from './ConnectedStoryContentMobileStyled';

interface ILoveStoryContentMobileProps {
}

const LoveStoryContentMobile: React.FunctionComponent<ILoveStoryContentMobileProps> = (props) => {
	const dispatch = useDispatch();
	const { stories, total, query } = useSelector((state: RootState) => state.loveStory);
	const { t } = useTranslation('button');

	React.useEffect(() => {
		dispatch(clear());
		// if (state)
		// 	dispatch(getConnectedStories(undefined, state.tags ? state.tags : []));
		// else
		dispatch(getConnectedStories());
		return () => {
		}
	}, []);

	const getMoreStory = () => {
		const newQuery: PostRequest = {
			page: query.page + 1,
		}
		dispatch(update_query(newQuery));
		// if (state)
		// 	dispatch(getConnectedStories(undefined, state.tags ? state.tags : []));
		// else
		dispatch(getConnectedStories());
	}
	const firstBlog = stories && stories.length > 0 ? stories[0] : null;


	return (
		<React.Fragment>
			<NavMobile hasMarginBottom tags={firstBlog ? firstBlog.tags : []} />
			{stories.length > 0 && <StoryConentMobileContainer>
				<Space style={{ width: "100%" }} size={20} direction="vertical">

					{stories.map((story, idx) => {
						return (
							<LoveItem key={story.id} story={story} />
						)
					})}

				</Space>
				{(stories.length < total) && (<ButtonDisContainer>
					<FikaButtonMobile onClick={() => getMoreStory()}>{t("view_more")}</FikaButtonMobile>
				</ButtonDisContainer>)}
			</StoryConentMobileContainer>}
		</React.Fragment>
	);
};

export default LoveStoryContentMobile;
