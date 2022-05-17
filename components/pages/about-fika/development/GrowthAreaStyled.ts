import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const GrowthContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.2rem;
  @media ${device.tablet768} {
	  gap: 1rem;
    gap: 40px;
    padding: 0;
  }

  @media ${device.laptop1024} {
    gap: 50px;
  }

  @media ${device.laptop1440} {
    gap: 90px;
  }

  @media ${device.laptop1600} {
    gap: 90px;
  }
`;

interface GrowthItemProps {
  alignItems: "flex-end" | "flex-start";
}

export const GrowthItem = styled.div<GrowthItemProps>`
  display: flex;
  height: 78%;
  align-items: ${(props) => props.alignItems};
`;
