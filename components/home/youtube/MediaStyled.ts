import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const MediaDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet768} {
    width: 100%;
  }
`;

export const MediaTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  color: black;
  cursor: pointer;
  @media ${device.tablet768} {
    font-size: 1.1rem;
  }
  @media ${device.laptop1024} {
    font-size: 1.5rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.7rem;
  }
`;

export const SubScription = styled.div`
  color: #000000a4;
  flex: 1;
  @media ${device.tablet768} {
    font-size: 0.7rem;
	line-height: 1.5rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.9rem;
	line-height: 1.5rem;
  }
  @media ${device.laptop1600} {
    font-size: 1rem;
	line-height: 1.5rem;
  }
`;
