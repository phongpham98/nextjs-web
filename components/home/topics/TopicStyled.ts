import { device } from "@configs/screensSizes";
import styled from "styled-components";

export const TopicContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SingleTopicContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: #f2f3f5;
  width: 100%;
  padding-top: 100%;
  /* align-items: center; */
  /* padding: 0 10px; */
`;

export const TopicImage = styled.div`
  opacity: 0.7;
  transition: all 0.3s;
  background-color: #f2f3f5;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: top;
  &:hover {
    opacity: 1;
  }
`;

export const TopicTitle = styled.h2`
  position: absolute;
  background-color: white;
  border: 1px solid #bcbcbc;
  width: 70%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  color: block;
  cursor: pointer;
  @media ${device.tablet768} {
    font-size: 0.5rem;
    height: 2rem;
    bottom: -1rem;
    width: 70%;
  }
  @media ${device.laptop1024} {
    font-size: 0.6rem;
    height: 2.4rem;
    bottom: -1.2rem;
    width: 70%;
  }
  @media ${device.laptop1280} {
    font-size: 0.8rem;
    height: 3rem;
    bottom: -1.5rem;
    width: 70%;
  }

  @media ${device.laptop1440} {
    font-size: 1rem;
    height: 4rem;
    bottom: -2rem;
    letter-spacing: 1px;
    width: 70%;
  }

  @media ${device.laptop1600} {
    font-size: 1rem;
    height: 4rem;
    bottom: -2rem;
    width: 70%;
  }
`;

export const MultiTopicContainer = styled.div`
  height: 100%;
  padding-right: 100%;
  padding-top: 100%;
  position: relative;
  background-color: #f2f3f5;
`;

export const MultiTopicContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const CategoryContainer = styled.div`
  padding-bottom: 1rem;
  @media ${device.laptop1024} {
    padding-bottom: 1.2rem;
  }
  @media ${device.laptop1280} {
    padding-bottom: 1.5rem;
  }

  @media ${device.laptop1440} {
    padding-bottom: 2rem;
  }

  @media ${device.laptop1600} {
    padding-bottom: 2rem;
  }
`;
