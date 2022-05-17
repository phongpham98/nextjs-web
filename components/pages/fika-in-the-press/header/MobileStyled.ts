import { device } from "@configs/screensSizes";
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import { TitleH3 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const MobileHeader = styled(GeneralPaddingMobile)`
  background-color: #ffdee2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const PressTitle = styled(TitleH3)`
  color: black;
  font-size: 1.8rem;
  -webkit-text-stroke-width: 0.7px;
  text-align: center;
  margin-bottom: 1rem;
  @media ${device.mobileM} {
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 2.2rem;
  }
`;
