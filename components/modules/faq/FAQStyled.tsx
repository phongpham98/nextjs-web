import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FaqContainer = styled.div`
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
    padding: 50px 180px;
  }

  @media ${device.desktop} {
    padding: 50px 180px;
  }
`;