/* eslint-disable react-hooks/exhaustive-deps */
import EventDetailContent from '@components/pages/event-detail/content/EventDetailContent';
import MoreEvents from '@components/pages/event-detail/more-events/MoreEvents';
import { getLatestBlogs } from '@redux/slices/blog';
import { getEventDetail } from '@redux/slices/event';
import { RootState } from '@redux/store';
import HrLine from '@utils/components/HrLine';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { ArticleContainer, ContentWrapper } from '@utils/styled-components/GeneralContentStyled';
import { GeneralContentWrapper, GeneralHeaderWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { Space } from 'antd';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
interface IEventDetailDesktopProps {
}

const EventDetailDesktop: React.FunctionComponent<IEventDetailDesktopProps> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { link } = router.query

	const { event_detail } = useSelector((state: RootState) => state.event);


	React.useEffect(() => {
		if (typeof link === 'string')
			dispatch(getEventDetail(link));
		dispatch(getLatestBlogs());
	}, [link]);

	return (
		<ArticleContainer>
			{event_detail ? <GeneralHeaderWrapper>
				<GeneralImageWrapper>
					<RenderSmoothImage src={event_detail.banner} alt={event_detail.link} />
				</GeneralImageWrapper>
			</GeneralHeaderWrapper> :
				<GeneralImageWrapper>
					<RenderSmoothImage src={''} alt={''} />
				</GeneralImageWrapper>}
			<Space style={{ width: "100%" }} size={60} direction="vertical">
				<EventDetailContent />
				<HrLine margin="30" />
				<LazyLoad>
					<MoreEvents />
				</LazyLoad>
			</Space>

		</ArticleContainer>
	);
};

export default EventDetailDesktop;
