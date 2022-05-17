import styled, { keyframes } from "styled-components";

export const AbourFikaChartContainer = styled.div`
  background-color: #fffafc;
  padding-top: 100px;
  padding-bottom: 50px;
  position: relative;
`;

export const opactity = keyframes`
	0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const ChartImage = styled.img`
  animation: ${opactity} 2s linear;
`;
