import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const SuitableCardContainer = styled.div`
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: white;
  border-radius: 20px;
  font-size: 0.65rem;
  @media ${device.tablet768} {
    font-size: 0.7rem;
    padding: 8px 12px;
  }
  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1440} {
    font-size: 0.9rem;
  }
`;

interface IconLetterProps {
  backgroundColor: string;
}

export const IconLeter = styled.div<IconLetterProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50px;
  width: 1.3rem;
  height: 1.3rem;
  line-height: 0;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: white;
  @media ${device.tablet768} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
