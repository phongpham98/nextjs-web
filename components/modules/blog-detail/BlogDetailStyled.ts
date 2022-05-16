import { device } from "@configs/screensSizes";
import styled from "styled-components";
import { HeaderContainer } from "../headers/HeaderStyled";

export const BlogSingleHeaderContainer = styled(HeaderContainer)``;

export const TitleWrapper = styled.div`
  background: linear-gradient(
    176.83deg,
    rgba(0, 0, 0, 0) 41.16%,
    #000000 97.38%
  );
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1.5rem 0;
  @media ${device.tablet768} {
    gap: 0.2rem;
    padding: 0.5rem 0;
  }
  @media ${device.laptop1280} {
    gap: 0.4rem;
    padding: 1.5rem 0;
  }
`;

export const Title = styled.div`
  color: #25282b;
  text-transform: uppercase;
  font-family: "Playfair Display";
  width: 100%;
  text-align: center;
  @media ${device.tablet768} {
    font-size: 1.2rem;
    width: 90%;
  }

  @media ${device.laptop1024} {
    font-size: 1.5rem;
    width: 80%;
  }

  @media ${device.laptop1280} {
    font-size: 1.8rem;
    width: 80%;
  }

  @media ${device.laptop1440} {
    font-size: 2rem;
    width: 80%;
  }

  @media ${device.laptop1600} {
    font-size: 2.5rem;
    width: 80%;
  }
`;

export const TimeAndAuthor = styled.div`
  color: #25282b;
  text-transform: uppercase;
  font-size: 10px;
  margin-top: 0px;
  @media ${device.tablet768} {
    font-size: 10px;
    /* margin-top: 10px; */
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 5px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  border-radius: 50px;
  background-color: #6c6c6c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: white;
  @media ${device.laptop1024} {
    font-size: 0.8rem;
  }
`;

export const StarIcon = styled.div`
  font: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: yellow;
`;

export const LikeWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  color: #25282b;
  font-style: italic;
`;
