import { device } from "@configs/screensSizes";
import styled, { keyframes } from "styled-components";
import { opactity } from "../chart/AboutFikaChartStyled";

export const DevelopmentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  animation: ${opactity} 1.5s linear;
`;

export const LineContainer = styled.div`
  display: inline-flex;
  height: 65px;
  @media ${device.tablet768} {
    height: 100px;
  }

  @media ${device.laptop1024} {
    height: 120px;
  }

  @media ${device.laptop1440} {
    height: 135px;
  }

  @media ${device.laptop1600} {
    height: 180px;
  }
`;

export const scale = keyframes`
	0%   { font-size: 0px; }
  100% { opacity: 20px; }
`;

export const NumberContainer = styled.div`
  color: #9d75ef;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  width: 50px;
  text-align: center;
  animation: ${scale} 1.5s linear;
  padding-bottom: 0;
  @media ${device.tablet768} {
    font-size: 25px;
    width: 90px;
    padding-bottom: 15px;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
    padding-bottom: 25px;
  }

  @media ${device.laptop1440} {
    font-size: 35px;
  }

  @media ${device.laptop1600} {
    font-size: 35px;
  }
`;

export const DevelopmentText = styled.div`
  font-weight: 500;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 0.5;
  @media ${device.tablet768} {
    font-size: 14px;
  }
`;
