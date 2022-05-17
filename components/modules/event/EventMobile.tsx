/* eslint-disable react-hooks/exhaustive-deps */
import EventContentMobile from '@components/pages/event/content/EventContentMobile';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderMobileContainer, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { EventHeaderMobileContent, EventMobileSubTitle, EventMobileTitle } from './EventStyled';


interface IEventMoibleProps {
}

const EventMoible: React.FunctionComponent<IEventMoibleProps> = (props) => {
	const { t } = useTranslation('event');
	return (
		<React.Fragment>
			<GeneralHeaderMobileContainer>
				<GeneralImageWrapper>
					<RenderSmoothImage width='500' height='500' alt={"qna fika"} src={'/banner-event-mobile.png'} />
				</GeneralImageWrapper>
				<EventHeaderMobileContent>
					<EventMobileTitle>
						{t("header.title")}
					</EventMobileTitle>
					<EventMobileSubTitle>
						{parse(t("header.description"))}
					</EventMobileSubTitle>
				</EventHeaderMobileContent>
			</GeneralHeaderMobileContainer>
			<EventContentMobile />
		</React.Fragment>
	)
};

export default EventMoible;
