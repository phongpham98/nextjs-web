import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ReadMoreContainer = styled.div`
  color: #898a90;
  cursor: pointer;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
`;
