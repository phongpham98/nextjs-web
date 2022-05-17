/* eslint-disable react-hooks/exhaustive-deps */
import { getLatestBlogs } from '@redux/slices/blog';
import { getEventDetail } from '@redux/slices/event';
import { RootState } from '@redux/store';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IEventDetailMobileProps {
}

const EventDetailMobile: React.FunctionComponent<IEventDetailMobileProps> = (props) => {
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
		<React.Fragment>
			{event_detail ?
				<GeneralHeaderMobileContainer>
					<GeneralImageWrapper>
						<RenderSmoothImage width='500' height='500' alt={event_detail.name} src={event_detail.thumbnail} />
					</GeneralImageWrapper>
				</GeneralHeaderMobileContainer>
				: null}
			<EventDetailMobile />
		</React.Fragment>
	)
};

export default EventDetailMobile;
