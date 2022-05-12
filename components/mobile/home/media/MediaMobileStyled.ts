import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const MediaMobileDescription = styled.div`
  margin-top: 0.5rem;
  & h1 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    cursor: pointer;
  }
  & span {
    font-size: 0.9rem;
  }
`;

export const MediaMobileContainer = styled(GeneralPaddingMobile)`
  width: 100%;
`;
