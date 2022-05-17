import { device } from "@configs/screensSizes";
import styled from "styled-components";
import { StoryHeaderContent } from "../connected-story/ConnectedStoryMobileStyled";

export const EventHeaderMobileContent = styled(StoryHeaderContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  gap: 0.3rem;
  padding: 0 1.5rem 1.5rem;
  @media ${device.mobileL} {
    padding: 0 1.5rem 2.5rem;
  }
`;

export const EventMobileTitle = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: "Playfair Display";
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 3rem;
  margin-bottom: 0.3rem;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 3.5rem;
	margin-bottom: 1rem;
  }
`;

export const EventMobileSubTitle = styled.div`
  text-align: center;
  font-size: 0.7rem;
  @media ${device.mobileM} {
    font-size: 0.9rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;
