import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const PersonalityDifferenceContainer = styled.div``;

export const DifferenceTitle = styled.h3`
  color: ${colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
  @media ${device.tablet768} {
    margin-bottom: 60px;
    font-size: 2rem;
    line-height: 50px;
  }

  @media ${device.laptop1024} {
    font-size: 2.2rem;
  }

  @media ${device.laptop1440} {
    font-size: 2.5rem;
  }

  @media ${device.laptop1600} {
    font-size: 2.8rem;
  }
`;
