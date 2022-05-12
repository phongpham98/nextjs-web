import parse from 'html-react-parser';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { ActivityContentContainer } from './ActivityContentStyled';

const ActivityContent = () => {
	const {t} = useTranslation('home');

	return (
		<ActivityContentContainer>
			<div>
				{parse(t('activity'))}
			</div>
			{/* <ActivityContentTitle>
				Fika’s Campus Brand Ambassador Program Season 3
			</ActivityContentTitle>
			<ActivityContentDesc>
				After two very successful seasons, in early September 2021 the Fika Campus Brand Ambassador program officially opened its third season with students from many different schools across the country.
			</ActivityContentDesc>
			<ActivitySubTitle>
				Maketing team
				<br />
				campus brand ambassador
			</ActivitySubTitle>
			<ReadMore text="VIEW MORE" /> */}
		</ActivityContentContainer>
	);
};

export default ActivityContent;