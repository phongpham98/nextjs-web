import React from 'react';
import { DivContainer } from './SingleCommentStyled';

interface SingleComentProps {
	comment?: Comment;
}

const SingleComment = ({ comment }: SingleComentProps) => {

	return (
		<DivContainer>
			{/* <Avatar size={50} icon={<UserOutlined />} />
			<ReaderInfor>
				<DateWrapper>{comment?.date}</DateWrapper>
				<NameWrapper>{comment?.name}</NameWrapper>
				<CommentContentWrapper>
					<CommentDetail>{comment?.comment}</CommentDetail>
					<LikeShareWrapper>
						<FontAwesomeIcon style={{cursor: "pointer"}} color="#6666FF" icon={faReply} />
						<HeartOutlined style={{ color: "#EB539F", cursor: "pointer" }} />
					</LikeShareWrapper>
				</CommentContentWrapper>
			</ReaderInfor> */}
		</DivContainer>
	);
};

export default SingleComment;