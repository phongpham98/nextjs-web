import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const CategoryMobileContainer = styled.div`
  margin: 0 1px;
  height: 100%;
  border: 1px solid #bcbcbc;
  background-color: #efefef;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: 0.45rem;
  justify-content: space-evenly;
  @media ${device.mobileM} {
    font-size: 0.75rem;
  }
  &.no-border-top {
    border-top: 0;
  }
`;

export const CateItem = styled.div`
  padding: 0.5rem 0;
  /* flex: 1; */
  text-align: center;
  white-space: nowrap;
  height: 100%;
  width: 50%;
  /* border-right: 1px solid #bbbbbb; */
`;

export const VrLineMobile = styled.div`
  width: 1px;
  height: 2rem;
  background-color: #bbbbbb;
`;
