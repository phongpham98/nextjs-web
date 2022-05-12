import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface FeedTitleProps {
  bigTitle?: boolean;
}

export const FeedContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #898a90;
  height: 100%;
  &.gap {
    gap: 0.5rem;
  }

  @media ${device.laptop1024} {
  }

  @media ${device.laptop1280} {
  }
`;

export const PathDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: lowercase;
`;

export const PathDiv = styled.div`
  font-style: italic;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 0.75rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }
  @media ${device.laptop1280} {
    font-size: 0.9rem;
  }
  @media ${device.laptop1440} {
    font-size: 1rem;
  }
`;

export const DateDiv = styled.div`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
`;
export const FeedTitleDiv = styled.h2<FeedTitleProps>`
  font-size: ${(props) => (props.bigTitle ? "26px" : "16px")};
  /* font-family: "PoppinsVN", sans-serif; */
  color: black;
  margin-bottom: 20px;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 90%;

  @media ${device.mobileS} {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0px;
    letter-spacing: 0.5px;
    -webkit-text-stroke-width: 0.2px;
  }

  @media ${device.tablet768} {
    font-size: ${(props) => (props.bigTitle ? "0.8rem" : "14px")};
    line-height: ${(props) => (props.bigTitle ? "1rem" : "unset")};
    font-weight: 500;
  }

  @media ${device.laptop1024} {
    font-size: ${(props) => (props.bigTitle ? "1rem" : "16px")};
    line-height: ${(props) => (props.bigTitle ? "1.3rem" : "unset")};
  }

  @media ${device.laptop1280} {
    font-size: ${(props) => (props.bigTitle ? "1.2rem" : "16px")};
    line-height: ${(props) => (props.bigTitle ? "1.5rem" : "unset")};
    margin-bottom: ${(props) => (props.bigTitle ? "0rem" : "unset")};
  }

  @media ${device.laptop1440} {
    font-size: ${(props) => (props.bigTitle ? "1.5rem" : "16px")};
    /* margin-bottom: 15px; */
    line-height: ${(props) => (props.bigTitle ? "40px" : "28px")};
  }

  @media ${device.laptop1600} {
    font-size: ${(props) => (props.bigTitle ? "1.5rem" : "20px")};
    /* margin-bottom: 20px; */
    line-height: ${(props) => (props.bigTitle ? "40px" : "28px")};
  } ;
`;

export const FeedContentDiv = styled.div`
  color: #61666d;
  font-size: 13px;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${device.mobileS} {
    font-size: 0.9rem;
    width: 100%;
    margin: 0.5rem 0;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
    width: 100%;
    margin: 0;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media ${device.laptop1280} {
    font-size: 0.9rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
    width: 90%;
  }

  @media ${device.laptop1600} {
    font-size: 1rem;
    width: 80%;
    /* margin-bottom: 10px; */
  }

  @media ${device.desktop} {
    font-size: 13px;
  } ;
`;

export const ReadMoreDiv = styled.div`
  display: inline-flex;
  @media ${device.mobileS} {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  text-transform: uppercase;
  @media ${device.tablet768} {
    font-size: 9px;
    margin-bottom: 5px;
  }

  @media ${device.laptop1024} {
    font-size: 11px;
    margin-bottom: 5px;
  }

  @media ${device.laptop1440} {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media ${device.laptop1600} {
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media ${device.desktop} {
    font-size: 14px;
  } ;
`;
