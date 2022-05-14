import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.7rem;
  color: white;
  @media ${device.tablet960} {
    padding: 1rem;
  }
  @media ${device.laptop1024} {
    padding: 1rem;
    gap: 0.3rem;
  }
  @media ${device.laptop1280} {
    padding: 1rem;
    gap: 0.5rem;
  }
  @media ${device.laptop1920} {
    padding: 2rem;
    gap: 1rem;
  }
`;

export const CaptionText = styled.div`
  font-weight: 500;
  font-size: 1rem;
  @media ${device.tablet960} {
    font-size: 1.2rem;
  }
  @media ${device.laptop1024} {
    font-size: 1rem;
  }
  @media ${device.laptop1280} {
    font-size: 1.2rem;
  }
  @media ${device.laptop1920} {
    font-size: 1.7rem;
  }
`;

export const ResultImage = styled.img`
  width: 8rem;
  @media ${device.tablet768} {
    width: 5rem;
  }
  @media ${device.tablet960} {
    width: 7rem;
  }
  @media ${device.laptop1024} {
    width: 5.5rem;
  }
  @media ${device.laptop1280} {
    width: 7rem;
  }
  @media ${device.laptop1440} {
    width: 11rem;
  }
`;

export const YouAre = styled.p`
  font-size: 0.7rem;
  margin: 0;
  text-transform: uppercase;
  @media ${device.laptop1024} {
    font-size: 0.65rem;
  }
  @media ${device.laptop1280} {
    font-size: 0.8rem;
  }
`;

export const CharacterType = styled.h1`
  color: white;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  @media ${device.tablet768} {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 1px;
  }
  @media ${device.laptop1024} {
    font-weight: 600;
    font-size: 1.3rem;
  }
  @media ${device.laptop1280} {
    font-weight: 600;
    font-size: 1.8rem;
  }
  @media ${device.laptop1920} {
    font-size: 2.6rem;
  }
`;

export const PResultDescription = styled.p`
  font-size: 0.75rem;
  width: 100%;
  @media ${device.tablet768} {
    font-size: 0.8rem;
    line-height: 0.9rem;
    width: 50%;
  }
  margin: 0 auto;
  text-align: center;
  color: white;
  @media ${device.laptop1024} {
    width: 80%;
    font-size: 0.85rem;
    line-height: 1.1rem;
  }
  @media ${device.laptop1280} {
    width: 70%;
    font-size: 0.9rem;
  }
  @media ${device.laptop1440} {
    width: 65%;
    font-size: 1.1rem;
    line-height: 1.3rem;
  }
`;
