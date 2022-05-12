import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const DownloadFikaContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #6666ff, #ff9dd5);
`;

export const DownloadFikaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  gap: 0.5rem;
`;

export const DownloadGuideText = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;

  @media ${device.mobileS} {
    font-size: 0.4rem;
    font-weight: bold;
  }

  @media ${device.mobileM} {
    font-size: 0.7rem;
  }

  @media ${device.mobileL} {
    font-size: 0.9rem;
  }

  @media ${device.tablet768} {
    font-size: 14px;
  }

  @media ${device.laptop1024} {
    font-size: 16px;
  }

  @media ${device.laptop1440} {
    font-size: 16px;
  }

  @media ${device.laptop1600} {
    font-size: 16px;
  }
`;

export const HandpointContainer = styled.div`
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
  }
  @media ${device.tablet768} {
    font-size: 2rem;
  }
  display: inline-flex;
`;
