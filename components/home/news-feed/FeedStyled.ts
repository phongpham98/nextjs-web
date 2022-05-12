import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FeedContainer = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  z-index: 1;
  width: 37%;

  @media ${device.laptop1024} {
  }

  @media ${device.laptop1280} {
    width: 37%;
  }
`;

export const FeedImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: 66.66%;
`;

export const FeedImage = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  position: absolute;
  object-position: top;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const FeedContentConatiner = styled.div`
  border: 1px solid #c8c7c7;
  position: absolute;
  right: 0;
  z-index: 0;
  background-color: white;
  @media ${device.tablet768} {
    padding: 1rem 10%;
    bottom: -1.5rem;
	width: 70%
  }
  @media ${device.laptop1024} {
    padding: 1.5rem 10%;
    bottom: -1rem;
	width: 70%
  }
  @media ${device.laptop1280} {
    padding: 2rem 10%;
    bottom: -1rem;
  }
  @media ${device.laptop1440} {
    padding: 2rem 9%;
    bottom: -1rem;
  }
  @media ${device.laptop1600} {
    padding: 2rem 9%;
    bottom: -1.5rem;
  }
`;
