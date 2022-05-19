import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const MagazineSliderContainer = styled.div``;

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

export const MagazineTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );
  @media ${device.tablet768} {
    padding: 0 10% 40px 40px;
  }

  @media ${device.laptop1024} {
    padding: 15px 30px;
  }

  @media ${device.laptop1440} {
    padding: 0 10% 40px 40px;
  }

  @media ${device.laptop1600} {
    padding: 0 10% 40px 40px;
  }
`;

export const MagazineTitle = styled.h2`
  color: white;
  &:hover {
    color: white;
  }
  font-weight: 500;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.tablet768} {
    width: 90%;
    font-size: 16px;
  }

  @media ${device.laptop1024} {
    font-size: 18px;
    width: 95%;
  }

  @media ${device.laptop1440} {
    font-size: 25px;
    width: 90%;
  }

  @media ${device.laptop1600} {
    font-size: 25px;
  }
`;

export const MagazineTime = styled.div`
  color: #00d2eb;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    margin-top: 0px;
  }

  @media ${device.laptop1024} {
    margin-top: 0px;
    font-size: 12px;
  }

  @media ${device.laptop1440} {
    margin-top: 20px;
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    margin-top: 20px;
  }
`;

export const MagBrand = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  @media ${device.tablet768} {
    font-size: 9px;
  }

  @media ${device.laptop1024} {
    font-size: 12px;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }
`;
