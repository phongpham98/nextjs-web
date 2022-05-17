import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const TechItemContainer = styled.div`
  border: 1px solid #dedede;
  position: relative;
  height: 100%;
`;

export const EqualDiv = styled.div`
  width: 100%;
  padding-top: 111%;
  position: relative;
`;

export const TextItemContentContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.laptop1440} {
    padding: 2rem 1rem;
  }
`;

export const IconContainer = styled.div`
  border-radius: 50px;
  background-color: #2f2f2f;
  padding: 0.7rem;
  font-size: 1.5rem;
  display: inline-flex;
`;

export const CenterIcon = styled.div`
  position: absolute;
  width: 100%;
  bottom: -1.4rem;
  display: grid;
  place-items: center;
`;

export const Header = styled(TitleH2)`
  font-size: 0.7rem;
  font-weight: 500;
  -webkit-text-stroke-width: 0.2px;
  letter-spacing: 0.5px;
  white-space: nowrap;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.tablet960} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.1rem;
  }
  @media ${device.laptop1600} {
    font-size: 1.3rem;
  }
`;

export const Description = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }

  @media ${device.tablet768} {
    font-size: 0.8rem;
  }

  @media ${device.tablet960} {
    font-size: 0.8rem;
  }
`;
