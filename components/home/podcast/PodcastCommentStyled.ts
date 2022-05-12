import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CommentContainer = styled.div`
  position: relative;
  border: 1px solid #c8c7c7;
  border-radius: 10px;
  display: inline-flex;
  padding: 1rem;
  padding-right: 3rem;
  padding-bottom: 0;
  gap: 1rem;
  max-width: 70%;
  &.left {
    border-bottom-right-radius: 0;
  }
  &.right {
    border-bottom-left-radius: 0;
  }
  @media ${device.tablet768} {
    max-width: 80%;
  }
  @media ${device.laptop1024} {
    max-width: 90%;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    &.right {
      float: right;
    }
  }
  @media ${device.laptop1280} {
    max-width: 80%;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    &.right {
      float: right;
    }
  }

  @media ${device.laptop1440} {
    max-width: 70%;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    &.right {
      float: right;
    }
  }
`;

export const QuoteContainer = styled.div`
  font-size: 1.5rem;
  position: absolute;
  top: -1rem;
  right: 5%;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const Commenter = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  color: #61666d;
`;

export const CommentContent = styled.div`
  font-size: 0.7rem;
`;
