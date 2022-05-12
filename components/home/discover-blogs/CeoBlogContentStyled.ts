import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CeoBlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #898a90;
  height: 100%;
  @media ${device.tablet768} {
    gap: 0.2rem;
  }

  @media ${device.laptop1024} {
    gap: 0.4rem;
  }

  @media ${device.laptop1280} {
    gap: 0.5rem;
  }
`;

export const PathDateWrapper = styled.div`
  font-style: italic;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${device.tablet768} {
    font-size: 0.5rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.65rem;
  }
  @media ${device.laptop1280} {
    font-size: 0.66rem;
  }
  @media ${device.laptop1440} {
    font-size: 0.7rem;
  }
  & span {
    text-transform: uppercase;
    font-style: normal;
  }
`;

export const CeoBlogTitle = styled.div`
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${device.tablet768} {
    font-size: 0.8rem;
    line-height: 1rem;
    margin-bottom: 0px;
    min-height: 34px;
  }

  @media ${device.laptop1024} {
    font-size: 1em;
    line-height: 1.3rem;
    min-height: 40px;
  }

  @media ${device.laptop1280} {
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
    line-height: 1.5rem;
    min-height: 50px;
  }

  @media ${device.laptop1600} {
    font-size: 1.2rem;
    line-height: 1.7rem;
    min-height: 55px;
  } ;
`;

export const CeoContentDiv = styled.div`
  color: #61666d;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  flex: 1;
  @media ${device.tablet768} {
    font-size: 10px;
    width: 100%;
    margin-bottom: 0px;
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
  @media ${device.laptop1440} {
    font-size: 1rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ReadMoreText = styled.div`
  color: #898a90;
  cursor: pointer;
  text-transform: uppercase;
  @media ${device.tablet768} {
    font-size: 0.6rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1280} {
  }

  @media ${device.laptop1440} {
  }

  @media ${device.laptop1600} {
  } ;
`;
