import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const ActivityContentContainer = styled.div`
  /* text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: white;
  @media ${device.tablet768} {
    border: 1px dashed #c4c4c4;
    padding: 20px;
    width: 90%;
    bottom: -30%;
  }
  @media ${device.laptop1024} {
    padding: 20px;
    bottom: -30%;
  }
  @media ${device.laptop1280} {
    padding: 20px;
    bottom: -25%;
  }
  @media ${device.laptop1440} {
    padding: 20px;
    bottom: -20%;
  } */

  text-align: center;
  margin: 2rem auto;
  width: 70%;
  @media ${device.tablet768} {
    margin: 1rem auto 2rem;
    width: 80%;
    font-size: 0.8rem;
  }
  @media ${device.laptop1024} {
    margin: 1rem auto 2rem;
    width: 80%;
  }
  @media ${device.laptop1280} {
    margin: 2rem auto;
    width: 70%;
  }
  @media ${device.laptop1440} {
    margin: 1rem auto 2rem;
    width: 70%;
    font-size: 0.8rem;
  }
  @media ${device.laptop1600} {
    margin: 1rem auto 2rem;
    width: 70%;
    font-size: 1rem;
  }
`;

export const ActivityContentTitle = styled.div`
  text-transform: uppercase;
  @media ${device.mobileS} {
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media ${device.laptop1024} {
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media ${device.laptop1280} {
    font-size: 1.8rem;
    font-weight: 400;
  }
  @media ${device.laptop1440} {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const ActivityContentDesc = styled.div`
  @media ${device.mobileS} {
    width: 85%;
    font-size: 0.7rem;
    color: #61666d;
    margin-bottom: 15px;
  }
  @media ${device.tablet768} {
    width: 80%;
    font-size: 0.55rem;
    color: #61666d;
    margin-bottom: 15px;
  }
  @media ${device.laptop1024} {
    width: 75%;
    font-size: 0.6rem;
    color: #61666d;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1280} {
    width: 65%;
    font-size: 0.6rem;
    color: #61666d;
    margin-bottom: 1rem;
  }
  @media ${device.laptop1440} {
    width: 60%;
    font-size: 0.7rem;
    color: #61666d;
    margin-bottom: 1rem;
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
  @media ${device.tablet768} {
    margin-bottom: 1rem;
    font-size: 0.6rem;
    margin-bottom: 0.2rem;
  }
  @media ${device.laptop1024} {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;
