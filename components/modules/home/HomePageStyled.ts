import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const StickyHomeContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 15px;
  @media ${device.tablet768} {
    left: 55px;
  }

  @media ${device.laptop1024} {
    left: 0px;
  }
`;
