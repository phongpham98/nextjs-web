import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const EventHeaderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5); ;
`;

export const EventDetailTitleH1 = styled.h1`
  color: white;
  font-family: "Playfair Display", serif;
  font-size: 70px;
  text-transform: uppercase;
  @media ${device.tablet768} {
    font-size: 2rem;
  }

  @media ${device.laptop1024} {
    font-size: 2.2rem;
  }

  @media ${device.laptop1280} {
    font-size: 2.7rem;
  }

  @media ${device.laptop1440} {
    font-size: 3rem;
  }

  @media ${device.laptop1600} {
    font-size: 3.2rem;
  }

`;
