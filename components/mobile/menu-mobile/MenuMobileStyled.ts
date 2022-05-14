import { colors } from "@configs/globalStyles";
import styled, { keyframes } from "styled-components";

export const MenuWrapper = styled.div``;

export const MenuMobileContainer = styled.div`
  padding: 1.5rem 1.5rem 6rem;
  padding-right: 3rem;
  display: flex;
  background-color: ${colors.primary};
  /* height: 100%; */
  min-height: 100vh;
  width: 100%;
  z-index: 100;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ConnectionNavMobile = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const MenuMobileConnectionIcon = styled.a`
  color: black !important;
  font-size: 1.7rem;
`;

export const ListMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const MobileMenuItem = styled.div`
  font-weight: 500;
  position: relative;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SurfixIcon = styled.span`
  display: inline-flex;
  font-size: 1.3rem;
  transition: all 0.3s linear;
  margin-bottom: 2px;
  &.rotate {
    transform: rotate(-180deg);
  }
`;

export const slideUp = keyframes`
  from {
    visibility: visible;
    height: 100px;
  }

  to {
    visibility: hidden;
    height: 0;
	padding: 0 1rem;
  }
`;

export const slideDown = keyframes`
  0% {
    visibility: hidden;
    height: 0;
  }
  95% {
    visibility: visible;
    height: 100px;
  }

  /* Set height to 'auto' after animation for spacing showing form-invalid feedback message */
  100% {
    visibility: visible;
    height: auto;
  }
`;

export const TermContent = styled.div`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  transition: all 0.5s ease-in-out;
  min-height: 60px;
  &.slide-down {
    /* animation: ${slideDown} 0.2s linear both; */
  }
  &.slide-up {
    /* animation: ${slideUp} 0.2s linear both; */
  }
`;

export const DownloadAppContainer = styled.div``;

export const NavMobileDownload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

export const NewTag = styled.div`
  position: absolute;
  display: inline-flex;
  padding: 1px 5px;
  background-color: #ececec;
  border-radius: 5px;
  top: -8px;
  right: -24px;
  line-height: normal;
`;

export const NewTagText = styled.div`
  background: -webkit-linear-gradient(#6666ff, #ff7cc6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.5rem;
  font-style: italic;
  font-weight: bold;
`;

export const DivLanguage = styled.div`
  & .ant-select-selector {
    padding-left: 0 !important;
  }

  & .ant-select-arrow {
    top: 20% !important;
    right: 0px;
  }
`;
