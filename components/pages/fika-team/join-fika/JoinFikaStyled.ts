import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const JoinFikaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin: 0 auto;
  @media ${device.tablet768} {
    width: 50%;
  }

  @media ${device.laptop1024} {
    width: 40%;
  }

  @media ${device.laptop1440} {
    width: 35%;
  }

  @media ${device.laptop1600} {
    width: 30%;
  }
`;

export const JoinFikaSubTitle = styled.div``;
