import 'animate.css';
import React from 'react';
import { AvatarImage, AvatarRoundContainer } from './MatchedAvatarStyled';
import PersonalityType from './PersonalityType';

export interface AvatarRoundProps {
	type: "male" | "female";
	personality?: string;
	image?: string;
}

const AvatarRound = ({ type, personality, image }: AvatarRoundProps) => {

	return (
		<div style={{ position: "relative" }}>
			<AvatarRoundContainer type={type}>
				<AvatarImage type={type}>
					<img width='170' height='170' src={image} alt="personality test" />
				</AvatarImage>
			</AvatarRoundContainer>
			<PersonalityType type={type} personality={personality} />
		</div>
	);
};

export default AvatarRound;