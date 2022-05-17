import { device } from "@configs/screensSizes";
import { BackgroundOpacity } from "@utils/styled-components/GeneralMobileStyled";
import { GeneralHeaderMobileContainer } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const LoveStoriesMobileContainer = styled.div``;

export const StoryHeaderMobile = styled(GeneralHeaderMobileContainer)``;

export const StoryHeaderContent = styled(BackgroundOpacity)`
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavSearch = styled.div`
  margin-top: 1rem;
`;

export const HeaderTitle = styled.div`
  text-transform: uppercase;
  color: white;
  font-family: "Playfair Display";
  font-weight: 500;
  font-size: 2.7rem;
  line-height: 3.2rem;
  margin-bottom: 0.3rem;
  text-align: right;
  @media ${device.mobileL} {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 0.8rem;
  @media ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;
