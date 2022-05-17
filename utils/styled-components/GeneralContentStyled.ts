import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ArticleContainer = styled.article`
  height: 100%;
  /* margin: 0 auto; */

  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.laptop1024} {
    padding: 0 80px;
  }

  @media ${device.laptop1440} {
    padding: 0 80px;
  }

  @media ${device.laptop1600} {
    padding: 0 10%;
  }

  @media ${device.desktop} {
    padding: 0 10%;
  }
`;

export const ContentWrapper = styled.section`
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

export const GeneralTitlePostDetailH1 = styled.h1`
  color: #25282b;
  font-family: "Playfair Display", sans-serif;
  width: 100%;
  -webkit-text-stroke-width: 0.3px;
  text-transform: capitalize;
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 1rem 0;
  &.loading {
    background-color: red;
    border-radius: 20px;
    padding: 0rem 1rem;
    display: inline-flex;
  }
  @media ${device.tablet768} {
    margin-bottom: 1rem;
    margin-top: 0;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  @media ${device.laptop1024} {
    font-size: 1.7rem;
    line-height: 2rem;
  }

  @media ${device.laptop1280} {
    font-size: 2.2rem;
    line-height: 3rem;
  }

  @media ${device.laptop1440} {
    font-size: 2.2rem;
    line-height: 3rem;
  }

  @media ${device.laptop1600} {
    font-size: 2.5rem;
    line-height: 3.2rem;
  }
`;

export const MotoP = styled.p`
  font-style: italic;
  margin-top: 2%;
  font-family: "Playfair Display", sans-serif;
  font-weight: 400;
  -webkit-text-stroke-width: 0.3px;
  font-size: 1.2rem;
  @media ${device.tablet768} {
    font-size: 16px;
  }
  @media ${device.laptop1024} {
    font-size: 18px;
  }
  @media ${device.laptop1280} {
    font-size: 21px;
  }
  @media ${device.laptop1440} {
    font-size: 22px;
  }
`;

export const TimeAndAuthor = styled.div`
  color: #25282b;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin-top: 0px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media ${device.tablet768} {
    font-size: 12px;
    margin-top: 3.5%;
    margin-bottom: 1.5%;
    /* margin-top: 10px; */
  }
`;

export const ShareAndLikeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const ContentContainer = styled.section`
  & img {
    max-width: 100%;
  }
  & * {
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    margin-left: 0 !important;
  }
  & strong {
    font-size: 16px;
  }
  & .image {
    text-align: center;
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

export const CommentTextH3 = styled.h3`
  font-family: "Playfair Display";
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  /* margin-bottom: 20px; */
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const ImageMoreBlogContainer = styled.div`
  width: 100%;
  padding-top: 80.81%;
  position: relative;
  cursor: pointer;
`;

export const ContentMobileContainer = styled.div`
  & img {
    max-width: 100%;
  }
  margin-top: 0.5rem;
  & *{
    margin-left: 0 !important;
  }
  & strong{
	  font-size: 16px;
  }
`;

