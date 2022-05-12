import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const Container = styled.div`
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 1rem;
  width: 100%;
  margin: 0.3rem auto 0;
  
`;

export const ActivityContentTitle = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
`;

export const ActivityContentDesc = styled.div`
  @media ${device.mobileS} {
    width: 85%;
    font-size: 0.7rem;
    color: #61666d;
    margin-bottom: 15px;
  }
`;

export const ActivitySubTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  @media ${device.mobileS} {
    margin-bottom: 0.3rem;
  }
`;
