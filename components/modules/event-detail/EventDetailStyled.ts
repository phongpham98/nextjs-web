import { BackgroundOpacity } from "@utils/styled-components/GeneralMobileStyled";
import styled from "styled-components";

export const EventMobileHeaderContent = styled(BackgroundOpacity)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  padding: 2rem 5%;
`;

export const EventHeaderTitle = styled.div`
  color: white;
  text-transform: uppercase;
  font-family: "Playfair Display";
  width: 100%;
  text-align: center;
  font-size: 1.9rem;
  line-height: 2.3rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
