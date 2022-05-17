import { RootState } from '@redux/store';
import { GeneralContentWrapper, GeneralImage } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { EventDetailTitleH1, EventHeaderContent } from './EventHeaderStyled';

interface IEventHeaderProps {
}

const EventHeader: React.FunctionComponent<IEventHeaderProps> = (props) => {

	const { event_detail } = useSelector((state: RootState) => state.event);
	return (
		event_detail ? (
			<GeneralContentWrapper>
				<GeneralImage src={event_detail.banner} alt={event_detail.link} />
				<EventHeaderContent>
					<EventDetailTitleH1>{event_detail.name}</EventDetailTitleH1>
				</EventHeaderContent>
			</GeneralContentWrapper>
		) : null
	);
};

export default EventHeader;
