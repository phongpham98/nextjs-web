import React from 'react';
import { AvatarRoundProps } from './AvatarRound';
import { PersonalityTypeContainer } from './PersonalityTypeStyled';

const PersonalityType = ({ type, personality }: AvatarRoundProps) => {

	return (
		<PersonalityTypeContainer type={type}>
			{personality}
		</PersonalityTypeContainer>
	);
};

export default PersonalityType;