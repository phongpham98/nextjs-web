/* eslint-disable react-hooks/exhaustive-deps */
import EventContent from '@components/pages/event/content/EventContent';
import EventHeader from '@components/pages/event/header/EventHeader';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import * as React from 'react';


interface IEventDesktopProps {
}

const EventDesktop: React.FunctionComponent<IEventDesktopProps> = (props) => {
	return (
		<GeneralContentWrapper>
			<EventHeader />
			<EventContent />
		</GeneralContentWrapper>
	);
};

export default EventDesktop;
