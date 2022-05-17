import { device } from "@configs/screensSizes";
import styled from "styled-components";


export const DetailContent = styled.div`
  @media ${device.tablet768} {
    font-size: 11px;
  }

  @media ${device.laptop1024} {
    font-size: 12px;
  }

  @media ${device.laptop1440} {
    font-size: 13px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }

  @media ${device.desktop} {
    font-size: 14px;
  }
  & img {
    width: 100%;
  }
`;

export const HighlightSentenceWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 0;
`;

export const HighlightSentence = styled.div`
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;
`;

export const MoreBlogsContainer = styled.div`
  margin-bottom: 2rem;
`;
