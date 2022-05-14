import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface QuestionContainerProps {
  isDoing: boolean;
  disabled: boolean;
}

export const QuestionContainer = styled.div<QuestionContainerProps>`
  text-align: center;
  opacity: ${(props) => (props.isDoing ? 1 : 0.1)};
  transition: all 0.3s linear;
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.1 : 1)};
  }
  margin-bottom: 0;
  @media ${device.tablet768} {
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.tablet768} {
    width: 40%;
  }
`;

export const QuizDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 100%;
  gap: 0px;
  @media ${device.tablet768} {
    margin: 10px auto;
    width: 80%;
    gap: 0px;
  }
`;

export const Caption = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
  @media ${device.laptop1024} {
    font-size: 24px;
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-top: 1.5rem;
  }
`;

export const DecistionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.7rem;
  margin: 10px 0;
  @media ${device.tablet768} {
    font-size: 18px;
    margin: 20px 0;
  }
`;

export const ClickToChoose = styled.div`
  color: #898a90;
  font-weight: 300;
`;
