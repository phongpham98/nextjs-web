import { GeneralPaddingMobile } from "@utils/styled-components/GeneralStyled";
import styled from "styled-components";

export const StoryMobileContainer = styled.div``;

export const HeaderContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
  padding: 2rem 0;
`;

// export const ContentContainer = styled(GeneralPaddingMobile)``;

export const ContentMobileContainer = styled.div`
  & img {
    max-width: 100%;
  }
  margin-top: 0.5rem;
  & *{
    margin-left: 0 !important;
  }
  & strong{
	  font-size: 16px;
  }
`;
