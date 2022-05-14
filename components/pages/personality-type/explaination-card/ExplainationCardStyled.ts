import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface CardContainerProps {
  backgroundColor?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

export const IconContainer = styled.div<CardContainerProps>`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50px;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media ${device.tablet768} {
    gap: 10px;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
`;

export const CardDescription = styled.div`
  color: #61666d;
`;

export const SuitableContainer = styled.div``;

export const Suitablet768ext = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #25282b;
`;

export const DisplayCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
  @media ${device.tablet768} {
    gap: 10px;
  }
`;
