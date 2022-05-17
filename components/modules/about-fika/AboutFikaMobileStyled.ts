import { device } from "@configs/screensSizes";
import { TitleH1 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const HeaderMobileContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 2rem;
  @media ${device.mobileL} {
    padding: 2.5rem;
  }
`;

export const HeaderTitle = styled(TitleH1)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: black;
  text-align: right;
  @media ${device.mobileM} {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`;

export const SubTitle = styled.div`
  color: #61666d;
  font-size: 0.75rem;
  text-align: right;
  width: 82%;
  margin-top: 0.5rem;
  @media ${device.mobileM} {
    font-size: 0.9rem;
	width: 77%;
  }
  @media ${device.mobileL} {
    font-size: 0.9rem;
	width: 80%;
  }
`;
