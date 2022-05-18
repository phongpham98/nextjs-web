import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const DeleteAccountTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const StepCount = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  & span {
    text-transform: none;
  }
`;

export const StepTitle = styled.h3`
  text-transform: unset;
  font-weight: bold;
`;

export const StepDetail = styled.p`
  font-size: 1.1rem;
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
  @media ${device.tablet768} {
    font-size: 1.1rem;
  }
`;
