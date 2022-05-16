import styled from "styled-components";

export const ReaderCommentContainer = styled.div`
  margin-top: 20px;
`;

export const ContentAndReplyWrapper = styled.div`
  display: flex;
`;

export const Content = styled.div``;

export const AuthorWrapper = styled.div``;

export const DateWrapper = styled.div`
  text-transform: uppercase;
  color: #898a90;
  font-size: 12px;
`;

export const NameWrapper = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  color: black;
`;

export const CommentContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const ReplyContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline;
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

export const CommentDetail = styled.div``;

export const ReplyToText = styled.div`
  display: inline-block;
  position: relative;
  margin: 1rem 0;
`;

export const LikeShareWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  & span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
	font-style: italic;
    & svg {
      font-size: 1.1rem;
	  cursor: pointer;
    }
  }
`;

export const Icon = styled.div``;

export const DeleteIcon = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  border-radius: 50%;
  place-items: center;
  cursor: pointer;
  top: -1rem;
  right: -1rem;
  background-color: white;
  border: 1px solid #bcbcbc;
`;
