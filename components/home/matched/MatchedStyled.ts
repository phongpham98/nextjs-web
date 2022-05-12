import { colors } from "@configs/globalStyles";
import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const MatchedContainer = styled.div`
  @media ${device.tablet768} {
    margin: 0 -20px;
  }

  @media ${device.laptop1024} {
    margin: 0 -80px;
  }

  @media ${device.laptop1440} {
    margin: 0 -80px;
  }

  @media ${device.laptop1600} {
    margin: 0 -12.5%;
  }

  @media ${device.desktop} {
    margin: 0 -12.5%;
  }
  background-color: #f6f7ff;
`;

export const DiscoverContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  /* gap: 3%; */
  @media ${device.tablet768} {
    padding: 60px 60px 60px 70px;
  }

  @media ${device.laptop1024} {
    padding: 60px 50px 60px 196px;
  }

  @media ${device.laptop1440} {
    padding: 80px 80px 80px 320px;
  }

  @media ${device.laptop1600} {
    padding: 80px 130px 80px 320px;
  }
`;

export const DiscoverTitle = styled.div`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: bold;
  margin-bottom: 10%;
  @media ${device.tablet768} {
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media ${device.laptop1024} {
    font-size: 30px;
    line-height: 40px;
  }

  @media ${device.laptop1440} {
    font-size: 35px;
    line-height: 45px;
  }

  @media ${device.laptop1600} {
    font-size: 40px;
    line-height: 50px;
  }

  @media ${device.desktop} {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const DiscoverSubTitle = styled.div`
  color: #61666d;
  @media ${device.tablet768} {
    font-size: 0.7rem;
    margin: 1rem 0;
  }

  @media ${device.laptop1024} {
    font-size: 0.9rem;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
  }

  @media ${device.laptop1600} {
    font-size: 1rem;
  }
`;
