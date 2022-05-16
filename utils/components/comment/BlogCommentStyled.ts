import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const BlogCommentContainer = styled.div`
  margin-top: 40px;
`;

export const AuthorWrapper = styled.div`
  padding: 0.5rem 0;
  gap: 1rem;
  display: flex;
  align-items: center;
  @media ${device.tablet768} {
    padding: 20px 30px;
    gap: 30px;
  }
`;

export const AuthorInfor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthorTitle = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 15px;
`;

export const AuthorJob = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;

export const AuthorContact = styled.div`
  display: flex;
  gap: 10px;
`;

export const PagingBtn = styled.div`
  padding: 15px 15px;
  border: 1px dashed #c8c7c7;
  color: black;
  border-radius: 100%;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PagingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const CommentText = styled.div`
  font-family: "Playfair Display";
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  /* margin-bottom: 20px; */
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const PostACommentTitleWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

export const CommentWrapper = styled.div`
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-bottom: 40px;
  }
`;

export const ImageMoreBlogContainer = styled.div`
  width: 100%;
  padding-top: 80.81%;
  position: relative;
  cursor: pointer;
`;
