import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const CareerContentContainer = styled.div`
  margin-top: 60px;
  position: relative;
`;

export const SeeJoBtn = styled.div`
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 0.4px;
  font-size: 0.9rem;
  padding: 10px 40px;
  display: inline-block;
  background-color: ${colors.primary};
`;

export const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  height: 100%;
  @media ${device.mobileS} {
    margin-top: 1rem;
    gap: 15px;
  }
  @media ${device.tablet768} {
    margin-top: 0;
    gap: 15px;
  }

  @media ${device.laptop1024} {
    padding-left: 0px;
  }

  @media ${device.laptop1440} {
    padding-left: 35px;
    gap: 30px;
  }

  @media ${device.laptop1600} {
    padding-left: 40px;
  }
`;

export const ReasonTitle = styled(TitleH2)`
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
  @media ${device.mobileL} {
    font-size: 1.7rem;
  }
  @media ${device.tablet768} {
    font-size: 25px;
    width: 60%;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
  }

  @media ${device.laptop1440} {
    font-size: 35px;
    width: 60%;
  }

  @media ${device.laptop1600} {
    font-size: 45px;
  }
`;

export const ReasonAnswer = styled.div`
  @media ${device.mobileS} {
    font-size: 0.75rem;
  }
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
  @media ${device.tablet768} {
    font-size: 0.9rem;
    width: 80%;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
    width: 80%;
  }

  @media ${device.laptop1440} {
    font-size: 0.9rem;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }
`;

export const ProfesstionalDevContainer = styled.div`
  position: relative;
  /* width: 100%; */
  @media ${device.tablet768} {
    margin: 0 -20px;
  }

  @media ${device.laptop1024} {
    margin: 0 -80px;
  }

  @media ${device.laptop1440} {
    margin: 0 -80px;
  }

  @media ${device.laptop1600} {
    margin: 0 -12.5%;
  }

  @media ${device.desktop} {
    margin: 0 -12.5%;
  }
`;

export const ProfesstionnalTextDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 54.29%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;

  color: white;
  font-weight: 900;
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 0.9rem;
    letter-spacing: 3px;
    padding-bottom: 0.5rem;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    letter-spacing: 4px;
    padding-bottom: 0.5rem;
  }

  @media ${device.tablet768} {
    font-size: 40px;
    letter-spacing: 5px;
    padding-bottom: 20px;
  }

  @media ${device.laptop1024} {
    font-size: 50px;
    letter-spacing: 8px;
  }

  @media ${device.laptop1440} {
    font-size: 65px;
    letter-spacing: 10px;
  }

  @media ${device.laptop1600} {
    font-size: 80px;
    letter-spacing: 15px;
  }
`;

export const StickyButton = styled.div`
  position: sticky;
  top: 50%;
  left: 45%;
  z-index: 2;
  display: inline-flex;
`;
