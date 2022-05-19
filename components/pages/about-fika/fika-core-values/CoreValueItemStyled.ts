import { device } from "@configs/screensSizes";
import { TitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const CoreValueItemContainer = styled.div`
  height: 100%;
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 3rem 1rem;
  @media ${device.tablet768} {
    padding: 2rem 1rem;
  }
  @media ${device.laptop1024} {
    padding: 60px 30px 40px 30px;
  }
`;

export const CoreIconContainer = styled.div`
  display: inline-flex;
  background-color: #25282b;
  border-radius: 50px;
  @media ${device.mobileS} {
    font-size: 1.8rem;
    padding: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.8rem;
    padding: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 2rem;
    padding: 1.2rem;
  }
`;

export const CoreValueTitle = styled(TitleH2)`
  color: #2f2f2f;
  font-size: 1.7rem;
  @media ${device.tablet768} {
    font-size: 1rem;
  }

  @media ${device.laptop1024} {
    font-size: 25px;
  }

  @media ${device.laptop1440} {
    font-size: 30px;
  }

  @media ${device.laptop1600} {
    font-size: 30px;
  }
`;

export const CoreValueDetail = styled.div`
  color: #2f2f2f;
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }

  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }

  @media ${device.laptop1440} {
    font-size: 14px;
  }

  @media ${device.laptop1600} {
    font-size: 14px;
  }
`;

export const FikaCoreValueContainer = styled.div`
  @media ${device.tablet768} {
    padding: 0 5%;
  }
  @media ${device.laptop1024} {
    padding: 0 0%;
  }
  @media ${device.laptop1280} {
    padding: 0 5%;
  }
  @media ${device.laptop1440} {
    padding: 0 8%;
  }
  @media ${device.laptop1600} {
    padding: 0 5%;
  }
`;
