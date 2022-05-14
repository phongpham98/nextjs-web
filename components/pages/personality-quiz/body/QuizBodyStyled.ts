import { device } from "@configs/screensSizes";
import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const QuizBodyContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  padding: 0 10%;
  @media ${device.laptop1024} {
    margin-top: 80px;
    padding: 0 20%;
  }
`;

export const QuizBodyMobile = styled(GeneralPaddingMobile)`
  position: relative;
  margin-top: 1rem;
`;
