import SvgPenAlt from '@svgs/PenAlt';
import React from 'react';
import { StickyContainer } from './StickySendStoryStyled';

const StickySendStory = ({ onClick }: any) => {

	return (
		<StickyContainer onClick={onClick}>
			send us your story
			<SvgPenAlt />
		</StickyContainer>
	);
};

export default StickySendStory;