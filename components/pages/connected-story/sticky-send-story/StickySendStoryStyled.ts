import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const StickyContainer = styled.div`
  width: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
  position: sticky;
  top: 30%;
  z-index: 100;
  background-color: #FFDEE2;
  font-weight: 500;
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-size: 20px;
  gap: 10px;
  cursor: pointer;
  @media ${device.tablet768} {
    width: 70px;
    font-size: 14px;
  }

  @media ${device.laptop1024} {
  }

  @media ${device.laptop1440} {
    font-size: 16px;
    width: 80px;
  }

  @media ${device.laptop1600} {
  }

  @media ${device.desktop} {
  }
`;
