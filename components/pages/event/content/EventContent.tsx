/* eslint-disable react-hooks/exhaustive-deps */
import { clear, getAllEvents, update_query } from '@redux/slices/event';
import { RootState } from '@redux/store';
import InfiniteScrollPosts from '@utils/components/infinite-scroll-posts/InfiniteScrollPosts';
import RenderSmoothNextImage from '@utils/components/RenderSmoothNextImage';
import StickyDownload from '@utils/components/StickyDownload';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundDiv, EventContentContainer, EventImageContainer, EventItem, EventSubTitle, EventTitleH2 } from './EventContentStyled';

interface IEventContentProps {
}

const EventContent: React.FunctionComponent<IEventContentProps> = (props) => {
	const { t } = useTranslation(['routes']);
	const dispatch = useDispatch();
	const [hasMore, setHasMore] = React.useState<boolean>(true);
	const { events, total, query } = useSelector((state: RootState) => state.event);

	React.useEffect(() => {
		dispatch(clear());
		dispatch(getAllEvents());
	}, []);

	const fetchMoreData = () => {
		if (events.length >= total) {
			setHasMore(false);
			return
		}
		if (query) {
			const newQuery = { ...query, page: query?.page ? query.page + 1 : 1 }
			dispatch(update_query(newQuery));
			dispatch(getAllEvents());
		}
	};
	return (
		<EventContentContainer>
			<div style={{ position: "absolute", height: "100%", top: "20px", left: "70px" }}>
				<StickyDownload />
			</div>
			<InfiniteScrollPosts
				children={<Row style={{ marginBottom: "60px" }} gutter={[{ xs: 100, lg: 250 }, { xs: 80, lg: 150 }]}>
					{events.map((event, idx) => {
						return (
							<Col key={idx} span={12}>
								<div style={{ height: "100%", position: "relative" }}>
									<EventItem hasPaddingTop={idx % 2 === 0 ? false : true}>
										<EventImageContainer>
											<LazyLoad offset={300} throttle={100} height={100} once>
												<Link href={`/${t('event')}/` + event.link}>
													<a>
														<GeneralImageWrapper>
															<RenderSmoothNextImage  src={event.thumbnail ? event.thumbnail : ''} alt={event.name ? event.name : ''} />
														</GeneralImageWrapper>
													</a>
												</Link>
											</LazyLoad>
											<BackgroundDiv></BackgroundDiv>
										</EventImageContainer>
										<Link href={`/${t('event')}/` + event.link}>
											<a>
												<EventTitleH2>
													{event.name}
												</EventTitleH2>
											</a>
										</Link>

										<EventSubTitle>{event.short_description}</EventSubTitle>
									</EventItem>
								</div>
							</Col>
						);
					})}
				</Row>}
				fetchData={fetchMoreData}
				hasMore={hasMore}
				dataLength={events ? events.length : 0}
			/>
		</EventContentContainer>
	);
};

export default EventContent;
