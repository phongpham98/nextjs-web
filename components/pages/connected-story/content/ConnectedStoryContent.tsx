/* eslint-disable react-hooks/exhaustive-deps */
import { QueryModel } from '@interfaces/request';
import { clear, getConnectedStories, toggle_modal, update_query } from '@redux/slices/connectedStoriesSlice';
import { RootState } from '@redux/store';
import LoadingLoveStories from '@utils/components/categories-tags/loading/LoadingLoveStories';
import InfiniteScrollPosts from '@utils/components/infinite-scroll-posts/InfiniteScrollPosts';
import StickyDownload from '@utils/components/StickyDownload';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoveItem from '../item/LoveItem';
import StickySendStory from '../sticky-send-story/StickySendStory';
import { StoryContentContainer } from './ConnectedStoryContentStyled';


const ConnectedStoryContent = () => {

	const { stories, total, query } = useSelector((state: RootState) => state.loveStory);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [itemCenters, setItemCenters] = useState<number[]>([]);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const length = Math.ceil(stories.length / 3);
		let arr: number[] = [];
		for (let i = 0; i < length; i++) {
			arr.push(1 + 3 * i);
		}
		setItemCenters(arr)
	}, [stories])

	useEffect(() => {
		dispatch(clear());
		// if (state) {
		// 	dispatch(getConnectedStories(undefined, state.tags ? state.tags : []));
		// } else {
		dispatch(getConnectedStories());

		return () => {
		}
	}, []);
	const fetchMoreData = () => {
		if (stories.length >= total) {
			setHasMore(false);
			return
		}
		const newQuery: QueryModel = {
			limit: 6,
			page: query.page + 1,
		}
		dispatch(update_query(newQuery));
		// if (state) {
		// 	dispatch(getConnectedStories(undefined, state.tags ? state.tags : []));
		// } else {
		dispatch(getConnectedStories());

	};
	return (
		<StoryContentContainer>
			<div style={{ position: "absolute", height: "100%", top: "20px", left: "75px" }}>
				<StickyDownload />
			</div>
			<div style={{ position: "absolute", height: "100%", top: "20px", right: "0px" }}>
				<StickySendStory onClick={() => dispatch(toggle_modal())} />
			</div>
			{stories && stories.length > 0 ? <InfiniteScrollPosts
				children={<React.Fragment>
					<Row gutter={[{ xs: 50, sm: 80, lg: 150, xl: 200 }, 55]}>
						{stories.map((story, idx) => {
							return (
								<React.Fragment key={story.id}>
									<Col span={8}>
										{itemCenters.includes(idx) ? <div style={{ position: "relative" }}>
											<div style={{ position: "absolute", top: "20px", width: "100%" }}>
												<LoveItem story={story} />
											</div>
										</div> : <LoveItem story={story} />}

									</Col>
								</React.Fragment>
							)
						})}
					</Row>
				</React.Fragment>}
				fetchData={fetchMoreData}
				hasMore={hasMore}
				dataLength={stories ? stories.length : 0}
			/> : <React.Fragment>
				<LoadingLoveStories />
			</React.Fragment>}
		</StoryContentContainer>
	);
};

export default ConnectedStoryContent;