import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 40px 120px;
  @media ${device.tablet768} {
    padding: 20px 40px;
  }

  @media ${device.laptop1024} {
    padding: 30px 60px;
  }

  @media ${device.laptop1440} {
    padding: 40px 120px;
  }

  @media ${device.laptop1600} {
    padding: 40px 120px;
  }

  @media ${device.desktop} {
    padding: 40px 120px;
  }
`;

export const ContentContainer = styled.div`
  & img {
    max-width: 100%;
  }

  & * {
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    margin-left: 0 !important;
  }
  @media ${device.tablet768} {
    font-size: 13px !important;
  }
  @media ${device.laptop1024} {
    font-size: 14px !important;
  }

  @media ${device.laptop1280} {
    font-size: 16px !important;
  }
`;

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
