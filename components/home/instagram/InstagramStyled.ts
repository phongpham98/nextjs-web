import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const OpacityBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: black;
  opacity: 0;
  top: 0;
  transition: opacity 0.3s;
`;

export const ButtonInsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonInstagram = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s;
`;

export const InstagramPostContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &:hover {
    & ${ButtonInstagram} {
      opacity: 1;
      transform: scale(1.2);
    }
    & ${OpacityBackground} {
      opacity: 0.2;
    }
  }
  @media ${device.mobileS} {
    width: 90%;
    padding-top: 90%;
  }
  @media ${device.tablet768} {
    width: 100%;
    padding-top: 100%;
  }
`;
