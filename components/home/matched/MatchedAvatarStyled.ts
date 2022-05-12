import { device } from "@configs/screensSizes";
import styled, { keyframes } from "styled-components";
import { AvatarRoundProps } from "./AvatarRound";

export const MatchedAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media ${device.tablet768} {
    padding: 60px 100px 60px 80px;
  }

  @media ${device.laptop1024} {
    padding: 60px 100px 60px 80px;
  }

  @media ${device.laptop1440} {
    padding: 60px 100px 60px 130px;
  }

  @media ${device.laptop1600} {
    padding: 60px 100px 60px 130px;
  }
`;

export const opactity = keyframes`
	0%   { opacity: 0; }
	15% {opacity: 0.005}
	50% {opacity: 1}
  70% { opacity: 1; }
  90% { opacity: 0.005; }
  100% {opacity: 0;}
`;

export const boxShadow = (props: AvatarRoundProps) => keyframes`
	0% {
		box-shadow: 0px 0px 0px 7px ${props.type === "female" ? "#FFEDF6" : "#DCE3FC"};
	}
	50% {
		box-shadow: 0px 0px 0px 7px ${props.type === "female" ? "#FFEDF6" : "#DCE3FC"};
	}
	51%{
		box-shadow: 0px 0px 0px 7px #e3c7ff;
	}
	100%{
	}
`;

export const translate = (props: AvatarRoundProps) => keyframes`
	0% {
		transform: ${
      props.type === "female" ? "translateX(-300px)" : "translateX(300px)"
    };
	}
	50%{
		transform: translateX(0);
	}
	100%{
		transform: translateX(0);
	}
`;

export const scale = () => keyframes`
	0% {
		transform: scaleX(0.5)
    };
	10%{
		transform: translateX(2);
	}
	100%{
		transform: translateX(0.5);
	}
`;

export const AvatarRoundContainer = styled.div<AvatarRoundProps>`
  border-radius: 50%;
  box-shadow: 0px 0px 20px -3px black;
  display: inline-flex;
  opacity: 0;
  animation: ${(props) => translate(props)} 3s linear infinite,
    ${opactity} 3s linear infinite;
`;

export const AvatarImage = styled.div<AvatarRoundProps>`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 0px 7px #e3c7ff;
  animation: ${(props) => boxShadow(props)} 3s linear infinite;
  @media ${device.tablet768} {
    width: 120px;
    height: 120px;
  }

  @media ${device.laptop1024} {
    width: 170px;
    height: 170px;
  }

  @media ${device.laptop1440} {
    width: 250px;
    height: 250px;
  }

  @media ${device.laptop1600} {
    width: 250px;
    height: 250px;
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const AnimationArea = styled.div`
  position: relative;
  @media ${device.tablet768} {
    width: 175px;
    height: 210px;
  }

  @media ${device.laptop1024} {
    width: 270px;
    height: 296px;
  }

  @media ${device.laptop1440} {
    width: 400px;
    height: 420px;
  }

  @media ${device.laptop1600} {
    width: 400px;
    height: 420px;
  }
`;

export const AvatarContainer = styled.div<AvatarRoundProps>`
  position: absolute;
  ${(props) => (props.type === "female" ? "left: 0" : "right: 0; bottom: 0")}
`;

export const MatchedText = styled.div`
  display: inline-block;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-right: 55px;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  z-index: 100;
  @media ${device.tablet768} {
    font-size: 16px;
  }

  @media ${device.laptop1024} {
    font-size: 20px;
  }

  @media ${device.laptop1440} {
    font-size: 25px;
  }

  @media ${device.laptop1600} {
    font-size: 25px;
  }
`;
