import styled from "styled-components";
export const FeedTitleFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeedTitleFirstContent = styled.div``;

export const FeedContent = styled.div`
  color: #898a90;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FeedDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.2rem;
`;

export const FeedTitleFistSub = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
`;

export const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentLikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LikeComment = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: black;
  & span {
    font-size: 0.7rem;
    font-style: italic;
    margin-top: 2px;
  }
`;

export const Comment = styled(LikeComment)`
	color: #6666FF;
	font-size: 1.1rem;
`;

export const CommentBlack = styled(LikeComment)`
	color: black;
	font-size: 1.1rem;
`;

export const Like = styled(LikeComment)``;

export const Share = styled(LikeComment)`
  & span {
    color: #898a90;
  }
`;
