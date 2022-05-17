import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const FaqAskQuestionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #898a90;
  @media ${device.tablet768} {
    width: 50%;
  }

  @media ${device.laptop1024} {
    width: 70%;
  }

  @media ${device.laptop1440} {
    width: 50%;
  }

  @media ${device.laptop1600} {
    width: 50%;
  }
`;

export const DescriptionText = styled.div`
  color: #61666d;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  @media ${device.tablet768} {
    font-size: 16px;
  }

  @media ${device.laptop1024} {
    font-size: 16px;
  }

  @media ${device.laptop1440} {
    font-size: 16px;
  }

  @media ${device.laptop1600} {
    font-size: 18px;
  }
`;
