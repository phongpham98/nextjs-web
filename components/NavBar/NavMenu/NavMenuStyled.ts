import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const NavMenuContainer = styled.div`
  & .no-mr {
    margin-right: 5px !important;
  }
  & .arrow-down-menu {
    padding-top: 2px !important;
  }
  flex: 1;
  & ul {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
  }
  @media ${device.tablet768} {
    & ul {
      margin-left: 10px;
      /* margin-top: 0.35rem; */
    }
    & .arrow-down-menu {
      padding-top: 2px !important;
	  font-size: 1rem;
    }
  }
  @media ${device.laptop1024} {
    & ul {
      margin-left: 10px;
      /* margin-top: 10px; */
    }
  }

  @media ${device.laptop1280} {
    & ul {
      margin-left: 1rem;
      /* margin-top: 10px; */
    }
  }
`;
