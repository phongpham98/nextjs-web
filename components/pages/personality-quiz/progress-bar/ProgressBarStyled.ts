import styled from "styled-components";

interface ProgressBarContainerProps {
  trailColor?: string;
  strokeWith?: number;
}

export const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  width: 100%;
  height: ${props => props.strokeWith}px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.trailColor ? props.trailColor : "#ededed"};
`;

export interface PercentageProps {
  width: number;
  float: string;
  color?: string;
}

export const Percentage = styled.div<PercentageProps>`
  height: 100%;
  width: 50%;
  background-color: ${(props) => props.color};
  border-radius: inherit;
  width: ${(props) => props.width}%;
  float: ${(props) => props.float};
`;
