import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import React from 'react';
import FeedContent from './FeedContent';
import { FeedContainer, FeedContentConatiner, FeedImage, FeedImageContainer, ImageWrapper } from './FeedStyled';

interface FeedProps {
	story: any;
	onClick: () => void;
	showDate?: boolean;
	url: string;
}

const Feed = ({ story, onClick, showDate, url }: FeedProps) => {
	return (
		<FeedContainer>
			<ImageWrapper>
				<FeedImageContainer>
					<FeedImage onClick={onClick}>
						<RenderSmoothImage width='500' height='350' src={'/16banner.jpg'} alt={story.title} />
					</FeedImage>
				</FeedImageContainer>
			</ImageWrapper>
			<FeedContentConatiner>
				<FeedContent url={url} showDate={showDate} onClick={onClick} bigTitle={true} story={story} />
			</FeedContentConatiner>
		</FeedContainer>
	);
};

export default Feed;