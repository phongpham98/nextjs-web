import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import { CommonTitleH2 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

interface QuizHeaderContainerProps {
  backgroundColor?: string;
}

export const QuizHeaderContainer = styled.div<QuizHeaderContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  padding: 20px 0rem;
  @media ${device.tablet768} {
    padding: 40px 4rem;
  }

  @media ${device.laptop1024} {
    padding: 70px 120px 40px;
  }

  @media ${device.laptop1440} {
    padding: 100px 280px 40px;
  }

  @media ${device.laptop1600} {
    padding: 100px 330px 40px;
  }
`;

export const PartText = styled(CommonTitleH2)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  @media ${device.tablet768} {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1024} {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 0.7rem;
  @media ${device.tablet768} {
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    font-size: 18px;
  }
`;

export const ProgressbarQuiz = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #6666ff;
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-top: 3rem;
  }
`;
