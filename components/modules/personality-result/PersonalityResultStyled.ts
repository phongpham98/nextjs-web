import { device } from "@configs/screensSizes";
import { BackgroundOpacity } from "@utils/styled-components/GeneralMobileStyled";
import styled from "styled-components";

export const ResultContainer = styled.div`
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

export const ResultHeaderContent = styled(BackgroundOpacity)`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
