import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HeaderHomeMobileContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #f2f3f5;
`;

export const HeaderMobileImage = styled.img`
  width: 100%;
`;

export const ConnectionIconMobile = styled.div`
  /* position: absolute; */
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.3rem;
  @media ${device.mobileM} {
    font-size: 1.6rem;
  }
  @media ${device.mobileL} {
    font-size: 1.8rem;
  }
`;

export const MobileIconConnection = styled.a`
  display: inline-flex;
  color: #493ce7 !important;
`;

export const LogoArea = styled.div`
  position: absolute;
  top: 8%;
  z-index: 1;
  left: 15%;
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
`;

export const LogoContainer = styled.div`
  font-size: 7rem;
  display: inline-flex;
  @media ${device.mobileM} {
    font-size: 8rem;
  }
`;

export const MainText = styled.div`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.6rem;
  line-height: 0.9rem;
  @media ${device.mobileM} {
    font-size: 0.7rem;
    line-height: 1rem;
  }
`;

export const MobileDownload = styled.div`
  /* position: absolute;
  bottom: 8%;
  left: 15%; */
  display: flex;
  /* flex-direction: column; */
  gap: 0.3rem;
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
`;

export const MobileDownImage = styled.div`
  width: 4rem;
  @media ${device.mobileM} {
    width: 6rem;
  }
  @media ${device.mobileL} {
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderMobileContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
