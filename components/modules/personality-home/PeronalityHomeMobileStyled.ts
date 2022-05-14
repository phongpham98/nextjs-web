import { BackgroundOpacity } from "@utils/styled-components/GeneralMobileStyled";
import { TitleH1 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const ContentOpacity = styled(BackgroundOpacity)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
`;

export const Title = styled(TitleH1)`
  color: white;
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 1rem;
`;

export const Subtitle = styled.h4`
  color: white;
  font-size: 0.7rem;
  font-weight: 300;
`;
