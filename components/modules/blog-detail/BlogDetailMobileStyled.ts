import { device } from "@configs/screensSizes";
import styled from "styled-components";
export const HeaderTitle = styled.div`
  color: white;
  text-transform: uppercase;
  font-family: "Playfair Display";
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.7rem;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media ${device.mobileM} {
    font-size: 1.4rem;
    line-height: 1.9rem;
  }
  @media ${device.mobileL} {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; */
`;
