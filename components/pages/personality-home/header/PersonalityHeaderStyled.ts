import { device } from "@configs/screensSizes";
import { TitleWrapper } from "@utils/styled-components/GeneralStyled";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const PersonalityTitleWrapper = styled(TitleWrapper)`
  padding-bottom: 20px;
`;

export const PersonalityTitle = styled(TitleH2)`
  color: white;
  @media ${device.tablet768} {
    font-size: 2rem;
  }

  @media ${device.laptop1024} {
    font-size: 50px;
  }

  @media ${device.laptop1440} {
    font-size: 60px;
  }

  @media ${device.laptop1600} {
    font-size: 60px;
  }
`;

export const PersonalitySubTitle = styled.div`
  text-align: center;

  font-weight: 400;
  color: white;
  @media ${device.tablet768} {
    font-size: 0.7rem;
    width: 90%;
  }

  @media ${device.laptop1024} {
    font-size: 13px;
    width: 70%;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
    width: 50%;
  }

  @media ${device.laptop1600} {
    font-size: 15px;
    width: 50%;
  }
`;

export const PeronslaityHomeHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 35.79%;
`;
