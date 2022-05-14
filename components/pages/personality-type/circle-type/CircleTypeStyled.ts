import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface Props {
  color: string;
}

export const CircleContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const CircleContent = styled.div<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 3px solid ${(props) => props.color};
  border-radius: 100px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  @media ${device.tablet768} {
    font-size: 2.5rem;
    border: 6px solid ${(props) => props.color};
  }
`;
