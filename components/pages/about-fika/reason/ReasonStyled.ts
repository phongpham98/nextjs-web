import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const ReasonContainer = styled.div`
  /* padding: 0 60px; */
`;

export const ReasonDetailContainer = styled.div`
  padding-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${device.tablet768} {
    padding-top: 0px;
    padding-right: 0px;
  }

  @media ${device.laptop1024} {
    padding-top: 10px;
    padding-right: 0px;
  }

  @media ${device.laptop1440} {
    padding-top: 15px;
    padding-right: 100px;
  }

  @media ${device.laptop1600} {
    padding-top: 20px;
    padding-right: 100px;
  }
`;

export const ReasonTitleH2 = styled(TitleH2)`
  font-weight: 500;
  font-size: 1.3rem;
  color: black;

  @media ${device.tablet768} {
    font-size: 20px;
    line-height: 25px;
  }

  @media ${device.laptop1024} {
    font-size: 25px;
    line-height: 30px;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
    line-height: 35px;
  }

  @media ${device.laptop1600} {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const ReasonContent = styled.div`
  margin: 15px 0;
  font-size: 12.5px;
  @media ${device.tablet768} {
    margin: 3px 0;
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    margin: 5px 0;
    font-size: 0.7rem;
  }

  @media ${device.laptop1280} {
    margin: 5px 0;
    font-size: 0.8rem;
    padding-right: 6rem;
  }

  @media ${device.laptop1440} {
    margin: 15px 0;
    padding-right: 0;
  }

  @media ${device.laptop1600} {
    margin: 15px 0;
    font-size: 1rem;
  }
`;

export const Quote = styled.div`
  font-weight: bold;
  margin-top: 15px;
  @media ${device.tablet768} {
    margin: 3px 0;
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    margin: 10px 0;
    font-size: 0.7rem;
  }

  @media ${device.laptop1280} {
    font-size: 0.8rem;
    padding-right: 6rem;
  }

  @media ${device.laptop1440} {
    font-size: 0.8rem;
    padding-right: 0;
  }

  @media ${device.laptop1600} {
    margin: 15px 0;
    font-size: 1rem;
  }
`;
