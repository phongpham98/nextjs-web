import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralHeaderWrapper, GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import parse from 'html-react-parser';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { EventHeaderContent, EventHeaderTitleH1, EventSubTitleP } from './EventHeaderStyled';

const EventHeader = () => {
	const { t } = useTranslation('event');
	return (
		<GeneralHeaderWrapper>
			<GeneralImageWrapper>
				<RenderSmoothImage width='1920' height='600' src={'/event-banner.jpg'} alt={t("header.title")} />
			</GeneralImageWrapper>
			<EventHeaderContent>
				<EventHeaderTitleH1>{t("header.title")}</EventHeaderTitleH1>
				<EventSubTitleP>
					{parse(t("header.description"))}
				</EventSubTitleP>
			</EventHeaderContent>
		</GeneralHeaderWrapper>
	);
};

export default EventHeader;