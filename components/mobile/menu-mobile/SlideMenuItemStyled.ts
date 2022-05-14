import styled from "styled-components";
import { MobileMenuItem, slideDown, slideUp } from "./MenuMobileStyled";

export const SlideMenuItemContainer = styled.div``;

export const SubMenuContent = styled.div`
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  /* height: 70px; */
  transform: all 0.3s ease-in-out;
  &.slide-down {
    animation: ${slideDown} 0.2s linear both;
  }
  &.slide-up {
    animation: ${slideUp} 0.2s linear both;
  }
`;

export const MobileSubMenuItem = styled(MobileMenuItem)`
  color: #babac0;
`;
