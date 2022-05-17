import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const IntroductionContainer = styled.div`
  @media ${device.tablet768} {
    padding: 2rem;
    width: 90%;
    margin: 0 auto;
  }

  @media ${device.laptop1024} {
    padding: 2rem;
    width: 70%;
    margin: 0 auto;
  }

  @media ${device.laptop1280} {
    padding: 2rem;
    width: 50%;
  }
  @media ${device.laptop1440} {
    padding: 3rem;
    width: 50%;
  }
  @media ${device.laptop1920} {
    width: 40%;
  }
`;

export const IntroductionTitle = styled.div`
  font-family: "Playfair Display", sans-serif;
  text-transform: uppercase;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media ${device.tablet960} {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1024} {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1280} {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;
