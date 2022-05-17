import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import Link from 'next/link';
import React from 'react';
import FeedContent, { HeadingTag } from './FeedContent';
import { FeedContainer, FeedContentConatiner, FeedImage, FeedImageContainer, ImageWrapper } from './FeedStyled';

interface FeedProps {
	story: any;
	showDate?: boolean;
	url: string;
}

const Feed = ({ story, showDate, url }: FeedProps) => {
	return (
		<FeedContainer>
			<ImageWrapper>
				<FeedImageContainer>
					<Link href={url}>
						<a>
							<FeedImage >
								<RenderSmoothImage
									width='500'
									height='350'
									
									src={'/16banner.jpg'}
									alt={story.title} />
							</FeedImage>
						</a>
					</Link>
				</FeedImageContainer>
			</ImageWrapper>
			<FeedContentConatiner>
				<FeedContent
					url={url}
					showDate={showDate}
					bigTitle={true}
					story={story}
					headingTag="h3"
				/>
			</FeedContentConatiner>
		</FeedContainer>
	);
};

export default Feed;