import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TookQuizContainer = styled.div`
  background-color: #f6f7ff;
  padding: 40px 0;
  margin-top: 2rem;
  @media ${device.tablet768} {
    margin: 0;
  }
`;

export const TookQuizTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.tablet768} {
    align-items: flex-start;
  }
`;

export const TookQuizNumber = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  color: #493ce7;
  font-size: 3.5rem;
  line-height: 3.5rem;
  @media ${device.tablet768} {
    font-size: 3rem;
    line-height: 2.5rem;
  }

  @media ${device.laptop1024} {
    font-size: 65px;
    line-height: 70px;
  }

  @media ${device.laptop1440} {
    font-size: 90px;
    line-height: 100px;
  }

  @media ${device.laptop1600} {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const TookQuizText = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  color: ${colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media ${device.tablet768} {
    margin-bottom: 40px;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  @media ${device.laptop1024} {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media ${device.laptop1440} {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media ${device.laptop1600} {
    font-size: 45px;
    margin-bottom: 40px;
  }
`;
