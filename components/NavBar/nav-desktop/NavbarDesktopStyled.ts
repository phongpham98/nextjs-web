import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

interface NavBarDesktopProps {
  isHome?: boolean;
}

export const NavConatiner = styled.div<NavBarDesktopProps>`
  max-height: 73px;
  display: flex;
  align-items: stretch;
  padding: 0 ${(props) => (props.isHome === true ? "10%" : "80px")};
  background-color: ${colors.primary};
  position: sticky;
  top: 0;
  z-index: 1000;

  @media ${device.tablet768} {
    padding: 0.3rem 20px;
  }

  @media ${device.laptop1024} {
    padding: 0.5rem 50px;
  }

  @media ${device.laptop1600} {
    padding: 0.5rem 10%;
  }

  @media ${device.desktop} {
    padding: 0.5rem 10%;
  } ;
`;

export const LogoNavBar = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  font-size: 11rem;
  align-items: center;
  /* margin-bottom: 4px; */
  @media ${device.tablet768} {
    width: 80px;
  }

  @media ${device.laptop1024} {
    width: 90px;
    /* margin-top: 0.5rem; */
  }

  @media ${device.laptop1280} {
    width: 100px;
    /* margin-top: 0.3rem; */
  }

  @media ${device.laptop1440} {
    width: 100px;
  }
  @media ${device.laptop1600} {
    width: 140px;
    /* margin-bottom: 0.3rem; */
    font-size: 13rem;
  }
`;

export const NavLanguage = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 10px; */

  & .language {
    font-weight: 500;
    text-transform: uppercase;
  }
  @media ${device.tablet768} {
    gap: 0.2rem;
    & .ant-select {
      font-size: 0.6rem;
      min-width: 70px;
      background-color: "${colors.primary}";
    }
    & .ant-select-selector {
      padding-right: 0 !important;
    }
    & .ant-select-arrow {
      right: 0;
    }
    & .arrown-down-language {
      font-size: 1rem;
      margin-top: 1px;
    }
  }

  @media ${device.laptop1024} {
    gap: 0.5rem;
    /* margin-top: 12px; */
  }

  @media ${device.laptop1280} {
    gap: 1rem;
    & .ant-select {
      font-size: 0.9rem;
    }
  }
  @media ${device.laptop1440} {
    & .ant-select {
      font-size: 1rem;
      min-width: 120px;
    }
    & .ant-select-arrow {
      top: 5px;
    }
  }
`;

export const LanguageItem = styled.div`
  color: #898a90;
  &:hover {
    color: red;
  }
  background-color: ${colors.primary};
`;

export const SelectLanguageContainer = styled.div``;

export const LanguageDiv = styled.div`
  cursor: pointer;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-transform: uppercase;
  @media ${device.tablet768} {
    font-size: 0.6rem;
  }
  @media ${device.tablet960} {
    font-size: 0.75rem;
  }
  @media ${device.laptop1280} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1rem;
  }
`;

export const IconSearch = styled.span`
  display: inline-flex;
  cursor: pointer;
  margin-bottom: 1px;
  @media ${device.laptop1280} {
    font-size: 1rem;
  }
  @media ${device.laptop1440} {
    font-size: 1.1rem;
  }
`;

export const ModalSearchContainer = styled.div`
  & * {
    color: black;
	width: 100%;
  }
  & .search-input {
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
  }
  & .input{
	  font-size: 1.7rem;
  }
`;
