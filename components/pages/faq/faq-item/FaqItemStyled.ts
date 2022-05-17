import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FaqItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  color: #61666d;
  border-bottom: 1px solid #898a90;
  align-items: flex-start;
`;

export const SupportCentreItemContainer = styled(FaqItemContainer)`
  align-items: center;
`;

export const FaqItemTitle = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 15px;
  color: black;
`;

export const FaqItemIconContainer = styled.p`
  background-color: black;
  margin: 0;
  display: inline-flex;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  @media ${device.mobileS} {
    font-size: 0.5rem;
    padding: 0.5rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
    padding: 0.8rem;
  }
`;

interface FaqAnswerProps {
  display?: boolean;
}

export const FaqAnswer = styled.div<FaqAnswerProps>`
  transform: all 0.3s ease-in-out;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  @media ${device.tablet768} {
    width: 80%;
    font-size: 14px;
  }
`;
