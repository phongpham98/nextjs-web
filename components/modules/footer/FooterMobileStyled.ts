import styled from "styled-components";
import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";

export const FooterMobileContainer = styled(GeneralPaddingMobile)`
  background-color: ${colors.primary};
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ContactMobile = styled.div``;

export const LogoFooterMobile = styled.div`
  font-size: 9rem;
  display: inline-flex;
  margin-bottom: 1rem;
`;

export const AddressDetail = styled.div`
  font-size: 0.7rem;
  line-height: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
`;

export const CheckLocation = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.5rem;
`;

export const PressFikaFooter = styled.div``;

export const TitleFooter = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;

export const PressContent = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
`;

export const ConnectionFooter = styled.div`
  text-align: center;
`;
export const ConnectionIconsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

export const DownLoadFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CopyRightFooter = styled.div`
  text-align: center;
  font-size: 0.7rem;
  padding: 0.5rem;
  background-color: ${colors.primary};
  color: white;
  border-top: 1px solid #a19c9c;
`;

export const FooterMobileIconConnection = styled.a`
  color: black !important;
  font-size: 2.8rem;
`;
