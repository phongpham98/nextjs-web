import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const BrandMagazineContainer = styled.div`
  position: relative;
  overflow: hidden;
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
    }
  }
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-top: 0;
  }
`;

export const BrandItemContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
  height: 100%;
  display: flex !important;
  align-items: center;
  @media ${device.tablet768} {
    padding: 20px 80px;
  }
  @media ${device.laptop1024} {
    padding: 20px 90px;
  }

  @media ${device.laptop1280} {
    padding: 20px 40%;
  }
`;
