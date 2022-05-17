import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  ); */
  /* padding: 80px 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 70px;
  padding-right: 150px;
  @media ${device.tablet768} {
    padding-bottom: 0px;
    padding-right: 50px;
  }

  @media ${device.laptop1024} {
    padding-bottom: 30px;
    padding-right: 80px;
  }

  @media ${device.laptop1440} {
    padding-bottom: 70px;
    padding-right: 150px;
  }

  @media ${device.laptop1600} {
    padding-bottom: 70px;
    padding-right: 150px;
  }
`;

interface TitleTextProps {
  color?: string;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  text-transform: uppercase;
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 60px;
  @media ${device.tablet768} {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media ${device.laptop1024} {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media ${device.laptop1280} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media ${device.laptop1440} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media ${device.laptop1600} {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;

export const SubTitleText = styled.div<TitleTextProps>`
  color: ${(props) => (props.color ? props.color : "white")};
  width: 50%;
  text-align: right;

  @media ${device.tablet768} {
    font-size: 9.7px;
    width: 50%;
    margin-top: 12px;
  }

  @media ${device.laptop1024} {
    font-size: 0.7rem;
    width: 50%;
    margin-top: 20px;
  }

  @media ${device.laptop1280} {
    font-size: 0.9rem;
    width: 50%;
    margin-top: 20px;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
    margin-top: 20px;
    width: 45%;
  }

  @media ${device.laptop1600} {
    /* font-size: 13px;
    width: 37%; */
  }
`;
