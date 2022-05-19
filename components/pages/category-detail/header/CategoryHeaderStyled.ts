import { device } from "@configs/screensSizes";
import { TitleH1 } from "@utils/styled-components/GeneralTitleStyled";
import styled from "styled-components";

export const TopicHeaderWrapper = styled.div`
  width: 100%;
  padding-top: 33.33%;
  position: relative;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  padding: 100px 0 50px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media ${device.tablet768} {
    padding: 2rem 0 2rem 0;
  }
  @media ${device.laptop1024} {
    padding: 3rem 0 50px 0;
  }
  @media ${device.laptop1280} {
    padding: 5rem 0 50px 0;
  }

  @media ${device.laptop1280} {
    padding: 5rem 0 50px 0;
  }
  @media ${device.laptop1280} {
    padding: 7rem 0 50px 0;
  }
  @media ${device.laptop1600} {
    padding: 9rem 0 50px 0;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const TopicImageHeader = styled.div`
  position: relative;

  @media ${device.tablet768} {
    width: 70%;
    box-shadow: 30px -30px 0px -10px #898a90;
    height: 90%;
  }

  @media ${device.laptop1024} {
    width: 70%;
    box-shadow: 50px -50px 0px -10px #898a90;
    height: 100%;
  }

  @media ${device.laptop1440} {
    width: 65%;
  }

  @media ${device.laptop1600} {
    width: 60%;
  }
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

export const Image = styled.img``;

export const CategoryTitleH1 = styled(TitleH1)`
  color: #111111;
  text-align: right;
  width: 100%;
  @media ${device.tablet768} {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media ${device.laptop1024} {
    font-size: 3rem;
    line-height: 55px;
  }

  @media ${device.laptop1280} {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media ${device.laptop1440} {
    font-size: 80px;
    line-height: 80px;
  }

  @media ${device.laptop1600} {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const CategorySubTitle = styled.p`
  text-align: right;
  @media ${device.tablet768} {
    width: 95%;
    font-size: 0.55rem;
    margin-top: 15px;
  }

  @media ${device.laptop1024} {
    width: 100%;
    font-size: 0.55rem;
    margin-top: 15px;
  }

  @media ${device.laptop1280} {
    font-size: 0.7rem;
  }

  @media ${device.laptop1440} {
    width: 90%;
    font-size: 0.8rem;
  }

  @media ${device.laptop1600} {
    width: 80%;
    margin-top: 20px;
  }
`;
