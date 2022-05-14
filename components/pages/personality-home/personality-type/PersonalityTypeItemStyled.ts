import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TypeItemContainer = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 16px -3px #ffdaec;
`;

export const AspectRatio = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  @media ${device.mobileL} {
    padding-bottom: 15px;
  }
  @media ${device.tablet768} {
    padding-bottom: 10px;
  }

  @media ${device.tablet960} {
    padding-bottom: 15px;
  }

  @media ${device.laptop1024} {
    padding-bottom: 15px;
  }

  @media ${device.laptop1280} {
    padding-bottom: 20px;
  }

  @media ${device.laptop1440} {
    padding-bottom: 20px;
  }

  @media ${device.laptop1600} {
    padding-bottom: 20px;
  }
`;

interface Props {
  isSlider?: boolean;
}

export const PersonalityName = styled.h5<Props>`
  font-weight: bold;
  margin-top: ${(props) => (props.isSlider ? "10px" : "25px")};
  color: #25282b;
  text-transform: uppercase;
  @media ${device.mobileS} {
    margin-top: 0;
	font-size: 0.7rem;
  }
  @media ${device.mobileL} {
    margin-top: 10px;
	font-size: 0.9rem;
  }
  @media ${device.tablet768} {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  @media ${device.laptop1024} {
    margin-top: 10px;
    font-size: 16px;
  }

  @media ${device.laptop1440} {
    margin-top: 20px;
    font-size: 18px;
  }

  @media ${device.laptop1600} {
    font-size: 20px;
    margin-top: 25px;
  }
`;

export const HighLightCharacters = styled.p`
  color: #61666d;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  font-size: 0.7rem;
  @media ${device.mobileS} {
    font-size: 0.65rem;
    line-height: 0.7rem;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
    line-height: 0.9rem;
  }
  @media ${device.tablet768} {
    font-size: 0.55rem;
    line-height: 0.7rem;
  }

  @media ${device.laptop1024} {
    font-size: 10px;
    line-height: 13px;
  }

  @media ${device.laptop1280} {
    font-size: 12px;
    line-height: 13px;
  }

  @media ${device.laptop1440} {
    font-size: 13px;
    line-height: 19px;
  }

  @media ${device.laptop1600} {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const PersonalityImage = styled.div`
  width: 40%;
  @media ${device.mobileM} {
    width: 50%;
  }

  @media ${device.tablet768} {
    width: 40%;
  }

  @media ${device.tablet960} {
    width: 45%;
  }

  @media ${device.laptop1024} {
    width: 43%;
  }

  @media ${device.laptop1280} {
    width: 47%;
  }

  @media ${device.laptop1440} {
    width: 47%;
  }

  @media ${device.laptop1600} {
    width: 47%;
  }
`;
