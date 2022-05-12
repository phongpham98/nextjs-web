import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ControlPanelContainer = styled.div`
  background-color: #e0e0e2;
  border: 1px solid #61666d;
  /* margin: 0 auto; */
  flex: 1;
  border-radius: 5px;
  @media ${device.mobileS} {
  }
  @media ${device.tablet768} {
	flex: 1;
  }
  @media ${device.laptop1024} {
	flex: 1.5;
  }
  @media ${device.laptop1440} {
	flex: 1;
  }
`;

export const AudioInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #61666d;
  @media ${device.laptop1280} {
	padding: 25px 20px;
  }
`;

export const AudioTitle = styled.div`
  font-weight: 500;
  font-size: 0.7rem;
  flex: 1;
`;

export const AudioTime = styled.div`
  font-weight: 500;
  font-size: 0.7rem;
`;

export const PodcastContainer = styled.div`
  position: relative;
  margin-bottom: 4rem;
  gap: 1rem;
  display: flex;
  justify-content: center;
`;
