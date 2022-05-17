import { device } from "@configs/screensSizes";
import { TitleH3 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const PressFikaHeaderContainer = styled.div`
  background-color: #ffdee2;
  padding: 40px 10%;
  @media ${device.tablet768} {
    padding: 40px 5%;
  }
  @media ${device.laptop1280} {
    padding: 40px 10%;
  }
  @media ${device.laptop1600} {
    padding: 40px 13%;
  }
`;

export const PressFikaTitle = styled(TitleH3)`
  font-size: 70px;
  margin-bottom: 60px;
  color: black;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  @media ${device.laptop1024} {
    font-size: 50px;
    margin-bottom: 40px;
	-webkit-text-stroke-width: 0.8px;
  }

  @media ${device.laptop1440} {
    font-size: 55px;
    margin-bottom: 60px;
  }

  @media ${device.laptop1600} {
    font-size: 65px;
    margin-bottom: 60px;
  }
`;

export const MagazineContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 127%;
`;

export const MagTitleWrapper = styled.div`
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 5px;
`;

export const MagBrand = styled(TitleH3)`
  color: white;
  text-align: center;
  font-size: 29px;
  @media ${device.tablet768} {
    font-size: 1rem;
  }

  @media ${device.laptop1024} {
    font-size: 1.2rem;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
  }

  @media ${device.laptop1600} {
    font-size: 30px;
  }
`;

export const MagTitle = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 0.65rem;
    padding: 0.5rem 1rem;
  }
  @media ${device.tablet768} {
    padding: 10px 0;
    font-size: 11px;
    width: 90%;
    margin: 0 auto;
  }

  @media ${device.laptop1024} {
    font-size: 1rem;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    padding: 10px 0;
    width: 90%;
    font-size: 16px;
  }
`;

export const PressSubContent = styled.a`
  color: black;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
