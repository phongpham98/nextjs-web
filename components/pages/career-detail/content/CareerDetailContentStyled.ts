import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const PositionContainer = styled.div`
  @media ${device.tablet768} {
    border-top: 1px solid #dedede;
  }
`;

export const CareerDetailContentContainer = styled.div`
  padding: 50px 120px;
  position: relative;

  @media ${device.tablet768} {
    padding: 50px 80px;
  }

  @media ${device.laptop1024} {
    padding: 50px 100px;
  }

  @media ${device.laptop1440} {
    padding: 50px 120px;
  }

  @media ${device.laptop1600} {
    padding: 50px 120px;
  }

  @media ${device.desktop} {
    padding: 50px 120px;
  }
`;
