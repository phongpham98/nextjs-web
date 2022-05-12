import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  padding: 0 20px;
  text-align: center;
`;

export const ActivitiesContent = styled.div`
  width: 100%;
  padding-top: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  & > div:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  @media ${device.tablet768} {
    padding-top: 45%;
    & > div:first-child {
      width: 70%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }
`;
