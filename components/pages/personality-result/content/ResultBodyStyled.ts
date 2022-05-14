import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ResultContentContainer = styled.div`
  padding: 3rem 0%;
  position: relative;
`;

export const PTypeCaptionH2 = styled.h2`
  color: ${(props) => props.color};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  @media ${device.tablet768} {
    font-size: 1.3rem;
  }
  @media ${device.laptop1600} {
    font-size: 1.5rem;
  }
`;
