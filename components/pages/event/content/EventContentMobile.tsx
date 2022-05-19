/* eslint-disable react-hooks/exhaustive-deps */
import { ButtonDisContainer } from '@components/mobile/home/discover/DiscoverMobileStyled';
import NavMobile from '@components/navbar/nav-mobile/NavMobile';
import { clear, getAllEvents, update_query } from '@redux/slices/event';
import { RootState } from '@redux/store';
import FeedMobileLoading from '@utils/components/categories-tags/loading/FeedMobileLoading';
import FikaButtonMobile from '@utils/components/FikaButtonMobile';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper, GeneralPaddingMobile } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundDiv, EventImageContainer, EventItem, EventSubTitle, EventTitleH2 } from './EventContentStyled';

interface IEventContentMobileProps {
}

const EventContentMobile: React.FunctionComponent<IEventContentMobileProps> = (props) => {
	const { t } = useTranslation(['routes', 'button']);
	const dispatch = useDispatch();
	const { events, total, query } = useSelector((state: RootState) => state.event);

	React.useEffect(() => {
		dispatch(clear());
		dispatch(getAllEvents());
	}, []);

	const fetchMoreData = () => {
		if (query) {
			const newQuery = { ...query, page: query?.page ? query.page + 1 : 1 }
			dispatch(update_query(newQuery));
			dispatch(getAllEvents());
		}
	};

	const firstBlog = events && events.length > 0 ? events[0] : null;

	return (
		<React.Fragment>
			<NavMobile hasMarginBottom tags={firstBlog ? firstBlog.tags : []} isLoading={!firstBlog} />
			{events.length > 0 ? <GeneralPaddingMobile>
				<Space style={{ width: "100%" }} size={20} direction="vertical">
					{events.map((event, idx) => {
						return (
							<EventItem key={event.id}>
								<EventImageContainer>
									<LazyLoad offset={300} throttle={100} height={100} once>
										<Link href={`/${t('event')}/` + event.link}>
											<a>
												<GeneralImageWrapper>
													<RenderSmoothImage width='500' height='500' src={event.thumbnail} alt={event.name} />
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
						)
					})}

				</Space>
				{(events.length < total) && (<ButtonDisContainer>
					<FikaButtonMobile onClick={() => fetchMoreData()}>{t("view_more", { ns: 'button' })}</FikaButtonMobile>
				</ButtonDisContainer>)}
			</GeneralPaddingMobile> : <FeedMobileLoading />}
		</React.Fragment>
	);
};

export default EventContentMobile;
