import { BackgroundDiv, EventImageContainer, EventItem, EventTitleH4 } from '@components/pages/event/content/EventContentStyled';
import { EventSubTitleP } from '@components/pages/event/header/EventHeaderStyled';
import { getAllEvents } from '@redux/slices/event';
import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import SectionTitle from '@utils/components/SectionTitle';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Col, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { MoreEventContainer } from './MoreEventStyled';

interface IMoreEventsProps {
}

const MoreEvents: React.FunctionComponent<IMoreEventsProps> = (props) => {
	const { events, event_detail } = useSelector((state: RootState) => state.event);
	const dispatch = useDispatch();
	const { t } = useTranslation(['routes', 'common']);
	React.useEffect(() => {
		if (event_detail) {
			dispatch(getAllEvents(event_detail.id));
		} else {
			dispatch(getAllEvents());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [event_detail])
	return (
		<MoreEventContainer>
			{events && events.length > 0 ? <SectionTitle title='More Events' /> : null}
			<Row justify="center" gutter={[50, 40]}>
				{events?.slice(0, 3)?.map((event, idx) => {
					return (
						<Col key={idx} xs={24} sm={8}>
							<div style={{ height: "100%", position: "relative" }}>
								<EventItem hasPaddingTop={false}>
									<EventImageContainer>
										<LazyLoad throttle={100} height={100} once>
											<Link href={`/${t('event')}/` + event.link}>
												<a>
													<GeneralImageWrapper>
														<RenderSmoothImage width='436' height='327' src={event.thumbnail ? event.thumbnail : ''} alt={event.name ? event.name : ''} />
													</GeneralImageWrapper>
												</a>
											</Link>
										</LazyLoad>
										<BackgroundDiv></BackgroundDiv>
									</EventImageContainer>
									<Link href={`/${t('event')}/` + event.link}>
										<a>
											<EventTitleH4>
												{event.name}
											</EventTitleH4>
										</a>
									</Link>
									<EventSubTitleP>{event.short_description}</EventSubTitleP>
								</EventItem>
							</div>
						</Col>
					);
				})}
			</Row>
		</MoreEventContainer>
	);
};

export default MoreEvents;
