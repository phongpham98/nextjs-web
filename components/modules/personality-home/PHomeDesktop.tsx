/* eslint-disable react-hooks/exhaustive-deps */
import PersonalityBody from '@components/pages/personality-home/body/PersonalityBody';
import PersonalityHeader from '@components/pages/personality-home/header/PersonalityHeader';
import TookQuizBanner from '@components/pages/personality-home/people-took-quiz/TookQuizBanner';
import { GeneralContentWrapper } from '@utils/styled-components/GeneralStyled';
import React from 'react';
interface IPHomeDesktopProps {
}

const PHomeDesktop: React.FunctionComponent<IPHomeDesktopProps> = (props) => {
	return (
		<React.Fragment>
			<GeneralContentWrapper>
				<PersonalityHeader />
				<PersonalityBody />
			</GeneralContentWrapper>
			<TookQuizBanner />
		</React.Fragment>
	);
};

export default PHomeDesktop;
