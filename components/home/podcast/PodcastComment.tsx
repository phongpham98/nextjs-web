import { Avatar } from 'antd';
import * as React from 'react';
import { CommentContainer, CommentContent, Commenter, CommentInfo, QuoteContainer } from './PodcastCommentStyled';
import avatar from '@public/avatar-author.png';
import SvgDoubleQuote from '@svgs/DoubleQuote';

interface IPodcastCommentProps {
	position: "left" | "right";
	name: string;
	content: string;
}

const PodcastComment: React.FunctionComponent<IPodcastCommentProps> = ({position, name, content}) => {
	return (
		<CommentContainer className={position}>
			<QuoteContainer>
				<SvgDoubleQuote color='#9C9C9C' />
			</QuoteContainer>
			<Avatar src={avatar.src} alt='podcast commenter' size={"large"} />
			<CommentInfo>
				<Commenter>{name}</Commenter>
				<CommentContent>{content}</CommentContent>
			</CommentInfo>
		</CommentContainer>
	);
};

export default PodcastComment;
