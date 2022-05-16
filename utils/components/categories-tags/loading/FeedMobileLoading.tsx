import { FeedMobileContainer, ImageFeedMobile } from '@components/mobile/story-feed/FeedMobileStyled';
import * as React from 'react';
import LoadingMoto from './LoadingMoto';

interface IFeedMobileLoadingProps {
}

const FeedMobileLoading: React.FunctionComponent<IFeedMobileLoadingProps> = (props) => {
	return (
		<FeedMobileContainer>
			<ImageFeedMobile>
			</ImageFeedMobile>
			<LoadingMoto/>
			<LoadingMoto/>
		</FeedMobileContainer>
	);
};

export default FeedMobileLoading;
