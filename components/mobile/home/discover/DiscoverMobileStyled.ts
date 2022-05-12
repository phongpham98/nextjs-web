import styled from "styled-components";
import { device } from '@configs/screensSizes';
import { colors } from '@configs/globalStyles';
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";

export const DiscoverMobileContainer = styled(GeneralPaddingMobile)`
  background-color: #f6f7ff;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const DiscoverBoldText = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media ${device.mobileM} {
    font-size: 1.8rem;
  }
`;

export const DiscoverSubText = styled.div`
  color: #61666d;
  width: 80%;
  font-size: 0.7rem;
  margin-top: 0.3rem;
  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
`;

export const ButtonDisContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
