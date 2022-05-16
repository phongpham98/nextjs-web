import { Comment, CommentBlack, CommentLikeContainer } from '@components/mobile/story-feed/FeedTitleFirstStyled';
import { domain } from '@configs/api';
import SvgChatSquare from '@svgs/ChatSquare';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { CommentContainer, ShareComment, ShareContentContainer } from './ShareContentStyled';
import ShareFeedButtons from './ShareFeedButtons';

export interface ShareContentProps {
	story?: any;
	url: string;
	banner?: string;
	thumbnail?: string;
}

const ShareContent = ({  story, url }: ShareContentProps) => {
	const { t } = useTranslation('title');
	return (
		<ShareContentContainer>
			<span>{t("share")}:</span>
			<div className="share-footer">
				<ShareFeedButtons url={`${domain}${url}#${story.id}`} title={story.title ? story.title : story.name} />
				{/* {hasComment && (
					!isMobile ? (<ShareComment>
						<CommentContainer>
							<CommentBlack>
								<SvgChatSquare />
							</CommentBlack>
							<div>{story.comments} <span >Comments</span></div>
						</CommentContainer>
					</ShareComment>) : <div className="share-comment">
						<CommentLikeContainer>
							<Comment>
								<SvgChatSquare /> <span>{story.comments}</span>
							</Comment>
						</CommentLikeContainer>
					</div>) */}
					{/* } */}
			</div>
		</ShareContentContainer>
	);
};

export default ShareContent;