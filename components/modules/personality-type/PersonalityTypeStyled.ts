import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import {
  CommonTitleH1,
  CommonTitleH2,
} from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const TypeImageContainer = styled.div`
  width: 10rem;
  @media ${device.laptop1024} {
    width: 12rem;
  }
  @media ${device.laptop1280} {
    width: 14rem;
  }
`;

export const TypeImage = styled.img`
  width: 100%;
`;

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1rem;
  @media ${device.laptop1024} {
    gap: 1.5rem;
    margin: 2rem 0;
  }
`;

export const TypeName = styled(CommonTitleH1)`
  font-size: 1rem;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 1.7rem;
  }
  @media ${device.laptop1024} {
    font-size: 1.8rem;
  }
`;

export const StickyContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0%;
  left: 0;
  @media ${device.laptop1024} {
    left: 60px;
  }
`;

export const TypeDescription = styled.p`
  color: #61666d;
  text-align: center;
  width: 100%;
  font-size: 0.7rem;
  @media ${device.laptop1024} {
    width: 80%;
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    width: 80%;
    font-size: 16px;
  }
  @media ${device.laptop1280} {
    width: 50%;
  }
`;

export const CardContainer = styled.div`
  padding: 20px 0;
  @media ${device.tablet768} {
    padding: 0 60px;
  }
  @media ${device.laptop1024} {
    font-size: 0 100px;
  }
`;

export const ExplainationContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet768} {
    gap: 20px;
    padding: 4rem 5%;
  }
  @media ${device.laptop1024} {
    padding: 4rem 10%;
  }
`;

export const PTypeTitleH3 = styled.h3`
  font-weight: bold;
  color: ${colors.primary};
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 1.1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.2rem;
  }
  @media ${device.laptop1600} {
    font-size: 1.3rem;
  }
  margin-bottom: 0.5rem;
`;

export const PTypeContentP = styled.p`
  color: #61666d;
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1440} {
    font-size: 0.9rem;
  }
  @media ${device.laptop1600} {
    font-size: 1.1rem;
  }
`;

export const TakeTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;

  @media ${device.tablet768} {
    margin: 60px 0;
  }
`;

export const TakeTestTitle = styled(CommonTitleH2)`
  font-size: 1.5rem;
  line-height: 1.8rem;
  @media ${device.tablet768} {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const TakeTestDescription = styled.p`
  color: #61666d;
  font-size: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media ${device.tablet768} {
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const CircleTypeContainer = styled.div`
  padding: 0;
  @media ${device.tablet768} {
    padding: 40px 100px 4rem;
  }
  @media ${device.laptop1280} {
    padding: 4rem 16rem 4rem;
  }
  @media ${device.laptop1600} {
    padding: 4rem 20rem 4rem;
  }
`;
