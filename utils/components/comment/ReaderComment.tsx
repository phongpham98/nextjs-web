import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderDateFollowLanguage } from '@helpers/renderDateFollowLanguage';
import { CommentModel } from '@interfaces/model';
import { getCommentsById, reset_reply, set_comment_replied, set_reply } from '@redux/slices/comment';
import { RootState } from '@redux/store';
import SvgClose from '@svgs/Close';
import { Avatar, Comment } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorWrapper, CommentContentWrapper, CommentDetail, DateWrapper, DeleteIcon, LikeShareWrapper, NameWrapper, ReaderCommentContainer, ReplyContainer, ReplyToText } from './ReaderCommentStyled';
interface Props {
	postId: string;
}

const ReaderComment = ({ postId }: Props) => {
	const { comments, commentReplied, isReply } = useSelector((state: RootState) => state.comment);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getCommentsById(postId))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId])

	const renderComment = (cmt: CommentModel) => {
		return (
			<Comment
				key={cmt.id}
				author={<AuthorWrapper>
					<DateWrapper>{renderDateFollowLanguage(cmt.created_at ? cmt.created_at : 0)}</DateWrapper>
					<NameWrapper>{cmt.name}</NameWrapper>
				</AuthorWrapper>}
				avatar={<Avatar src={'/avatar-author.png'} alt="fika" />}
				content={
					<CommentContentWrapper>
						<CommentDetail>{cmt.comments}</CommentDetail>
						<LikeShareWrapper>
							<FontAwesomeIcon onClick={() => {
								dispatch(set_reply(cmt.id));
								dispatch(set_comment_replied(cmt))
							}} style={{ cursor: "pointer" }} color="#6666FF" icon={faReply} />
							<span>
								{/* {checkLiked(cmt.id) ? <SvgHeartFill /> : <SvgHeartEmpty onClick={() => {
									dispatch(likeCommentById(cmt.id))
									saveLikeToSession(cmt.id);
								}} />} */}

								{cmt.liked}</span>
						</LikeShareWrapper>
					</CommentContentWrapper>
				}
			>
				{cmt.replies && cmt.replies.length > 0 ? cmt.replies.map(rep => {
					return (
						<Comment
							key={rep.id}
							author={<AuthorWrapper>
								<DateWrapper>{renderDateFollowLanguage(rep.created_at ? rep.created_at : 0)}</DateWrapper>
								<NameWrapper>{rep.name}</NameWrapper>
							</AuthorWrapper>}
							avatar={<Avatar src={'/avatar-author.png'} alt="fika-comment" />}
							content={
								<CommentContentWrapper>
									<CommentDetail>{rep.comments}</CommentDetail>
									<LikeShareWrapper>
										<FontAwesomeIcon onClick={() => {
											dispatch(set_reply(cmt.id));
											dispatch(set_comment_replied(cmt))
										}} style={{ cursor: "pointer" }} color="#6666FF" icon={faReply} />
										<span>
											{/* {checkLiked(rep.id) ? <SvgHeartFill /> : <SvgHeartEmpty onClick={() => {
												dispatch(likeCommentById(rep.id))
												saveLikeToSession(rep.id);
											}} />} */}
											{rep.liked}</span>
									</LikeShareWrapper>
								</CommentContentWrapper>
							}
						>
						</Comment>
					)
				}) : null}
			</Comment>
		)
	}

	return (
		<ReaderCommentContainer>
			{comments?.map((cmt, idx) => {
				return renderComment(cmt);
			})}
			{isReply ? <ReplyContainer>
				<ReplyToText>You are replying to <b>{commentReplied ? commentReplied.name : ''}</b>
					<DeleteIcon onClick={() => {
						dispatch(reset_reply());
					}}>
						<SvgClose />
					</DeleteIcon>
				</ReplyToText>

			</ReplyContainer> : null
			}
		</ReaderCommentContainer >
	);
};

export default ReaderComment;