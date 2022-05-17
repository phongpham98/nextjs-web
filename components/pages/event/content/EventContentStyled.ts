import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const EventContentContainer = styled.div`
  min-height: 220px;
  padding: 80px 200px;
  position: relative;
  @media ${device.tablet768} {
    padding: 60px 100px;
  }

  @media ${device.laptop1024} {
    padding: 60px 100px;
  }

  @media ${device.laptop1440} {
    padding: 70px 160px;
  }

  @media ${device.laptop1600} {
    padding: 80px 200px;
  }

  @media ${device.desktop} {
    padding: 80px 200px;
  }
`;

interface EventItemProps {
  hasPaddingTop?: boolean;
}

export const EventItem = styled.div<EventItemProps>`
  text-align: center;
  width: 100%;
  position: ${(props) => (props.hasPaddingTop ? "absolute" : "unset")};
  top: 60px;
`;

export const BackgroundDiv = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  top: 0;
  transition: all 0.2s;
`;

export const EventImageContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  padding-top: 75%;
  &:hover ${BackgroundDiv} {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const EventTitleH2 = styled.h2`
  text-transform: uppercase;
  z-index: 2;
  cursor: pointer;
  font-weight: 500;
  @media ${device.mobileS} {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  @media ${device.tablet768} {
    margin-top: 15px;
    font-size: 1rem;
  }

  @media ${device.laptop1024} {
    margin-top: 15px;
    font-size: 1.2rem;
  }

  @media ${device.laptop1280} {
    margin-top: 15px;
    font-size: 1.4rem;
  }

  @media ${device.laptop1440} {
    margin-top: 18px;
    font-size: 1.4rem;
  }

  @media ${device.laptop1600} {
    margin-top: 20px;
  }
`;

export const EventTitleH4 = styled.h4`
  text-transform: uppercase;
  z-index: 2;
  cursor: pointer;
  font-weight: 500;
  @media ${device.mobileS} {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }

  @media ${device.tablet768} {
    margin-top: 15px;
    font-size: 1rem;
  }

  @media ${device.laptop1024} {
    margin-top: 15px;
    font-size: 1.2rem;
  }

  @media ${device.laptop1280} {
    margin-top: 15px;
    font-size: 1.4rem;
  }

  @media ${device.laptop1440} {
    margin-top: 18px;
    font-size: 1.4rem;
  }

  @media ${device.laptop1600} {
    margin-top: 20px;
  }
`;

export const EventSubTitle = styled.div`
  font-size: 13px;
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1280} {
    font-size: 0.9rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
  }

  @media ${device.laptop1600} {
    font-size: 1.2rem;
  }

`;
