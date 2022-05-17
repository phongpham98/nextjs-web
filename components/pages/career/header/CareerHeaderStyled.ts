import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CareerHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 33.33%;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  @media ${device.tablet768} {
    padding: 20px 60px;
  }

  @media ${device.laptop1024} {
    padding: 65px 70px;
  }

  @media ${device.laptop1280} {
    padding: 80px 70px;
  }

  @media ${device.laptop1440} {
    padding: 110px 100px;
  }

  @media ${device.laptop1600} {
    padding: 120px 100px;
  }
`;

interface TitleTextProps {
  color?: string;
}

export const TitleTexth1 = styled.h1<TitleTextProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  @media ${device.mobileS} {
    font-size: 3rem;
  }
  @media ${device.mobileL} {
    font-size: 3.5rem;
  }
  @media ${device.tablet768} {
    font-size: 30px;
  }

  @media ${device.laptop1024} {
    font-size: 3.5rem;
    line-height: 3.7rem;
  }

  @media ${device.laptop1280} {
    font-size: 3.8rem;
    line-height: 5rem;
  }

  @media ${device.laptop1440} {
    font-size: 4.2rem;
    line-height: 5.5rem;
  }

  @media ${device.laptop1600} {
    font-size: 4.8rem;
    line-height: 6rem;
  }
`;

export const SubTitleText = styled.div<TitleTextProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  width: 30%;
  @media ${device.tablet768} {
    font-size: 9px;
    width: 40%;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
    width: 40%;
  }

  @media ${device.laptop1280} {
    font-size: 1rem;
    width: 40%;
  }

  @media ${device.laptop1440} {
    font-size: 1.1rem;
  }

  @media ${device.laptop1600} {
    font-size: 1.2rem;
  }
`;
