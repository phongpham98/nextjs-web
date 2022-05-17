import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const LoveDetailContainer = styled.div`
  height: 100%;
  margin: 0 auto;

  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.laptop1024} {
    padding: 0 80px;
  }

  @media ${device.laptop1600} {
    padding: 0 10%;
  }

  @media ${device.desktop} {
    padding: 0 10%;
  }
`;

export const SendStoryContainer = styled.div`
	margin: 4rem auto;
	display: flex;
	justify-content: center;
`;
