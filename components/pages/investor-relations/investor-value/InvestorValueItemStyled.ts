import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const InvestorValueItemContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const ValueItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #dedede;
  padding: 1rem;
  @media ${device.mobileL} {
    padding: 0 2rem;
    gap: 2rem;
  }
  @media ${device.tablet768} {
    padding: 0;
  }
  @media ${device.laptop1024} {
    padding: 1rem;
  }
`;

export const InvestorIconValue = styled.div`
  display: inline-flex;
  font-size: 6rem;
  @media ${device.mobileM} {
    font-size: 8rem;
  }
  @media ${device.mobileL} {
    font-size: 9rem;
  }
  @media ${device.tablet768} {
    font-size: 4rem;
  }
  @media ${device.laptop1024} {
    font-size: 5rem;
  }
  @media ${device.laptop1280} {
    font-size: 5.5rem;
  }
  @media ${device.laptop1600} {
    font-size: 6.5rem;
  }
`;

export const InvestorTextValue = styled.div`
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  text-align: center;
  color: #2f2f2f;
  font-size: 1.2rem;
  min-height: 61px;
  @media ${device.tablet768} {
    font-size: 1rem;
  }

  @media ${device.laptop1024} {
    font-size: 1.2rem;
    min-height: 61px;
  }

  @media ${device.laptop1440} {
    font-size: 1.3rem;
    min-height: 65px;
  }

  @media ${device.laptop1600} {
    font-size: 1.5rem;
    min-height: 76px;
  }
`;
