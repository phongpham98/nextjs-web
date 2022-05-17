import { device } from "@configs/screensSizes";
import styled from "styled-components";
import { HeaderContent } from "../blog/BlogMobileStyled";

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 50%;
  padding: 2.5rem 3rem 0 0;
  display: flex;
  align-items: flex-end;
  @media ${device.mobileM} {
    width: 55%;
  }
  @media ${device.mobileL} {
    width: 55%;
  }
`;

export const NewsHeaderMobileContainer = styled(HeaderContent)`
  height: 43%;
`;
