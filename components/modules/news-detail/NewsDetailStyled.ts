import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const NewsDetailContainer = styled.div`
  padding: 40px 120px;
  @media ${device.tablet768} {
    padding: 20px 40px;
  }

  @media ${device.laptop1024} {
    padding: 30px 60px;
  }

  @media ${device.laptop1440} {
    padding: 40px 120px;
  }

  @media ${device.laptop1600} {
    padding: 40px 120px;
  }

  @media ${device.desktop} {
    padding: 40px 120px;
  }
`;
