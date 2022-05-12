import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CeoBlogContainer = styled.div`
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 85%;
  @media ${device.laptop1024} {
    width: 90%;
  }
  @media ${device.laptop1280} {
    width: 85%;
  }
`;

export const CeoImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
`;

export const CeoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  object-position: top;
  right: 0;
  z-index: 0;
`;

export const BlogContentContainer = styled.div`
  border: 1px solid #c8c7c7;
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: white;
  @media ${device.tablet768} {
    padding: 0.6rem 0.8rem;
    top: 82%;
    right: 3%;
    width: 90%;
  }
  @media ${device.laptop1024} {
    padding: 0.8rem 0.8rem;
    top: 82%;
    right: 3%;
    width: 90%;
  }
  @media ${device.laptop1280} {
    padding: 0.8rem 0.8rem;
    top: 85%;
    right: 8%;
    width: 85%;
  }
  @media ${device.laptop1600} {
    padding: 1.5rem;
    top: 85%;
    right: 8%;
    width: 85%;
  }
`;

export const ExploreAll = styled.div`
  text-align: center;
  @media ${device.tablet768} {
    margin-top: 9rem;
  }
  @media ${device.laptop1024} {
    margin-top: 11rem;
  }
  @media ${device.laptop1440} {
    margin-top: 13rem;
  }
  @media ${device.laptop1600} {
    margin-top: 15rem;
  }
`;
