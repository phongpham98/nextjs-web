import FeedContent from '@components/home/news-feed/FeedContent';
import RenderSmoothImage from '@utils/components/RenderSmoothImage';
import { GeneralImageWrapper } from '@utils/styled-components/GeneralStyled';
import Link from 'next/link';
import * as React from 'react';
import { FeedMobileContainer, FeedMobileContent, ImageFeedMobile } from './FeedMobileStyled';

interface IFeedMobileProps {
	blog: any;
	showDate?: boolean;
	url: string;
}

const FeedMobile: React.FunctionComponent<IFeedMobileProps> = ({ blog, showDate, url }) => {
	return (
		<FeedMobileContainer>
			<Link href={url} >
				<a>
					<ImageFeedMobile >
						<GeneralImageWrapper>
							<RenderSmoothImage width='500' height='500' src={blog.thumbnail !== '' ? blog.thumbnail : '/16banner.jpg'} alt={blog.title} />
						</GeneralImageWrapper>
					</ImageFeedMobile>
				</a>
			</Link>
			<FeedMobileContent>
				<FeedContent
					url={url}
					bigTitle={true}
					story={blog}
					showDate={showDate}
				/>
			</FeedMobileContent>
		</FeedMobileContainer>
	);
};

export default FeedMobile;
