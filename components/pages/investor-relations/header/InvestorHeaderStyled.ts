import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  padding-top: 45%;
  width: 100%;
  display: flex;
`;

export const InvestorHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  align-items: center;
  padding: 1rem
`;

export const InvestorHeaderTitleH1 = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 5rem;
  line-height: 6rem;
  @media ${device.mobileS} {
    font-size: 3rem;
    line-height: 3.3rem;
    letter-spacing: 0.02rem;
  }
  @media ${device.laptop1024} {
    font-size: 3rem;
    line-height: 3.3rem;
    letter-spacing: 0.02rem;
  }
  @media ${device.laptop1440} {
    font-size: 5rem;
    line-height: 6rem;
    letter-spacing: 0.2rem;
  }
`;

export const InvestorHeaderDescriptionP = styled.p`
  text-transform: uppercase;
  color: white;
  font-weight: 400;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.laptop1024} {
    font-size: 1rem;
  }
`;
