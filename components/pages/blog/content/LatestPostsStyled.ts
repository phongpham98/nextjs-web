import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const LastPostContainer = styled.div``;

export const LatestPostTitleH3 = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 1.15rem;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  -webkit-text-stroke-width: 0.3px;
`;

export const PostItemDiv = styled.div`
  margin-bottom: 1rem;
`;

export const PostImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: red;
`;

export const PostImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: top;
`;

export const PostItemTitle = styled.p`
  font-weight: 500;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1rem;

  @media ${device.tablet768} {
    font-size: 11px;
  }

  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1280} {
    font-size: 1rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }

  @media ${device.desktop} {
    font-size: 14px;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem 0;
  @media ${device.tablet768} {
    padding: 0.5rem 0;
  }

  @media ${device.laptop1024} {
    padding: 0.7rem 0.5rem;
  }
  @media ${device.laptop1024} {
    padding: 0.7rem 0.5rem;
  }
  @media ${device.laptop1440} {
    padding: 0.1rem 0.5rem;
    justify-content: center;
    gap: 0.2rem;
  }
`;

export const PostDate = styled.div`
  text-transform: uppercase;
  color: #898a90;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.7rem;
  }
  @media ${device.laptop1280} {
    font-size: 0.8rem;
  }
`;
