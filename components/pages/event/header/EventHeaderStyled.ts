import { device } from "@configs/screensSizes";
import { TitleH1 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const EventHeaderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding-top: 10%;
  z-index: 1;
  @media ${device.laptop1280} {
    gap: 2rem;
  }
`;

export const EventHeaderTitleH1 = styled(TitleH1)`
  font-size: 4rem;
  color: white;
  @media ${device.tablet768} {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media ${device.laptop1024} {
    font-size: 4rem;
    line-height: 4rem;
  }
  @media ${device.laptop1280} {
    font-size: 5rem;
    line-height: 5rem;
  }

  @media ${device.laptop1440} {
    font-size: 6rem;
    line-height: 6rem;
  }
  @media ${device.laptop1600} {
    font-size: 7rem;
    line-height: 7rem;
  }
`;

export const EventSubTitleP = styled.p`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  @media ${device.laptop1280} {
    font-size: 1rem;
	width: 70%;
  }
`;
