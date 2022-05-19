import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const PrivacyPolicyHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 30%;
  background-position: center;
`;

export const PrivacyPolicyContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(135deg, #676bfa, #878aff, #676bfa);
  display: grid;
  place-items: center;
`;

export const PrivacyPolicyTextH1 = styled.h1`
  background-color: white;
  font-weight: 700;
  /* padding: 1rem 3rem; */
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: justify;
  @media ${device.tablet768} {
    font-size: 1.6rem;
    font-weight: bold;
  }
  @media ${device.laptop1280} {
    font-size: 1.7rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  @media ${device.laptop1440} {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  @media ${device.laptop1600} {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
`;

export const PrivacyPolicyHeaderMobile = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-image: linear-gradient(135deg, #676bfa, #878aff, #676bfa);
`;

export const PrivacyPolicyMobileText = styled.div`
  text-align: center;
  background-color: white;
  margin-bottom: 2rem;
  /* padding: 1rem 1.4rem; */
  font-weight: bold;
  font-size: 1.3rem;
  @media ${device.mobileM} {
    font-size: 1.4rem;
  }
`;

export const PrivacePolictyItemTitleH2 = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  &.big-title {
    font-size: 1.7rem;
  }
  @media ${device.mobileS} {
    font-size: 1.1rem;
    &.big-title {
      font-size: 1.4rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
    &.big-title {
      font-size: 1.7rem;
    }
  }
`;

export const PrivacePolictyItemTitleH3 = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  &.big-title {
    font-size: 1.7rem;
  }
  @media ${device.mobileS} {
    font-size: 1.1rem;
    &.big-title {
      font-size: 1.4rem;
    }
  }
  @media ${device.mobileM} {
    font-size: 1.2rem;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
    &.big-title {
      font-size: 1.7rem;
    }
  }
`;

export const PrivacePolictyItemContent = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1rem;
  }
`;

export const PrivacyPolicyBodyContainer = styled.div`
  margin: 2rem auto;
  @media ${device.tablet768} {
    width: 90%;
  }
  @media ${device.laptop1280} {
    width: 60%;
  }
`;
