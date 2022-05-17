import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const GrowthRateContainer = styled.div`
  @media ${device.laptop1280} {
    padding: 0 8%;
  }
  @media ${device.laptop1920} {
    padding: 0 15%;
  }
`;

export const DescriptionContainer = styled.div``;

export const Header = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  @media ${device.tablet768} {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media ${device.tablet960} {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.div`
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
  @media ${device.tablet960} {
    font-size: 0.7rem;
  }
  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1440} {
    font-size: 0.9rem;
  }
`;

export const Cooperation = styled.div`
  text-align: center;
`;

export const CoTitle = styled(TitleH2)`
  text-align: center;
  margin: 0 auto;
  color: black;
  @media ${device.mobileS} {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  @media ${device.tablet768} {
    width: 50%;
    font-size: 1.3rem;
  }
  @media ${device.tablet960} {
    font-size: 1.5rem;
  }
  @media ${device.laptop1280} {
    font-size: 1.8rem;
  }
  @media ${device.laptop1440} {
  }
`;

export const ValuesContainer = styled.div`
  padding: 0 8%;
`;

export const MapContainer = styled.div`
  text-align: center;
`;

export const ContactIconArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  @media ${device.mobileS} {
    padding: 20px 2rem;
    flex-direction: column;
    gap: 1rem;
  }
  @media ${device.tablet768} {
    width: 50%;
    flex-direction: row;
    padding: 40px 20px;
  }
`;

export const SeedFundingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 105%;
  top: 0;
  left: 0;
  overflow: hidden;
  & * {
    height: 100%;
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

export const InvestorVideoContainer = styled.div`
  width: 100%;
  padding-top: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  & > div:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  @media ${device.tablet768} {
    padding-top: 35%;
    & > div:first-child {
      width: 70%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }
`;

export const InvestorDescription = styled.p`
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    font-size: 1rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
  }

  @media ${device.laptop1600} {
    font-size: 1rem;
  }
`;
