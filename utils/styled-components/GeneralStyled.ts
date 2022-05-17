import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const GeneralContentWrapper = styled.div`
  height: 100%;
  /* margin: 0 auto; */
  position: relative;
  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.laptop1024} {
    padding: 0 80px;
  }

  @media ${device.laptop1440} {
    padding: 0 80px;
  }

  @media ${device.laptop1600} {
    padding: 0 10%;
  }

  @media ${device.desktop} {
    padding: 0 10%;
  }
`;

export const TitleWrapper = styled.div`
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1.5rem 0;
  @media ${device.tablet768} {
    gap: 0.2rem;
    padding: 0.5rem 0;
  }
  @media ${device.laptop1280} {
    gap: 0.4rem;
    padding: 1.5rem 0;
  }
`;

export const GeneralHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 33.33%;
`;

export const ChevronIconContainer = styled.div`
  position: absolute;
  color: white;
  background-color: rgba(36, 36, 36, 0.5);
  display: grid;
  place-items: center;
  border-radius: 50px;
  cursor: pointer;
  padding: 0.6rem;
  font-size: 0.8rem;
  bottom: 50%;
  @media ${device.tablet768} {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const GeneralImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: top;
`;

export const GeneralImageWrapper = styled.div`
  background: #f2f3f5;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: top;
  z-index: 1;
`;

export const GeneralPaddingMobile = styled.div`
  padding: 0 2rem;
`;

export const GeneralHeaderMobileContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #f2f3f5;
`;

export const MarginBottonDiv = styled.div`
  margin-bottom: 1.5rem;
`;

export const TermDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  display: inline-flex;
`;
