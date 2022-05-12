import { device } from "@configs/screensSizes";
import styled from "styled-components";
import { AvatarRoundProps } from "./AvatarRound";
import { opactity, translate } from "./MatchedAvatarStyled";

export const PersonalityTypeContainer = styled.div<AvatarRoundProps>`
  animation: ${(props) => translate(props)} 3s linear infinite,
    ${opactity} 3s linear infinite;
  background-color: ${(props) =>
    props.type === "female" ? "#FFE2E4" : "#DCE3FC"};
  box-shadow: 1px 4px 7px -6px black;
  font-weight: bold;
  display: inline-flex;
  position: absolute;
  z-index: 1;
  border-radius: 30px;
  @media ${device.tablet768} {
    padding: 5px 25px;
    font-size: 13px;
    bottom: 10px;
    ${(props) => (props.type === "female" ? "left: -45px" : "right: -45px")}
  }

  @media ${device.laptop1024} {
    padding: 5px 30px;
    font-size: 15px;
    bottom: 10px;
    ${(props) => (props.type === "female" ? "left: -50px" : "right: -50px")}
  }

  @media ${device.laptop1440} {
    padding: 7px 40px;
    font-size: 17px;
    bottom: 20px;
    ${(props) => (props.type === "female" ? "left: -55px" : "right: -55px")}
  }

  @media ${device.laptop1600} {
    padding: 7px 40px;
    font-size: 17px;
    bottom: 20px;
    ${(props) => (props.type === "female" ? "left: -55px" : "right: -55px")}
  }
`;
