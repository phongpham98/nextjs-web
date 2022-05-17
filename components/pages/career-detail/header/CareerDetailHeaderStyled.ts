import { device } from "@configs/screensSizes";
import { GeneralSubTitleHeaderText } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 33.33%;
`;

export const CareerDetailTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgba(167, 169, 255, 0.13),
    rgba(167, 169, 255, 0.13)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  @media ${device.mobileS} {
    padding: 2rem 1.5rem;
    font-weight: 500;
    font-size: 0.9rem;
  }

  @media ${device.mobileL} {
    padding: 3rem 2rem;
    font-weight: 500;
  }
  @media ${device.tablet768} {
    padding: 4rem 100px;
  }

  @media ${device.laptop1024} {
    padding: 5rem 100px;
  }

  @media ${device.laptop1440} {
    padding: 6rem 8rem;
  }

  @media ${device.laptop1600} {
    padding: 8rem 12rem;
  }
`;

export const CareerSubTitleText = styled(GeneralSubTitleHeaderText)`
  color: black;
  text-align: right;
  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  @media ${device.tablet768} {
    width: 40%;
  }

  @media ${device.laptop1024} {
    width: 50%;
  }

  @media ${device.laptop1280} {
    width: 40%;
  }

  @media ${device.laptop1440} {
    width: 35%;
  }

  @media ${device.laptop1600} {
  }
`;
