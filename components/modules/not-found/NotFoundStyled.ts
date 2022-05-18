import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.tablet768} {
    /* height: 70vh; */
    margin: 0 200px;
  }
`;

export const NotFoundText = styled.div`
  text-transform: uppercase;
  font-family: "Playfair Display";
  font-size: 8rem;
  font-weight: 500;
  margin-bottom: 2rem;
  @media ${device.tablet768} {
    line-height: 150px;
    font-size: 150px;
  }
`;

export const ExplainText = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 30px;
  }
`;
