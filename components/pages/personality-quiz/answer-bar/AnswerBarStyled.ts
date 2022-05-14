import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const LevelContainer = styled.span`
  cursor: pointer;
  color: transparent;
  position: relative;
  /* width: 20px; */
  height: 100%;
  @media ${device.tablet768} {
    /* width: 20px; */
  }
  &.disabled {
    cursor: default;
  }
`;

export const AnswerBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(273.69deg, #7878ff 4.08%, #ff91cf 100%);
  box-shadow: inset 0px 0px 12px rgba(125, 125, 125, 0.25);
  border-radius: 40px;
  display: inline-flex;
  justify-content: space-between;
  /* padding: 0 7px;1 */
  align-items: center;
  @media ${device.tablet768} {
    height: 30px;
  }
  & ${LevelContainer} {
    flex: 1;
  }
`;

export const CircleRound = styled.div`
  position: absolute;
  padding: 6px;
  border-radius: 50px;
  top: -9px;
  left: -13px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
  @media ${device.tablet768} {
    top: -13px;
    left: -11px;
    padding: 10px;
  }
`;

export const Chosen = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid #6666ff;
  box-shadow: 0px 0px 33px rgba(255, 255, 255, 0.3);
  @media ${device.tablet768} {
    width: 34px;
    height: 34px;
  }
`;

export const TooltipContainer = styled.div`
  position: absolute;
  background: white;
  font-weight: bold;
  color: ${colors.primary};
  font-size: 13px;
  width: 40px;
  height: 40px;
  padding-top: 2px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  left: -3px;
  top: -50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  /* top: calc(100% + 5px); */
`;
